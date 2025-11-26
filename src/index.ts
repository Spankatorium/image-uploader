import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log("Server running on port", port);
});