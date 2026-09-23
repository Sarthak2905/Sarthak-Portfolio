import express from "express";
import cors from "cors";

const app = express();

// middlewares

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Server is running",
        timestamp: new Date().toISOString(),
    });
});

// 404 handler (for any route not matched above)

app.use((req, res) => {
    res.status(404).json({
        status: "error",
        message: `Route ${req.originalUrl} not found`
    });
});

export default app;