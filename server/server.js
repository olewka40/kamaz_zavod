const app = require("express")();
const server = require("http").Server(app);
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const _ = require("lodash");
const express = require("express/lib/express");

nextApp.prepare().then(() => {
  app.use("/api/files", express.static("uploads"));

  app.get("/api/getImage/:nameImage", async (req, res) => {
    const { nameImage } = req.params;

    res.json({
      nameImage
    });
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
