import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const originalFile = path.join(__dirname, "files", "wrongFilename.txt");
  const newFile = path.join(__dirname, "files", "properFilename.md");

  try {
    await fs.access(originalFile).catch(() => {
      throw new Error("Original file does not exist");
    });
    const isError = await fs
      .access(newFile)
      .then(() => true)
      .catch(() => {
        false;
      });

    if (isError) throw new Error("file exist");

    await fs.rename(originalFile, newFile);
    console.log("File renamed!");
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await rename();
