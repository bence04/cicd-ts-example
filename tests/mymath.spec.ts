import { test, expect } from "@playwright/test";
import { addNumbers } from "../src/mymath";

test("pozitív számok összeadása", () => {
  expect(addNumbers(1, 2)).toBe(3);
});

test("nulla hozzáadása", () => {
  expect(addNumbers(1, 0)).toBe(1);
});

test("negatív szám hozzáadása", () => {
  expect(addNumbers(4, -100)).toBe(-96);
});

test("szöveg esetén TypeError-t dob", () => {
  // A TypeScript fordító ezt eleve hibának jelezné, a @ts-expect-error
  // kikapcsolja ezt az egy sort, hogy futás közben is ellenőrizhessük.
  expect(() => addNumbers(4, "I DO NOT BELONG HERE")).toThrow(TypeError);
});
