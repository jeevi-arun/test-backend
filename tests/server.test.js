import request from "supertest";
import express from "express";

const app = express();
app.get("/", (req, res) => res.send("Smart Expense Tracker Backend Running..."));

describe("Server Test", () => {
  it("should return server running message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Smart Expense Tracker Backend Running...");
  });
});

