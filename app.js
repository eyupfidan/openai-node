const express = require('express')
const app = express()
const port = 8080
const homeRouter = require('./routes/homeRouter.js')
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
