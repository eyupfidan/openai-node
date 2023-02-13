const express = require('express')
const app = express()
const port = 80
const homeRouter = require('./route/homeRouter.js')
const cors = require("cors");
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}


app.use('/askQuestion', homeRouter)
app.use(cors(corsOptions))

app.listen(port, () => {
})
