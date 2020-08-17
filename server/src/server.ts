import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json()); //Declarando que usaremos JSON para o express entender
app.use(routes);

app.listen(3333); //localhost:3333