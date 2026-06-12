import fs from "fs";

console.log("starttt");

fs.readFile("./text.md", async (err, data) => {
  if (err) {
    console.log("error occured! ", err);
    return;
  }
  console.log("file read successfully ", data.toString());
  fs.rm("./myFolder", { recursive: true, force: true }, (err) => {
    console.log(err);
  });
});

console.log("heyy");
