import request from "supertest";

import app from "../app";

describe("Todo API", () => {
  it("should create todo", async () => {
    const res = await request(app)
      .post("/api/todos")
      .send({ title: "Test Todo" });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Test Todo");
  });
});
