const pool = require("../../config/db");

// create a product
exports.create = async (req, res) => {
    try {
        const { product_ref, product_name, product_category } = req.body;
        const newProduct = await pool.query("INSERT INTO product (product_ref, product_name, product_category) VALUES ($1, $2, $3) RETURNING *", [product_ref, product_name, product_category]);
        res.json(newProduct.rows[0]);//newTodo
    }
    catch (err) {
        console.error(err.message)
    }
};

// find all products
exports.findAll = async (req, res) => {
    try {
        const allProduct = await pool.query("SELECT * FROM product");
        res.json(allProduct.rows);
    } catch (err) {
        console.error(err.message);
    }
};

// find product
exports.findByRef = async (req, res) => {
    try {
        const { ref } = req.params;
        const oneProduct = await pool.query("SELECT * FROM product WHERE product_ref=$1", [ref]);
        res.json(oneProduct.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

// Update
exports.update = async (req, res) => {
    try {
        const { ref } = req.params;
        const { product_ref, product_name, product_category } = req.body;
        await pool.query(
            "UPDATE product SET product_ref = $2, product_name = $3, product_category = $4  WHERE product_ref = $1",
            [ref, product_ref, product_name, product_category]);
        res.json("Product was update!");
    } catch (err) {
        console.error(err.message);
    }
};

// delete
exports.delete = async (req, res) => {
    try {
        const { ref } = req.params;
        await pool.query("DELETE FROM product WHERE product_ref = $1", [ref]);
        res.json("Todo was deleted !");
    }
    catch (err) {
        console.error(err.message)
    }
};