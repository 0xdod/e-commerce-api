const request = require("supertest");

const app = require("../../app");
const db = require("../../db");
const env = require("../../env");

beforeEach(async () => {
  await db.connect(env("TEST_CLUSTER_URL"));
});

afterEach(async () => {
  await db.disconnect();
});

describe("Test product list", () => {
  test("response to the GET method", async () => {
    const response = await request(app).get("/api/v1/products");
    expect(response.statusCode).toBe(200);
  });
});
