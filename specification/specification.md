# Personal Repository System

The Personal Repository System (PRS or just system) is a tool to generate, version, and maintain a website of a personal repository, with simple articles written in markdown.

Each article/page is composed of one folder with at least two files:
1. A markdown file, containing the content of the article/page
2. One JSON file, with the article/page metadata

Other files are resources included in the markdown file, such as image files.

## The markdown file

The markdown file contains the content of the article. Its structure is not strictly defined, and the only mandatory rule is that it must follow the markdown syntax. The markdown file can also reference other resources, both online resources, using their URL, or offline resources, using the relative path of the article's folder. To see more on offline resources, see section the "Other files/resources".

## The JSON file

The JSON metadata file contains the following properties:
- "title" (mandatory field): A string representing the article's title, case sensitive.
- "tags" (mandatory field): An array of strings with the article's topics/categories.
- "versions" (field generated and maintained by the system): An array of objects, containing the history of versions of the article. To see details about the version object, check the "The version object" section.

## Other files/resources

Other files/resources are files within the article directory that serve as resources for the article, referenced in the markdown file (e.g. images). There are no strict rules for the resources, so there are no naming conventions or other predefined rules.
