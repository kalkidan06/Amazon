const functions = require("firebase-functions");


const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    "sk_test_51JL4qNB7cJIHuwvUqTn4bN4Qsuify9DLQzz3l3OEg6UULwB0CwwnvtjYuBOxpjcPFb7iHb9d1ch47a6ZVJ5fJpsT00QPcrB8dI"
);


const app = express();

//(http://localhost:5001/project-34fb8/us-central1/api)
// http://localhost:4000
//https://github.com/firebase/firebase-tools/issues

app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Recieved for this amount >>> ', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
    currency: 'usd',
    });
    
    // OK - Created
    response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    });
});


exports.api = functions.https.onRequest(app);