
const dotenv = require("dotenv").config(),
    mongoose = require("mongoose"),
    express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    cors = require("cors"),
    authRoutes = require("./routes/auth"),
    userRoutes = require("./routes/user"),
    categoryRoutes = require("./routes/category"),
    productRoutes = require("./routes/product"),
    orderRoutes = require("./routes/order"),
    stripeRoute = require("./routes/stripepayment"),
    PORT = process.env.PORT || process.env.LOCAL_PORT,
    brainTreeRoute = require("./routes/braintreepayment"),
    app = express();
//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//DB CONNECTIONS
mongoose.connect(process.env.SERVER_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DATABASE CONNECTED");
});

//MY ROUTESS
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api",stripeRoute)
app.use("/api",brainTreeRoute)



app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})