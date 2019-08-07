# Bara
[Live](https://bara.davidfeng.us/#/)

Bara is a Yelp-inspired single-page web app where users can CRUD businesses and reviews. It is built with React.js, Redux, Ruby on Rails, and a PostgreSQL database.

![homepage](/docs/homepage.png)

## Update 4/2/2018: Refactored homepage
I have completely refactored the frontend React code for the homepage ([Take a look!](/frontend/components/home/) [Here](https://codeburst.io/clean-code-in-react-fe11372f331c) is a Medium story about the process). Compared to the original version, now the code is easier to read, has no ESLint errors, and we have some snapshot tests (`npm test`). However, in the foreseeable future, it's unlikely that I will have time to keep improving this project. :disappointed: Bara is my first full stack project; I worked really hard, and I am happy with what I have now. During this process I have learned a lot, I am a much better programmer now compared to when I started. However, probably it's time for me to move on to explore other great things beyond web app development. :smirk: Look out for my other exciting projects in the future!

## Features
* Each React component loads data from the backend based on URL, not from the Redux store, therefore the user can directly visit a specific page by its URL (the business search page with certain filters or the business show page of a particular business), and users can share pages by their URLs.
* Businesses can be searched by its name, address, city, state, zipcode, price range, tags, and their combinations.
* When logged in, a user can create/update/delete businesses and reviews. For demonstration purposes, there are no constraints for operations on businesses, i.e. any user can add businesses and edit/delete any existing businesses. (In reality, you probably do not want to allow that!) On the other hand, a user can only review a business once, and only the author is allowed to edit/delete a review.
* The business form fetches the latitude and longitude based on address using the Google Maps Geocoding API.

## Development on localhost

* Make sure you have Ruby, Node.js, and PostgreSQL installed on your machine.
* Install dependencies.
    + `gem install bundler`
    + `bundle install`
    + `npm install`
* Setup the database.
    + We use gem Figaro to get AWS credentials from `config/application.yml`. The file is ignored by git, so that the credentials are not uploaded to GitHub. We use AWS S3 to store user avatars.
    + `bundle exec rake db:setup`

Sample `application.yml`:

```yml
s3_region: "region"
s3_access_key_id: "ABCDEFG"
s3_secret_access_key: "12345678"

development:
  s3_bucket: "dev"

production:
  s3_bucket: "prod"
```

* Turn on the Rails server in a terminal window: `rails s`.
* Turn on webpack watching in a second terminal window: `npm start`.
* Visit `http://localhost:3000/#/` in browser.
* Now you can modify your frontend files, save them, wait for webpack to update the bundle file, then refresh you browser to see the changes.

## Implementation
* [Overview and Details](/docs/implementation.md)
* [Frontend: React Component Hierarchy and Routes](/docs/component-hierarchy.md)
* [Frontend: Redux Sample State](/docs/sample-state.md)
* [Backend: Rails API Endpoints](/docs/api-endpoints.md)
* [Database: Schema](/docs/schema.md)

## Credits
* Design: [Yelp](https://www.yelp.com/nyc)
* Web Developer: [Ge "David" Feng](https://davidfeng.us/)
* Icons: [Font Awesome](http://fontawesome.io/)
* Bara logo designer: [Meng Zhang](https://www.linkedin.com/in/meng-zhang-692b7644/)
