import { Router } from "express";
import { SpeedCalculator } from "../domain/SpeedCalculator";
import { SpeedRequestSchema } from "../dto";

const router = Router();

router.post("/final-speed", (req, res, next) => {
  try {
    const parsed = SpeedRequestSchema.parse(req.body);
    const result = SpeedCalculator.compute(parsed);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

export default router;
