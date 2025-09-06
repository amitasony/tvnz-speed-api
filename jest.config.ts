import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(test).[tj]s"],
  moduleFileExtensions: ["ts", "js"],
};

export default config;
