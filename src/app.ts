import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./app/modules/routes/user";

const app: Application = express(); //typescript er jonno Application
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Home",
  });
});

app.use("/api/v1/user", userRoute);

export default app;
