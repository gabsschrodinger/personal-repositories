# Personal Repository System

The Personal Repository System (PRS or just system) is a tool to generate, version, and maintain a website of a personal repository, with simple articles written in markdown.

Each article/page is composed of one folder with at least two files:
1. A markdown file, containing the content of the article/page
2. One JSON file, with the article/page metadata

Other files are resources included in the markdown file, such as image files.

## The JSON file

The JSON metadata file contains the following properties:
- "title" (mandatory field): A string representing the article's title, case sensitive.
- "tags" (mandatory field): An array of strings with the article's topics/categories.
- "versions" (field generated and maintained by the system): An array of objects, containing the history of versions of the article. To see details about the version object, check the "The version object" section within this specification file.
