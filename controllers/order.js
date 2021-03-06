const { Order, productCart } = require("../models/order");

exports.getOrderById = (req, res, next, id) => {
    Order.findById(id)
        .populate("products.product", "name price")
        .exec((err, order) => {
            if (err) {
                return res.status(400).json({
                    error: "could not find id"
                })
            }

            req.order = order;
            next();

        })
}

exports.createOrder = (req, res) => {
    req.body.order.user = req.profile;
    const order = new Order(req.body.order);
    order.save((err, order) => {
        if (err) {
            alert("hello")
            console.log("ERRPR",err)
            return res.status(400).json({
                error: "Failed to create order"
            })
        }
        return res.json(order)
    })
}

exports.getAllOrder = (req, res) => {
    Order.find()
        .populate("user", "_id name")
        .exec((err, order) => {
            if (err) {
                return res.status(400).json({
                    error: "Error in geting order"
                })
            }
            return res.json(order);
        })
}

exports.getOrderStatus = (req, res) => {
    return res.json(Order.schema.path("status").enumValues);
}

exports.updateStatus = (req, res) => {
    Order.update({ _id: req.body.orderId }, { $set: { status: req.body.status } },
        (err, order) => {
            if (err) {
                return res.status(400).json({
                    error: "Failed to update status"
                })
            }
            res.json(order);
        }
    )
}