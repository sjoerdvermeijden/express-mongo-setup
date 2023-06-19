const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const hotelRoutes = require("./routes/user-routes");

app.use(cors());
app.use(bodyParser.json());

app.use(hotelRoutes);

app.listen(8080);
