import { serve } from "https://deno.land/std@0.171.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.171.0/http/file_server.ts";

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  let filepath = `./dist${url.pathname}`;

  // Serve index.html for root or non-file paths
  if (url.pathname === "/" || url.pathname === "") {
    filepath = "./dist/index.html";
  }

  try {
    return await serveFile(req, filepath);
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
};

console.log("Server running on http://localhost:8000");
serve(handler, { port: 8000 });
