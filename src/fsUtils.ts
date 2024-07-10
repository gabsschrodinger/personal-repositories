import fs from "fs";
import { Config } from "./types";

const CONFIG_PATH = "config.json";

export function getConfig(): Config {
  const configContent = fs.readFileSync(CONFIG_PATH, {
    encoding: "utf-8",
    flag: "r",
  });

  return JSON.parse(configContent);
}

export function getListOfArticles(config: Config): string[] {
  return fs.readdirSync(config.sourcePath);
}

export function saveContent(content: string, outputPath: string): void {
  fs.writeFileSync(outputPath, content, {
    encoding: "utf-8",
    flag: "w",
  });
}

export function getBaseHtmlContent(): string {
  return fs.readFileSync("src/artifacts/base.html", {
    encoding: "utf-8",
    flag: "r",
  });
}

export function overwriteCss(): void {
  const cssContent = fs.readFileSync("src/artifacts/styles.css", {
    encoding: "utf-8",
    flag: "r",
  });

  fs.writeFileSync("dist/articles/styles.css", cssContent, {
    encoding: "utf-8",
    flag: "w",
  });
}
