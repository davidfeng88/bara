# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## businesses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null, indexed
address     | string    | not null, indexed
city        | string    | not null, indexed
state       | string    | not null, indexed
zipcode     | integer   | not null, indexed
price       | integer   | not null, indexed
phone       | string    |
url         | string    |

## business_tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## business_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
business_id | integer   | not null, foreign key (references businesses), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null, [1-5]
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
business_id | integer   | not null, foreign key (references businesses), indexed

## review_tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## review_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
review_id   | integer   | not null, foreign key (references reviews), indexed, unique [tag_id, author_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## user-friendships
TBD
