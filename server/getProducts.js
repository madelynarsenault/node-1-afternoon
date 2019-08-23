

const products = require('../products.json');


const getProducts= (req, res) => {
    if(req.query.price){
    const item = products.find(val => val.id === parseInt(req.params.id));
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(products);
};

module.exports = getProducts;
