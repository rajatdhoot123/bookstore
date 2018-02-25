CREATE TABLE book_info (
    id                 INT(11)      NOT NULL AUTO_INCREMENT,
    title              VARCHAR(255)     null,
    author             VARCHAR(255)     null,
    country            VARCHAR(255)     null,
    language            VARCHAR(255)     null,
    year               INT(4),
    primary key(id)
);