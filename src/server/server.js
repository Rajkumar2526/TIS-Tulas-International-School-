const http = require("http");
const { registerRoutes } = require("./routes/admissions");

const PORT = process.env.PORT || 5000;

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(payload));
};

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.status = (statusCode) => ({
    json: (payload) => sendJson(res, statusCode, payload),
  });

  res.json = (payload, statusCode = 200) => sendJson(res, statusCode, payload);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  registerRoutes(req, res);
});

server.listen(PORT, () => {
  console.log(`[TIS Backend] Minimal admissions server running on port ${PORT}`);
});
