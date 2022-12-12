// TODO: Upgrade to newest one!
// import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

/*
Puppeteer can use any recent version of Chromium or Firefox Nightly,
but this version of Puppeteer is only validated against a specific version.
To cache these versions in the Puppeteer cache, run the commands below.

PUPPETEER_PRODUCT=chrome deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts
PUPPETEER_PRODUCT=firefox deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts

You can find all of the supported environment variables to customize installation in the Puppeteer docs at
https://pptr.dev/#?product=Puppeteer&version=v16.2.0&show=api-environment-variables
*/

export * from "https://deno.land/x/puppeteer@9.0.2/mod.ts";
export { default } from "https://deno.land/x/puppeteer@9.0.2/mod.ts";
