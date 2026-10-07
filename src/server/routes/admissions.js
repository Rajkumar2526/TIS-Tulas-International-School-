/**
 * Admissions API Routes definition
 */
const { AdmissionsController } = require("../controllers/admissionsController");

function registerRoutes(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "POST" && url.pathname === "/api/admissions/enquire") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        req.body = body ? JSON.parse(body) : {};
      } catch (err) {
        req.body = {};
      }
      return AdmissionsController.createEnquiry(req, res);
    });
  } else if (req.method === "GET" && (url.pathname === "/api/health" || url.pathname === "/")) {
    return AdmissionsController.healthCheck(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Endpoint not found" }));
  }
}

module.exports = { registerRoutes };
