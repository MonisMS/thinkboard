import express from "express"
import notesRouter from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
dotenv.config()
const app=express();
const PORT = process.env.PORT || 5000;



// ...existing code...

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://thinkboard-omega-two.vercel.app",
        "https://thinkboard-l12ql5ahon-monis-sarwars-projects.vercel.app"
    ]
}));

// ...existing code...
app.use(express.json())
app.use(rateLimiter)
app.use("/api/notes",notesRouter);

connectDB()
.then(()=>{
app.listen(PORT,() =>{ 
    console.log(`app is running on http://localhost:${PORT}`);
    
})
})

