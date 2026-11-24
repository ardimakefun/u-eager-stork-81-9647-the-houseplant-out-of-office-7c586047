import { mkdirSync, writeFileSync } from "node:fs";

// One out-of-office auto-reply, written as if a houseplant sent it.
// Written with no trailing newline so the file holds exactly the text.
const TEXT =
  "Out of office. Out of water since March. Your email will be watered just like me: never.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
