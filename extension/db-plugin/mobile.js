const Parse = require('../../vendor/Parse')
const PRODUCT_TYPE = 'mobile'

const extractMobile = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;
    const CustomClass = Parse.Object.extend('Item');    
    const query = new Parse.Query(CustomClass);
    const items = await query
    .equalTo('type', 'mobile')
    .limit(15000)
    .find({ 
      useMasterKey: true
    });

    const groupFront = items.filter(i => ['D', 'U'].includes(i.get('data').group));

    groupFront.forEach(async item => {

        const data = item.get('data') ? item.get('data') : {}
        const updateDate  = item.get('createdAt')
  
        const newData = {
          ...data,
          updateDate
        }
  
        const nodeId = createNodeId(`${PRODUCT_TYPE}-${item.id}`);
  
        const nodeObj = await createNode({
          ...newData,
          productId: item.id,
          id: createNodeId(`${PRODUCT_TYPE}-${item.id}`),
          parent: null,
          children: [],
          internal: {
            type: PRODUCT_TYPE,
            contentDigest: createContentDigest(newData),
          },
        })
  
  
  
  
      })

}

module.exports = {
    extractMobile
}