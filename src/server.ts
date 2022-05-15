import cors from 'cors';
import { app } from './app';

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

app.use(
  cors({
    origin: [`${HOSTNAME}:${PORT}`],
  }),
);

app.listen(PORT, () => {
  console.log(`Server live on: ${HOSTNAME}:${PORT}`);
});
