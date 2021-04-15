const fs = require("fs");
const https = require("https");
const url = "https://jsonplaceholder.typicode.com/posts";

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    fs.writeFile("./result/posts.json", body, (err) => {
      if (err) throw err;
      console.log("File created successfully!")
    })
  });
});