const productsArray = [
    {
        id:"1",
        title:"Coffee",
        price:"4.99"
    },
    {
        id:"2",
        title:"Sunglass",
        price:"9.99"
    },
    {
        id:"3",
        title:"Camera",
        price:"34.99"
    },
]
function getproductData(id){
    let productData = productsArray.find(product=>product.id === id );
    if(productData == undefined){
        console.log("Product data does not exists for this ID:"+ id);
        return undefined
    }
    return productData
}

export{productsArray, getproductData}