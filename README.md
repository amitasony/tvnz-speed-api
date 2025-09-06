# TVNZ Speed API

A Node.js + TypeScript REST API that calculates **final speed** from an initial speed and a list of inclines.

- Uphill (+) reduces speed  
- Downhill (−) increases speed  
- Formula: `finalSpeed = initialSpeed - sum(inclines)`
---
## 🚀 How to Run (Development)

```bash
# install dependencies
npm install

# start in dev mode (auto restart with nodemon)
npm run dev

(Server will start on http://localhost:3000)

🧪 How to Test

Run automated tests (Jest + Supertest):

npm test


Expected: 3 tests pass ✅
📡 API Endpoint

POST /api/v1/final-speed

Request body
{
  "initialSpeed": 60,
  "inclines": [0, 30, 0, -45, 0]
}

Response
{
  "finalSpeed": 75
}
📂 Project Structure
src/
  domain/SpeedCalculator.ts   # Core logic (OOP domain class)
  dto.ts                      # Request validation (Zod)
  routes/speed.ts             # API route
  middleware/error.ts         # Error handling
  app.ts                      # Express app setup
  server.ts                   # Entry point
test/
  speed.e2e.test.ts           # End-to-end tests

✅ Notes

OOP + SOLID: domain logic isolated in SpeedCalculator

Validation with Zod ensures safe inputs

Middleware for error handling and 404

Jest + Supertest provide automated tests
