import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();

app.get('/', (req, res) => {
  res.send('PAGUELEVE API');
});

app.use(
  cors({
    origin: ['http://localhost:3000'],
  }),
);

app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Server live on: ${HOSTNAME}:${PORT}`);
});
