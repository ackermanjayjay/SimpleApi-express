import express, { Request, Response } from "express";
var distance = require("euclidean-distance");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.get("/sum", (req: Request, res: Response) => {
  const { num1, num2, num3, num4 } = req.query;

  if (!num1 || !num2 || !num3 || !num4) {
    return res.status(400).json({ error: "Both numbers are required" });
  }

  // as a X1,X2, Y1, Y2
  const parseNum1 = +(num1 as String);
  const parseNum2 = +(num2 as String);
  const parseNum3 = +(num3 as String);
  const parseNum4 = +(num4 as String);
  if (
    isNaN(parseNum1) ||
    isNaN(parseNum2) ||
    isNaN(parseNum3) ||
    isNaN(parseNum4)
  ) {
    return res.status(400).json({ error: "Invalid numbers provided" });
  }
  const sum = distance([parseNum1, parseNum2], [parseNum3, parseNum4]);

  // Send the result as JSON response
  res.json({ sum });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
