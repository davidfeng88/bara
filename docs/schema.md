# Database: Schema

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
name        | string    | not null, indexed
address     | string    | not null, indexed
city        | string    | not null, indexed
state       | string    | not null, indexed
zipcode     | integer   | not null, indexed
price       | integer   | not null, indexed, in the range of [1-4]
phone       | string    |
url         | string    |
lat         | float     |
lng         | float     |

## tags

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, indexed, unique

## taggings

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key (references businesses), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed, unique [business_id]

Two indexes in this table

* ["business_id", "tag_id"]
  - to enforce that a business can only has a tag once
  - facilitate searching from business_id
* ["tag_id"]
  - facilitate searching from tag_id 

## reviews

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null, [1-5]
body        | text      |
user_id     | integer   | not null, foreign key (references users), indexed
business_id | integer   | not null, foreign key (references businesses), indexed, unique [user_id]

Two indexes in this table

* ["business_id", "user_id"]
  - to enforce that a user can only review a business once
  - facilitate searching from business_id
* ["user_id"]
  - facilitate searching from user_id