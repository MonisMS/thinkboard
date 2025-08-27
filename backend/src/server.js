import express from "express"
import notesRouter from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
dotenv.config()
const app=express();
const PORT = process.env.PORT || 5000;



app.use(cors(
    {origin:["http://localhost:5173",
       "https://thinkboard-omega-two.vercel.app/"
    ]}
))
app.use(express.json())
app.use(rateLimiter)
app.use("/api/notes",notesRouter);

connectDB()
.then(()=>{
app.listen(PORT,() =>{ 
    console.log(`app is running on http://localhost:${PORT}`);
    
})
})

