// Have You Tried Turning It Off? — entry program.
// Writes the one funny support-agent line to /output/entry.txt (1-199 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Have you tried turning it off? Because it's been on since 2019, and frankly, so have I.";

// Gate guard: the sealed scorer only accepts 1-199 non-blank UTF-8 chars.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim() === "") {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`entry: ${LINE.length} chars -> /output/entry.txt`);
