const Parse = require('../../vendor/Parse')
const path  = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { extractMobile } = require('./mobile')
const PRODUCT_TYPE = 'product'



exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type product implements Node {
      featuredImg: [File] @link(from: "fields.localFile")
    }

  `)
}

function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}

const uniqueId = (length=16) => {
  return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""))
}

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    getNodesByType,
    getCache,
  }) => {
    await extractMobile({ actions, createNodeId, createContentDigest })
  }


  exports.onCreateNode = async ({
    node,
    actions: { createNode, createNodeField },
    createNodeId,
    getCache,
  }) => {
   
    if (
      node.internal.type === PRODUCT_TYPE
    ) {

      const fileNodesP = node.media.map(m => {
        return createRemoteFileNode({
          // The source url of the remote file
          url: m.url,
        
          // The id of the parent node (i.e. the node to which the new remote File node will be linked to.
          parentNodeId: node.id,
        
          // Gatsby's cache which the helper uses to check if the file has been downloaded already. It's passed to all Node APIs.
          getCache,
        
          // The action used to create nodes
          createNode,
        
          // A helper function for creating node Ids
          createNodeId,
          ext: ".jpg",
        })
      })

      const fileNodes = await Promise.all(fileNodesP)
      await createNodeField({ node, name: "localFile", value: fileNodes.map(f => f.id) })


    }
  }



  
  exports.createPages = async ({ graphql, actions, reporter }) => {

    const { createPage } = actions
    const result = await graphql(
      `
        {
          products: allMobile {
            edges {
              node {
                id,
                num,
                group
              }
            }
          }
        }
      `
    );

    const blogPostTemplate = path.resolve(`src/template/Number.tsx`);
    const masterList = result.data.products.edges.map(({ node }, i) => ({ ...node }))


    const allNumbers = [
      ...masterList
    ]
    const allLinks = allNumbers.map((item, i) => i === 0 ? "start" : uniqueId()) 

 
    chunk(allNumbers, 12).forEach((numbers, i) => {
      const path = `/find-numbers/${i}`
      const nextLink = allLinks[i + 1] && `/find-numbers/${allLinks[i + 1]}`;
      const prevLink = allLinks[i - 1] && `/find-numbers/${allLinks[i - 1]}`;
      if(i === 0) {
        console.log(path)
      }

      createPage({
        path,
        component: blogPostTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          pagePath: path,
          prevLink,
          nextLink,
          items: numbers,
          allLinks
        },
      })
    })

  }