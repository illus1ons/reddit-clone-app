import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source"

const app = express();
const port = 4000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("runngin"));

app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);

    AppDataSource.initialize().then(async () => {
        console.log("database initialized");
    }).catch(error => console.log(error))
});
