import { createApp } from "./app";

const port = Number(process.env.PORT ?? 3000);
const app = createApp();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Speed API listening on :${port}`);
});
