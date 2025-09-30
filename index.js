import cors from 'cors';
import express from 'express';
const app = express();
const port = 8000;
import planets from './routes/planets.js';

app.use(cors({
  origin: (origin, callback) => {
    console.log("Request origin:", origin);
    if ([
      process.env.ALLOWED_ORIGIN1,
      process.env.ALLOWED_ORIGIN2
    ].includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use('/planets/', planets);

app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
});