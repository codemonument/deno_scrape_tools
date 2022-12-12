import { assert, describe, it } from "@testing";
import { Puppeteer } from "@mod";

// TODO: Debug why this permissions flag is not working as thought - deno still asks for permission
describe(`mod.ts`, { permissions: { env: ["PUPPETEER_PRODUCT"] } }, () => {
  it(`should export correct objects and types`, () => {
    assert(Puppeteer);
  });
});
