const dbConnect = require("./db/connect");
const login = require("./middleware/login");
const register = require("./middleware/register");
const express = require("express");
const cors = require("cors")
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(
    cors({
      origin: 'http://localhost:3000',
    }),
);

app.post('/login', login)
app.post('/register', register)

PORT = process.env.SERVER_PORT


const start = async () => {
    try {
      await dbConnect(process.env.MONGO_URI);
      console.log(`Connection to DB established successfully...`)
      app.listen(PORT, () => console.log(`Server live... \nlistening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
};
  
start();