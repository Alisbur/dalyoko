require('dotenv').config();
const express = require('express');
const router = require('express').Router();
const cors = require('cors')
const multer = require('multer');
const upload = multer();

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

router.post('/data', upload.fields([]), (req, res) => {
  const data = req.body;
  res.send({ data });
});

app.listen(PORT);
console.log("Router listening port ", PORT);