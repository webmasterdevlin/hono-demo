import { describe, test, expect } from "bun:test";
import { app } from "..";

const baseUrl = "http://localhost:8080";

describe("Users Controller", () => {
  test.skip("GET users Should return 200 Response", async () => {
    const req = new Request(`${baseUrl}/api/users`);
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });
});
