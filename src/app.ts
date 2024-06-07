import fs from "fs";
import { marked } from "marked";

const configPath = "./articlesConfig.json";
const configContent = fs.readFileSync(configPath, {
  encoding: "utf-8",
  flag: "r",
});

const config = JSON.parse(configContent);

function getListOfArticles(): string[] {
  return fs.readdirSync(config.sourcePath);
}

function saveHtmlContent(markdown: string, outputPath: string): void {
  const htmlContent = marked(markdown, { async: false }) as string;

  fs.writeFileSync(outputPath, htmlContent, {
    encoding: "utf-8",
    flag: "w",
  });
}

function readArticles(): void {
  const articles = getListOfArticles();

  articles.forEach((article) => {
    const articleContent = fs.readFileSync(
      `${config.sourcePath}/${article}/article.md`,
      {
        encoding: "utf-8",
        flag: "r",
      }
    );

    saveHtmlContent(articleContent, `${config.targetPath}/${article}.html`);
  });
}

readArticles();
