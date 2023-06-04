require("dotenv").config();
const PORT = process.env.SERVER_PORT;

const express = require('express');
const cors = require("cors");

const { getAllDonations } = require("./functions/donationsHandler");
const app = express();
app.use(express.json())
app.use(cors({
  origin: '*'
}));

app.listen(PORT, () => {
  console.log(`Server up & running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send(200)
  });

app.get('/donations', (req, res) => {
  const donations = getAllDonations();
  res.send(donations);
})