# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Businesses

- `GET /api/businesses`
  - Businesses index/search
  - accepts pagination params (if I get there)
- `POST /api/businesses`
- `GET /api/businesses/:id`
- `DELETE /api/businesses/:id`
- `GET /api/businesses/:id/reviews`

### Reviews

- `GET /api/businesses/:business_id/reviews`
  - index of all reviews for a business
  - accepts pagination params (if I get there)
- `POST /api/businesses/:business_id/reviews`
- `GET /api/businesses/:business_id/reviews/:id`
- `PATCH /api/businesses/:business_id/reviews/:id`
- `DELETE /api/businesses/:business_id/reviews/:id`
