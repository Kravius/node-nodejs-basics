import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const streamRead = fs.createReadStream(filePath, "utf-8");
    streamRead.on("data", (chunk) => {
      console.log(chunk);
    });
    streamRead.on("end", () => {
      console.log("end");
    });
    streamRead.on("error", () => {
      throw new Error();
    });
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await read();
