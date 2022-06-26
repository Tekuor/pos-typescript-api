import app from "./app";
import mongoose from "mongoose";

const { MONGODB_URL = "", PORT } = process.env;
mongoose.connect(MONGODB_URL, {});

const port = PORT || 3000;
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
