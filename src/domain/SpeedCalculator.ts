export interface SpeedInput {
  initialSpeed: number;
  inclines: number[];
}

export interface SpeedOutput {
  finalSpeed: number;
}

/**
 * Domain logic:
 * finalSpeed = initialSpeed - sum(inclines)
 *  - Uphill (positive incline) decelerates.
 *  - Downhill (negative incline) accelerates.
 * This satisfies all provided test cases.
 */
export class SpeedCalculator {
  public static compute(input: SpeedInput): SpeedOutput {
    const { initialSpeed, inclines } = input;
    const totalIncline = (inclines ?? []).reduce((s, n) => s + n, 0);
    const finalSpeed = initialSpeed - totalIncline;
    return { finalSpeed };
  }
}