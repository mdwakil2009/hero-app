import path from "path";
import { promises as fs } from "fs";

export const getAllApps = async () => {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);
  return data;
};
