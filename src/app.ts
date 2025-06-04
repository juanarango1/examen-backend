import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import roleRouter from "./routes/role.routes";
import usuarioRouter from "./routes/usuario.routes";
import { AppDataSource } from "./config/database";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/roles", roleRouter);
app.use("/usuarios", usuarioRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)))
    .catch(err => {
        console.error("DB init error:", err);
        process.exit(1);
    }); 