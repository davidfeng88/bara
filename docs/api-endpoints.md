# Backend: Rails API Endpoints

## HTML API

### Root

* `GET /` - loads React web app

## JSON API

### Users

* `GET /api/users/:id` - get a user's information
* `POST /api/users` - create a user (sign up)

### Session

* `POST /api/session` - create a session (log in)
* `DELETE /api/session` - delete a session (log out)

### Businesses
* `GET /api/businesses/feature` - get featured businesses (3 random businesses)
* `GET /api/businesses` - get searched businesses, including their latest review
* `GET /api/businesses/:id` - get a business's information, including its reviewers
* `POST /api/businesses` - create a business
* `PUT /api/businesses/:id` - edit a business
* `PATCH /api/businesses/:id` - edit a business
* `DELETE /api/businesses/:id` - delete a business

### Reviews

* `GET /api/reviews/:id` - get a review's information
* `POST /api/reviews` - create a review
* `PUT /api/reviews/:id` - edit a review
* `PATCH /api/reviews/:id` - edit a review
* `DELETE /api/reviews/:id` - delete a review
