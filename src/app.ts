import fs from "fs";

function getListOfArticles(): string[] {
  const articlesFolder = "./articles";

  return fs.readdirSync(articlesFolder);
}

function readArticles(): void {
  const articles = getListOfArticles();

  articles.forEach((article) => {
    const articleContent = fs.readFileSync(`./articles/${article}/article.md`, {
      encoding: "utf-8",
      flag: "r",
    });
    console.log(articleContent);
  });
}

readArticles();
