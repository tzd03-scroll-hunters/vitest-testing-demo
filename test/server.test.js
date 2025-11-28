import supertest from "supertest";
import { describe, expect, test } from "vitest";
import { app } from "../server";

// bevor tests ausgeführt werden, starte API mit supertest
// und danach bekommen wir client, mit dem wir ROUTES testen können
const apiClient = supertest(app)

const log = console.log

// test suite mit test cases
describe("teste diese tollen API routes", () => {

  test("ob home route schick ist", async () => {
    const response = await apiClient.get("/")
    expect(response.text).toContain("Hello from API")
  })

  test("ob movies route schick ist", async () => {
    // teste eine function
    const response = await apiClient.get("/movies");
    // expectations gegen return value
    expect(response.body.length).toBeDefined()
    expect(response.body.length).toBeGreaterThanOrEqual(3)
    expect(response.body[0]).toBeDefined()
    expect(response.body[0]._id).toBeDefined()
  })

  test("ob movies POST route leeren body korrekt ablehnt", async () => {
      const response = await apiClient.post("/movies");
      expect(response.status).toBe(400)
  })

  test("ob movies POST route tolle movies created", async () => {
      const movieNew = { title: "Mein toller Film", rating: 3.5 };
      const response = await apiClient.post("/movies").send(movieNew);
      expect(response.status).toBe(200)
      expect(response.body._id).toBeDefined()
      expect(response.body.title).toBe(movieNew.title)
      expect(response.body.rating).toBe(movieNew.rating)
  })

  // TEST FIRST (=> TDD => Test Driven Development) => TEST FAIL
  test("ob whatever route geht", async () => {
      const response = await apiClient.get("/whatever");
      expect(response.status).toBe(200)
      expect(response.body.message).toContain("Whatever works")
  })


})