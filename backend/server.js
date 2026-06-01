import express from 'express';
import { PORT } from './config/config.js';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
// import cors from 'cors';

const app = express();
app.use(express.json());

// app.use(cors());


// Connect to MongoDB
connectDB();

app.use("/api/users", userRouter)



app.get('/', (req, res) => {
  res.send('Hello, World!');
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});