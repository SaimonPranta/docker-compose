const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) =>{
    res.send("Your server is online now.")
})
app.get("/test_env", (req, res) =>{
    res.json({
      data: process.env.API_KEY,
    });
})
app.listen(port, () => {
  console.log(`Listening on port localhost:${port}`);
});
