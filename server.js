const express = require("express");
const cors = require("cors");
const fs = require("fs");
const PORT = 4000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/data", (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Sever Error");
    }
    res.send(data);
  });
});

app.post("/create", (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Sever Error");
    }
    const temp = JSON.parse(data);
    temp.dates.push(req.body);
    fs.writeFileSync("./data/data.json", JSON.stringify(temp));
    res.send(temp);
  });
});

app.post("/update", (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Sever Error");
    }
    const temp = JSON.parse(data);
    temp.dates[req.body.id - 1] = req.body;
    fs.writeFileSync("./data/data.json", JSON.stringify(temp));
    res.send(temp);
  });
});

app.delete("/delete", (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Sever Error");
    }
    const temp = JSON.parse(data);
    const tempArr = temp.dates.filter((a) => a.id !== req.body.id);
    fs.writeFileSync(
      "./data/data.json",
      JSON.stringify({ dates: [...tempArr] })
    );

    res.send({ dates: [...tempArr] });
  });
});
