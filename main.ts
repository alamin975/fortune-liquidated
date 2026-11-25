// Fortune Cookie for the Liquidated Trader — one fortune cookie line for a
// crypto trader who just got liquidated, written to /output/entry.txt.
import * as fs from "node:fs";

const entry = "Your next trade will be legendary. The market just needed you to stop trading first.";

// Write the single fortune line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
