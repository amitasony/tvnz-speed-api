import { NextFunction, Request, Response } from "express";

export function notFound(_req: Request, res: Response) {
  res.status(404).json({ error: "Not Found" });
}

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (process.env.NODE_ENV !== "test") {
    // eslint-disable-next-line no-console
    console.error(err);
  }
  res.status(400).json({ error: "Bad Request", details: (err as Error)?.message ?? String(err) });
}
