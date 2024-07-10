export type ReleaseAction = "newVersion";

export type ArticleMetadata = {
  title: string;
  authors: string[];
  tags: string[];
  releaseDate: null | string;
  releaseActions: ReleaseAction[];
};

export type Config = {
  sourcePath: string;
  targetPath: string;
};
