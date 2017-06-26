# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Businesses

- `GET /api/businesses`
  - Businesses index/search
  - Accepts pagination params (if I get there)
- `POST /api/businesses`
- `GET /api/businesses/:id`
  - All reviews for the business will also be present
  - accepts pagination params (if I get there)

### Reviews

- `POST /api/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
