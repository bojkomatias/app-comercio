var faunadb = require('faunadb'),
  q = faunadb.query;
const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

const client = new faunadb.Client({
  secret: process.env.FAUNA_KEY
});

app.get('/product/:id', async (req, res) => {
  const response = await client.query(
    q.Get(q.Ref(q.Collection('comercio'), req.params.id))
  )
  res.send(response)
})



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})