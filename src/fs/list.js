import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  try {
    const filesArr = await fs.readdir(path.join(__dirname, "files"));
    console.log(filesArr);
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await list();
