import express, { Application } from "express";
import { config } from "dotenv";

import registerRouter from "./router";
import registerMiddlewares from "./middlewares";

const app: Application = express();

registerMiddlewares(app);
registerRouter(app);

config();
0;

const PORT: string | number = 4000;
const ENV: string = process.env.NODE_ENV || "development";

app.listen(PORT, () =>
    console.log(
        ` 📡 Backend server: ` + ` Running in ${ENV} mode on port ${PORT}`,
        `http://localhost:${PORT}/api/v1/docs`
    )
);
