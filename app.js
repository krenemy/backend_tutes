const express = require('express');
const app = express();
const morgan = require("morgan");


app.use(morgan("dev"));

const productRoutes = require("./api/routes/products") 
const orderRoutes = require("./api/routes/orders")

app.use("/products",productRoutes)
app.use("/orders",orderRoutes)

app.use((req,res,next)=>{
    const error = new Error ("Not found")
    error.status(400)
    next(error)
})
app.use((req, res, next) => {
    res.status(error.staus || 400);
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;