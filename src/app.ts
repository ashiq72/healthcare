import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./app/modules/routes/user";
import { AdminRoutes } from "./app/modules/routes/admin";

const app: Application = express(); //typescript er jonno Application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Home",
  });
});

app.use("/api/v1/user/", userRoute);
app.use("/api/v1/admin/", AdminRoutes);

export default app;
