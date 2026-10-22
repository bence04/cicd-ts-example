export function addNumbers(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("addNumbers csak számokat fogad el");
  }
  return a + b;
}
