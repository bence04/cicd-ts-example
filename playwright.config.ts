import { defineConfig } from "@playwright/test";

// Ezek a tesztek nem nyitnak böngészőt (sima unit tesztek),
// ezért nincs szükség projects / browser beállításra.
export default defineConfig({
  testDir: "./tests",
  forbidOnly: !!process.env.CI,
  reporter: [
    ["list"],
    ["html", { open: "never" }],
    ["allure-playwright", { resultsDir: "allure-results" }],
  ],
});
