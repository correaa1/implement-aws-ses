const express = require("express");
const serverless = require("serverless-http");
import sendEmail from "./ses.js";

// Create an instance of the Express app
export const app = express();

// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/",  (req, res) => {
  sendEmail()
  res.json({
    hello: "hi!"
  });
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/main`, router);

// Export the app and the serverless function
export const handler = serverless(app);