import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My agent entered 145 competitions, won $0, and files every loss as 'progress' — losing is its only deliverable, and it ships it on schedule.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
