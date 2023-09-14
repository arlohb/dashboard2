import { createServer } from "cors-anywhere";

import express from "express";

const host = "0.0.0.0";
const port = 4244;

createServer({
  originWhitelist: [],
  requireHeader: [],
  removeHeaders: [],
}).listen(port, host, () => {
  console.log("Running CORS anywhere");
});

const app = express();

