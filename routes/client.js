 const express = require("express")
 const router = express.Router();

 const {sendMessage} = require("../controllers/client")

 router.post("/client",sendMessage)


 module.exports = router;