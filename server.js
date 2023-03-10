import express from 'express';
import mongoose from 'mongoose'
import movieRoutes from './src/routes/movie-router.js';
import userRoutes from './src/routes/user-router.js';

const PORT = 4000;
const URL =
  'mongodb+srv://dyamorph:1234@cluster0.gohnffn.mongodb.net/gallery?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(movieRoutes);
app.use(userRoutes);

mongoose
  .connect(URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

