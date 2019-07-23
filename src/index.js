var http = require("http");
var SecuconnectJsSdk = require("secuconnect-js-sdk");

var defaultClient = SecuconnectJsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth_token
var oauth_token = defaultClient.authentications["oauth_token"];
oauth_token.accessToken = "PCR_3TSWKT45A2N9YXUR70ZAVASF4RNMAH";

var api = new SecuconnectJsSdk.PaymentContainersApi();
api.paymentContainersGet().then(
  function(data) {
    console.log("API called successfully. Returned data: " + data);
  },
  function(error) {
    console.error(error);
  }
);

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client

    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
