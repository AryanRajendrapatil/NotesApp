
const cors = require('cors')
const express = require('express')
const connectDB=require("./model/connect")
connectDB();

const routes=require('./routes/routes.js');
const app = express()


const port = 5000

const corsOption={
    origin:"*",
}
app.use(cors(corsOption))
app.options("*", cors(corsOption))





app.use(express.json())


app.use('/api',routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

