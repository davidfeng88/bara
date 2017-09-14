# Bara
[Live](https://bara.davidfeng.us/#/)

Bara is a Yelp-inspired single-page web app where users can CRUD businesses and reviews. It is built with React.js, Redux, Ruby on Rails, and a PostgreSQL database.

![homepage](docs/homepage.png)

## Main Features
* Each page loads data from backend based on URL, not from Redux store, so that a user can send a URL to another user to share a particular business or a business search result.
* Businesses can be searched by its name, address, city, state, zipcode, price range, tags, and their combinations. Business show page displays a specific business and its reviews.
* When logged in, a user can create/update/delete businesses and reviews. For demonstration purposes, there are no constraints for operations on businesses, i.e. any user can add businesses and edit/delete any existing businesses. (In reality you probably do not want to allow that!) On the other hand, a user can only review a business once, and only the author is allowed to edit/delete a review.

## Implementation Details

### 1. Homepage
The homepage contains a 'Featured Businesses' section, which displays three random businesses. Clicking on the bara logo updates them. To implements this feature, I created a


### search
search bar
Tags
URL
Redux Store

### Business show
### Session form

### Business form

### Review form

### Misc
404?


## Possible Future Directions

### Better business search
More filter options (e.g. filter by average rating) and more ways to sort search results (e.g. by created/updated time, average rating, number of reviews, price, etc.)

### Reviews tags and sorting
On the business show page, reviews can be tagged (e.g. funny, cool, useful etc.) and sorted in different ways (e.g. by number of useful tags).

### User profile
The user profile page allows the user to change avatar, shows all the activities of the user (e.g. posting reviews), and all the content created by the user.

### Favorite businesses
A user should be able to store a business to a favorite list. The user might be able to create other lists.

### Friends
Users can be friend with other users, and a news feed can be generated from the activities of friends.


--- old draft below ---
### 1. User creation and authentication
When a user is created, on the back-end, passwords are hashed by bcrypt and the resulting hash is stored in the database.
If there is an error in the user creation (e.g. username has been taken), the backend will send the error messages to the front-end, which will be rendered in an ErrorList React component. The errors can be dismissed.
If the user is created successfully, it will be assigned to a default avatar (handled by Amazon Web Services and Paperclip gem).
After logging in, the avatar appears on the top right, which reveals a drop-down box containing more user information upon clicking.

If no user is logged in, attempts to create/edit businesses/reviews will be redirected to the login page. The browser goes back to the previous page after logging in.

### 2. Business index page, map, price filter
The business index page contains basic information of each business. The average rating and the latest review will be updated after a new review is posted.
On the business index page, the user can filter the businesses by the price range. After the filter changes, the index entries and the markers on the map will update accordingly. Filters can be reset.

### 3. Business show page
Business show page contains details, a map, an edit link, and reviews for a business. Reviews are ordered reversely by their creation time.
![busienss show page](docs/business-show.png)

### 4. Business form
When a business is created, Bara sends the full address (combines the `address`, `city`, `state` columns in the `businesses` table) to the Google Maps Geocoding API, which returns the latitude and longitude. The `lat` and `lng` columns are then updated. The coordinates are then used to set up the center of the map and to place a marker on it.
