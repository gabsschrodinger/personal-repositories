# Windowing Functions in SQL

After working mainly with pySpark for several months, I have became quite rusty on windowing functions in plain SQL. This short article serves as an introduction and a short consultation material for windowing functions in SQL.

## What are windowing functions and when should you use them?

Windowing functions are a feature of the SQL language that allows developers to perform analytical and complex operations over a window, or partition (Masood-Al-Farooq, 2014).

To use windowing functions in SQL, developers must define a window, composed of partition and ordering columns (Masood-Al-Farooq, 2014). To be applied over the window, SQL provides a series of windowing functions, such as `ROW_NUMBER` or `LAG` (Masood-Al-Farooq, 2014).

## Example

As an example, let's say we have a database of a code respository app and we want to find the median of repositories by user's countries. For this, let's considering the following table definitions:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    country VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE repos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    user INT,
    FOREIGN KEY (user) REFERENCES users(id)
);

CREATE TABLE user_repos (
    user_id INT,
    repo_id INT,
    PRIMARY KEY (user_id, repo_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (repo_id) REFERENCES repos(id)
);
```

## References

Masood-Al-Farooq, B. A. (2014). *Sql server 2014 development essentials*. Packt Publishing, Limited.
