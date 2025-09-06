import { z } from "zod";

export const SpeedRequestSchema = z.object({
  initialSpeed: z.number({ required_error: "initialSpeed is required" })
    .finite().nonnegative(),
  inclines: z.array(z.number().finite())
});

export type SpeedRequest = z.infer<typeof SpeedRequestSchema>;
