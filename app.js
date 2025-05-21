import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

export async function handler(req) {
  return serveDir(req, {
    fsRoot: "./dist",
    urlRoot: "",
    showDirListing: true,
  });
}
