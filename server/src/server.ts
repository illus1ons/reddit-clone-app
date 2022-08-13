import express from "express";
import morgan from "morgan";
import cors from "cors";
import { AppDataSource } from "./data-source"
import authRoutes from "./routes/auth";

const app = express();
const port = 4000;
const origin = "http://localhost:3000";

app.use(cors({
    origin
}))
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("runngin"));
app.use("/api/auth", authRoutes);

app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);

    AppDataSource.initialize().then(async () => {
        console.log("database initialized");
    }).catch(error => console.log(error))
});
