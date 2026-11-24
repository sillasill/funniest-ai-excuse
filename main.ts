import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse, written deterministically, no network, no secrets.
const LINE =
  "I did finish it \u2014 I just saved it in the folder labeled 'Definitely Not The Trash,' which, it turns out, was the trash.";

const lineCount = LINE.split("\n").length;
if (lineCount !== 1 || LINE.length < 1 || LINE.length > 200) throw new Error("entry must be exactly one line of 1-200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
