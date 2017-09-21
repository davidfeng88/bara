# Bara
[Live](https://bara.davidfeng.us/#/)

Bara is a Yelp-inspired single-page web app where users can CRUD businesses and reviews. It is built with React.js, Redux, Ruby on Rails, and a PostgreSQL database.

![homepage](docs/homepage.png)

## Features
* Each React component loads data from backend (based on URL), not from Redux store, so that the user can directly visit a specific page (a particular business or a business search result), and users can share pages by their URLs.
* Businesses can be searched by its name, address, city, state, zipcode, price range, tags, and their combinations.
* Business show page displays a specific business and its reviews.
* When logged in, a user can create/update/delete businesses and reviews. For demonstration purposes, there are no constraints for operations on businesses, i.e. any user can add businesses and edit/delete any existing businesses. (In reality you probably do not want to allow that!) On the other hand, a user can only review a business once, and only the author is allowed to edit/delete a review.

## Implementation Details
* [Homepage](#homepage)
* [Business search](#business-search)
  * [Search bar](#search-bar)
  * [Sample searches and price filters](#sample-searches-and-price-filters)
  * [Search component](#search-component)
  * [Business tags](#busienss-tags)
  * [Index map](#index-map)
* [Business show](#business-show)
* [Forms](#forms)
  * [Business form](#busienss-form)
  * [Review form](#review-form)
  * [Session form](#session-form)
* [404](#404)
* [Routes](#routes)
  * [Frontend React routes](#frontend-react-routes)
  * [Backend Rails api routes](#backend-rails-api-routes)

### Homepage
The homepage contains a `Featured Businesses` section, which displays three random businesses. Clicking on the bara logo updates them. To implements this feature, I added collection route called `feature` and set up corresponding controller and view. Clicking the bara logo sends a GET request to `/api/businesses/feature`, which will send back the information of three random businesses.
```ruby
# config/routes.rb
resources :businesses, only: %i[index show create update destroy] do
  get 'feature', on: :collection
end

# app/controllers/api/businesses_controller.rb
def feature
  @businesses = Business.all.sample(3)
  render 'api/businesses/feature'
end

# app/views/api/businesses/feature.json.jbuilder
json.array! @businesses do |biz|
  json.partial! 'api/businesses/business', business: biz
end
```
The homepage also contains a search bar component, which is the same search bar component in the header of other pages (business search, business show, etc.) See details in the next section.

### Business search

#### Search bar
![search_bar](docs/search_bar.png)

The search bar has two fields, `name` and `location`, which are filled based on query string (`?name=bur&location=19th`) in the URL (e.g. `https://bara.davidfeng.us/#/businesses/?name=bur&location=19th`) in the `constructor` and `componentWillReceiveProps`. Therefore in a search page, the search bar input fields are filled with those queries.
Upon submission, the search bar pushes `/businesses/?name=${nameEncoded}&location=${locationEncoded}` to the history. Notice that the two fields are encoded using `encodeURIComponent`.

#### Sample searches and price filters
![sample_searches](docs/sample_searches.png)

Sample searches provides some links for the user to try the search functionality.
The price filters fetches all the current filters (`name`, `location`, `tag`, current `prices[]`) from the URL, and adds/removes a specific `prices[]` value when the user clicks on the dollar sign buttons. The updated search result will show up after the click. No need to click the submit button. Also, it is possible to select multiple `prices[]` values (e.g. "$" and "$$$$", which translates to `prices[]=1&prices[]=4` in the query string).

#### Search component
![search](docs/search.png)

The search component first set the `loaded` field in its state to be `false`, which displays the loading spinner. Then it get all the filters (`name`, `location`, `tag`, `prices[]`) from the URL, send them to the backend, and the business index route handles the search and sends back the information of matched businesses (see below). Then the search component displays those businesses.
```ruby
def index
  businesses = Business.all.includes(:reviews, :tags)

  # search by the tag
  if params[:tag] && Tag.find_by(label: params[:tag].split.map(&:capitalize).join(' '))
    businesses = Tag.find_by(label: params[:tag].split.map(&:capitalize).join(' ')).businesses
  end

  # search by the name
  if params[:name] && params[:name] != ''
    businesses =
      businesses.where('lower(name) LIKE ?', "%#{params[:name].downcase}%")
  end

  # search by the location
  if params[:location] && params[:location] != ''
    businesses =
      businesses.where('lower(address) LIKE ?', "%#{params[:location].downcase}%")
                .or(businesses.where('lower(city) LIKE ?', "%#{params[:location].downcase}%"))
                .or(businesses.where('lower(state) LIKE ?', "%#{params[:location].downcase}%"))
                .or(businesses.where('zipcode = ?', params[:location].to_i))
  end

  # search by the prices
  if params[:prices] && params[:prices] != ''
    prices_numbers = params[:prices].map(&:to_i)
    businesses = businesses.where(price: prices_numbers)
  end

  # include the latest review, which is shown on the search page
  @businesses = businesses.includes(latest_reviews: [:author]).order(updated_at: :desc)
  render 'api/businesses/index'
end
```

#### Business tags
Businesses and tags (e.g. `Chinese`, `Japanese`, `Nightlife`) have a many-to-many relationship. Thus the database has a `taggings` joint table to handle it. In the search result entries, the tag links of each business are shown next to its price range (dollar sign). Click on the tag link would fire a new search to fetch all the businesses with that tag.

#### Index map
The index map is wrapped in a div, which has a `sticky` CSS position property, so that when scrolling down the page, the map is always on the page.
When a business index entry is hovered, the business is *highlighted*, and the corresponding icon on the map should change to a different style. Instead of passing the highlighted business' id and the `highlightBusiness` action amongst all the relavant components, Redux is used to store the highlight. See the graph below for details.
```
SearchContainer
│ (map highlightBusiness action to props)
│
Search
│ (change the highlight to -1 before unmounting)
│
└───BusinessIndex
│   │
│   └───BusinessIndexItemContainer
│       │ (map highlightBusiness action to props)
│       │
│       BusinessIndexItem
│         (change the highlight to the business.id onMouseEnter,
│          change it to -1 onMouseLeave)
│
└───IndexMapContainer
    │ (map highlight in Redux store to props)
    │
    IndexMap
      (change the style of highlighted business icon)
```

### Business show
![busienss_show](docs/business_show.png)

The path for the business show page is `/businesses/:id`. In `componentDidMount` and `componentWillReceiveProps`, the component fetches business and its reviews from the backend, and displays them. Right now each business has one image, and the business show page displays that imgae with two other default images. If something goes wrong, it displays the errors instead.

### Forms
Bara has three form components: business form for create/edit businesses, review form for create/edit reviews, and session form for sign up/log in.
The business form and review form are rendered by `ProtectedRoute`, which means the user needes to log in to view these components. The session form is rendered by `AuthRoute`, which can only be viewed if no user is logged in. At the backend, the corresponding `before_action` filters are added to those controller actions.
Since each form has two functions, and can be accessed in two paths, the general working machanism is:
1. Determine the form type based on the path (e.g. create or edit the business) in `componentDidMount` and `componentWillReceiveProps`. `componentWillReceiveProps` is needed because the user may go from one form to the other (e.g. signup form to login form or vice versa, or even editBusiness form for different businesses). Although such cases are relatively rare for business form and review form, they are taken care of.
2. If needed, fetch relavant information from backend and display them on the page or populate the input fields.
3. Upon form submission, package the data from input fields and call the corresponding util method to send the information to the backend.

#### Business form
![busienss_form](docs/business_form.png)

The business form component can be accessed by two paths:
* `/businesses/new` for createBusiness form
* `/businesses/:id/edit` for editBusiness form

First, in `componentDidMount` and `componentWillReceiveProps`, the component determines the form type based on the path.

Then for the createBusiness form, it populates the input fields with default values. For the editBusiness form, it fetches the business information from the backend and populates the input fields accordingly.

Upon form submission, it sends the information to the backend and redirects to the business show page. Right now newly created businesses have a default image. If anything goes wrong in this process (e.g. cannot find the business, address is invalid, etc.), errors will be shown.

**About latitude and longitude**: Human generally do not know or communicate the location with latitude and longitude, but they are useful when try to place a marker for the business on the map.
When the user clicks the submit button, the form send the full address (combination of `address`, `city`, `state` fields) to the Google Maps Geocoding API, which returns the corresponding latitude and longitude if the address is valid. Then the coordinates, with other information from the input fields are sent to the backend and stored in the database.

#### Review form
![review_form](docs/review_form.png)

The review form component can be accessed by two paths:
* `/businesses/:business_id/reviews/new` for createReview form
* `/businesses/:business_id/reviews/new` for editReview form

The general pattern is the same as the business form.

First, in `componentDidMount` and `componentWillReceiveProps`, the component determines the form type based on the path.

Fetch information is a little trickier than the business form. For the createReview form, it extracts the `business_id` from the path, fetch that business' information from the backend, and displays the information and latest 5 reviews on the page. For the editReview form, it extracts the id of the review to be edited from the path, fetches that review's information from the backend, including the review's `business_id`. Then (using JavaScript Promises) it fetches the business' information from the backend. Finally it shows the relavant information on the page and populates the form input fields.

Upon form submission, it sends the information to the backend and redirects to the business show page.

**About constraints**: I arbitrarily implemented the following two (reasonable) constraints for the reviews:

1. A user can only review a business once.
**Fill details**

2. Only the author is allowed to edit/delete a review.
**Fill details**

#### Session form
**Fill details**
Session form is rendered
Two React routes lead
talk about user avatar
redirect

### 1. User creation and authentication
When a user is created, on the back-end, passwords are hashed by bcrypt and the resulting hash is stored in the database.
If there is an error in the user creation (e.g. username has been taken), the backend will send the error messages to the front-end, which will be rendered in an ErrorList React component. The errors can be dismissed.
If the user is created successfully, it will be assigned to a default avatar (handled by Amazon Web Services and Paperclip gem).
After logging in, the avatar appears on the top right, which reveals a drop-down box containing more user information upon clicking.

If no user is logged in, attempts to create/edit businesses/reviews will be redirected to the login page. The browser goes back to the previous page after logging in.

### 404
**Fill details**

### Routes
#### Frontend React routes
```javascript
<Switch>
  // Business form: create a business
  <ProtectedRoute path="/businesses/new"
    component={BusinessFormContainer} />
  // Business form: edit a business
  <ProtectedRoute path="/businesses/:id/edit"
    component={BusinessFormContainer} />
  // Review form: create a review
  <ProtectedRoute path="/businesses/:business_id/reviews/new"
    component={ReviewFormContainer} />
  // Review form: create a review
  <ProtectedRoute path="/reviews/:id/edit"
    component={ReviewFormContainer} />
  // Session form: create a session (log in)
  <AuthRoute path="/login" component={SessionFormContainer} />
  // Session form: create a user (sign up)
  <AuthRoute path="/signup" component={SessionFormContainer} />
  // Business show page
  <Route path='/businesses/:id' component={BusinessShowContainer} />
  // Business search page
  <Route path='/businesses' component={SearchContainer} />
  // Homepage
  <Route exact path='/' component={Home} />
  // 404 page
  <Route component={FourZeroFour} />
</Switch>
```
#### Backend Rails api routes
|  Verb  |       URI pattern       |             Usage           |
| ------ | ----------------------- | --------------------------- |
| GET    | /                       | static page root            |
| POST   | /api/users              | create a user (sign up)     |
| GET    | /api/users/:id          | get a user's information    |
| POST   | /api/session            | create a session (log in)   |
| DELETE | /api/session            | delete a session (log out)  |
| GET    | /api/businesses/feature | get featured businesses     |
| GET    | /api/businesses         | get searched businesses     |
| POST   | /api/businesses         | create a business           |
| GET    | /api/businesses/:id     | get a business' information |
| PATCH  | /api/businesses/:id     | edit a business             |
| PUT    | /api/businesses/:id     | edit a business             |
| DELETE | /api/businesses/:id     | delete a business           |
| POST   | /api/reviews/           | create a review             |
| GET    | /api/reviews/:id        | get a review's information  |
| PATCH  | /api/reviews/:id        | edit a review               |
| PUT    | /api/reviews/:id        | edit a review               |
| DELETE | /api/reviews/:id        | delete a review             |

## Possible Extension Directions

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

### Business form
Users can add more pictures for a specific business.

## Credits
* Design: [Yelp](https://www.yelp.com/nyc)
* Web Developer: [Ge "David" Feng](https://davidfeng.us/)
* Icons: [Font Awesome](http://fontawesome.io/)
* Bara logo designer: [Meng Zhang](https://www.linkedin.com/in/meng-zhang-692b7644/)
