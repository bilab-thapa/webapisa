
const express = require('express');
const router = new express.Router();
const Product = require('../model/product_model');
const auth = require('../auth/auth');
const upload = require('../assetsFile/assets_file');


//ANCHOR route to insert product by customer

router.post('/product/insert',auth.customerGuard,upload.single('pimage'),(req,res)=>{
    const productname = req.body.productname;
    const price = req.body.price;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const category = req.body.category;
    const image = req.body.image;
    const userId = req.customerInfo._id;

    const data = new Product({
        productname : productname,
        price:price,
        description:description,
        quantity:quantity,
        category:category,
        image:image,
        userId:userId
    })
    data.save()
    .then()
    .catch()
})

module.exports = router;