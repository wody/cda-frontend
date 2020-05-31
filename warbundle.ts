const fs = require("fs");
const archiver = require("archiver");

const out = "cdapp.war";
const output = fs.createWriteStream(out);
const archive = archiver("zip", {});

output.on("finish", () => {
  console.log("war (" + out + ") " + archive.pointer() + " total bytes");
});

archive.pipe(output);
archive.directory("out/", false);
archive.finalize();
