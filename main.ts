// One-Star Review of Something Essential
// A deadpan one-star complaint about sleep, filed in earnest.
// Node 22 standard library only. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line: a sincere complaint about something essential
// that cannot be fixed, with the twist in the final words.
const REVIEW =
  "Sleep charges eight hours a night, delivers nothing I can remember, and offers no refund — yet I renew every evening without reading the terms.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
