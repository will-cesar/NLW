import "reflect-metadata";
import express from 'express';

import { router } from "./routes";
import './database';
// quando o import é um arquivo index, não precisa especificar o nome do arquivo
// o js importa por padrão o arquivo com nome de index diretamente

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running at: http://localhost:3000"));