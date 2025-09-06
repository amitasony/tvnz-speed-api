import request from "supertest";
import { createApp } from "../src/app";

const app = createApp();

describe("/api/v1/final-speed", () => {
  const body = { inclines: [0, 30, 0, -45, 0] };

  it("Test 1: initial 60 -> 75", async () => {
    const res = await request(app)
      .post("/api/v1/final-speed")
      .send({ initialSpeed: 60, ...body });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ finalSpeed: 75 });
  });

  it("Test 2: initial 75 -> 90", async () => {
    const res = await request(app)
      .post("/api/v1/final-speed")
      .send({ initialSpeed: 75, ...body });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ finalSpeed: 90 });
  });

  it("Test 3: initial 80 -> 95", async () => {
    const res = await request(app)
      .post("/api/v1/final-speed")
      .send({ initialSpeed: 80, ...body });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ finalSpeed: 95 });
  });
});
