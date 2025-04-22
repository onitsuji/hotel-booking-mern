import express, { type Response, type Request } from "express";
import cors from "cors";
import "dotenv/config";

export const app = express();
// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "it is working" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
