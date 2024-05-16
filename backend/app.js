import express from "express";
import routes from './routes/routes.js'
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}))


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(3001, ()=>{
    console.log("running")
})


