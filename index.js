require('dotenv').config()

const { json, urlencoded } = require("body-parser")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
const inventory_routes = require('./routes/inventory_route')
const image_routes = require('./routes/image_route')

app.use(json()) // for parsing application/json
app.use(urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/api/inventory', inventory_routes);
app.use('/api/image', image_routes);

app.listen(port, () => console.log(`Listening on port ${port}..`));



