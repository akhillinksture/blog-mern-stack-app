import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import mongoose from "mongoose";
import postRouter from "./routes/post.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
const PORT = process.env.PORT || '5000';
app.use("/posts", postRouter)

// MongoDb server connection
// const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fbs6arx.mongodb.net/?retryWrites=true&w=majority`
const CONNECTION_URL = `mongodb+srv://laraonex3:laraonex3@laraonex3.ecsxnru.mongodb.net/?retryWrites=true`
// mongodb+srv://laraonex3:<password>@laraonex3.ecsxnru.mongodb.net/?retryWrites=true
//useNewUrlParser,useUnifiedTopology and useFindAndModify, prevent console error purpose.
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`)))
    .catch((error) => console.log(`${error.message} ${error.codeName ? `codeName: ${error.codeName}` : ""} ${error.code ? `, code:${error.code}` : ""} `));


app.get('/', (req, res) => {
    res.send("home page")
})

