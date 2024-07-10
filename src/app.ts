import fs from "fs";
import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import {
  getBaseHtmlContent,
  getConfig,
  getListOfArticles,
  overwriteCss,
  saveContent,
} from "./fsUtils";

const options = {
  throwOnError: false,
};

marked.use(markedKatex(options));

const config = getConfig();

function readArticles(): void {
  const articles = getListOfArticles(config);

  articles.forEach((article) => {
    const articleContent = fs.readFileSync(
      `${config.sourcePath}/${article}/article.md`,
      {
        encoding: "utf-8",
        flag: "r",
      }
    );

    const htmlContent = marked(articleContent, { async: false }) as string;
    const baseHtmlContent = getBaseHtmlContent();

    const finalHtmlContent = baseHtmlContent.replace(
      "<PageContent/>",
      htmlContent
    );
    saveContent(finalHtmlContent, `${config.targetPath}/${article}.html`);
  });

  overwriteCss();
}

readArticles();
