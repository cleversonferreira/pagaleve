import { app } from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';



mongoose.connect('mongodb://pagaleve:pagaleve@pagaleve-mongodb:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Database connected');
});

app.listen(PORT, () => {
  console.log(`Server live on: ${HOSTNAME}:${PORT}`);
});
