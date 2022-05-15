import express from "express";
// import routes from "./routes";
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());

// app.use(routes);
export default app;
