import express from "express";
import router from "./src/routes/joke.routes.js";
import morgan from "morgan";
import cors from "cors";
import { specs } from "./src/config/swagger.js";
import swaggerUI from "swagger-ui-express";

const app = express();
const port = 3000

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/jokes', router);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));


export default app;
