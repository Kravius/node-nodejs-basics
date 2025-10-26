import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourceDir = path.join(__dirname, "files");
  const destinationDir = path.join(__dirname, "files_copy");

  try {
    await fs.access(sourceDir).catch(() => {
      throw new Error();
    });
    await fs.cp(sourceDir, destinationDir, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    console.log("Folder copied successfully!");
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await copy();
