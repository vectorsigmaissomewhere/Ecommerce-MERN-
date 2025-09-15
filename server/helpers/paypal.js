const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfyAIXYBToCaKQG0oGIjP_a5UsCthY53kAS7PtYlxs8S3Hlr_8UhbW01FZNxNjXL48xkDgsTEpqECUog",
  client_secret: "EIMn1cH9-lnDaoa_-qVJJeJrgxb0FHM77cW1AWQW38az1xMHtfcRZt6s0sUmFLrrF5mNkvhUBw540Oko",
});

module.exports = paypal;