import { assert, describe, it } from "@testing";
import { Puppeteer } from "@mod";

describe(`mod.ts`, () => {
  it(`should export correct objects and types`, () => {
    assert(Puppeteer);
  });
});
