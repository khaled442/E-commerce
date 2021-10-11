const Products = require('../models/productModel')



class APIfeatures {
    constructor(query, queryString) {
        this.query = query
        this.queryString= queryString
    }
    filtering(){
        const queryObj = {...this.queryString}   // queryString =  req.query
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(queryStr))



        return this
    }
    
    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('created at')

        }
        return this
    }

    pagination(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 20
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}


const productCtrl ={
    getProducts: async(req,res)=> {
        try {
            console.log(req.query)
            const features = new APIfeatures(Products.find(), req.query)
            .filtering().sorting().pagination()
            const products = await features.query

            res.json({
                status: 'succes',
                result: products.length,
                products: products
            })

            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    prodcutDetail: async(req,res)=> {
        try {
            const product = await Products.findById(req.params.id)
            res.send(product)
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    createProduct: async(req,res)=> {
        try {
            const {product_id, title, price,description, content, images,category,sold} = req.body
            // if(!images )  return res.status(400).json({msg: "No image upload"})

            const product = await Products.findOne({product_id})
            if(product)  return res.status(400).json({msg: "This product already exists."})

            const newProduct = new Products ({
                product_id,title, price,description, content, images,category,sold
            })

            await newProduct.save()
            res.json({msg: 'created a product'})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    deleteProduct: async(req,res)=> {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({msg: 'deleted a product'})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    updateProduct: async(req,res)=> {
        try {
            const {title, price,description, content, images,category} = req.body
            // if(!images )  return res.status(400).json({msg: "No image upload"})
            
            const product = await Products.findOneAndUpdate( req.params.id , {...req.body })
            res.json({msg: 'Updated a Product', product: product})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }

}


module.exports = productCtrl