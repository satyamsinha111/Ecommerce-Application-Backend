var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "gxxphn9bywhy7fxd",
  publicKey: "dyyy6zq46jkkn8v7",
  privateKey: "37071541b2e02e59a1685111e60fcf8f"
});


exports.getToken=(req,res)=>{
    gateway.clientToken.generate({}, function (err, response) {
        if(err)
        {
            res.send(err)
        }
        else{
            res.send(response)
        }
      });
}

exports.processPayment = (req,res)=>{
    let nonceFromTheClient = req.body.nonceFromTheClient;
    let amountFromTheClient = req.body.amount; 
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
          if(err)
          {
              res.status(500).json({
                  error:err
              })
          }
          else{
              res.json(result)
          }
      });
}