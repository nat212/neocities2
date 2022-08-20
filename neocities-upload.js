const neocities = require("neocities");
const fs = require("fs");

const sitename = process.env.SITENAME;
const password = process.env.PASSWORD;

if (!(sitename && password)) {
  console.log("Please set SITENAME and PASSWORD environment variables");
  process.exit(1);
}

const api = new neocities(sitename, password);

fs.readdirSync("./dist/neocities2").forEach((file) => {});

// TODO: Finish implementation.
const files = api.get("/list", {}, (resp) => {
  const files = resp.result === "success" ? resp.files : [];
  for (const file of files) {
  }
});
