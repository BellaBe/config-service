const express = require("express");
process.env.NODE_ENV = "development";

const config = require("./config/config");
const app = express();

app.get("/", (req, res) => {
  res.json(global.gConfig);
});

app.listen(global.gConfig.node_port, ()=>{
  console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
});