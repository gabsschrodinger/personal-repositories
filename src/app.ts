import fs from "fs";

const configPath = "./articlesConfig.json";
const configContent = fs.readFileSync(configPath, {
  encoding: "utf-8",
  flag: "r",
});

const config = JSON.parse(configContent);

function getListOfArticles(): string[] {
  return fs.readdirSync(config.sourcePath);
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
    console.log(articleContent);
  });
}

readArticles();
