import {} from "@mod";
import { log } from "@deps/std_log.ts";

try {
  log.info(`Empty Example!`);
} catch (error) {
  console.error(error);
  Deno.exit();
}
