# Frontend: React Component Hierarchy and Routes

## HomeContainer
Route: `/`
* Home
  * HomeHero
    * HomeHeaderContainer
      * HomeHeader
        * HomeHeaderWithUserContainer
          * HomeHeaderWithUser
        * HomeHeaderWithoutUser
    * SearchBar
    * HomeLinks
  * FeaturedBusinesses
  * Categories

## SearchContainer
Route: `/businesses`
* Search
  * BusinessIndex
    * BusinessIndexItemContainer
      * BusinessIndexItem
  * IndexMapContainer
    * IndexMap

## BusinessShowContainer
Route: `/businesses/:id`
* BusinessShow
  * BusinessInfoAndPictures
    * ShowMap
  * ReviewIndexAndExtraInfo
    * ReviewIndex
      * ReviewIndexItemContainer
        * ReviewIndexItem

## BusinessFormContainer
ProtectedRoute: only accessible when logged in.

| Form Type            | Route                  |
| -------------------- | ---------------------- |
| create business form | `/businesses/new`      |
| edit busiess form    | `/businesses/:id/edit` |

* BusinessForm
  * FormMap

## ReviewFormContainer
ProtectedRoute: only accessible when logged in.

| Form Type          | Route                                  |
| ------------------ | -------------------------------------- |
| create review form | `/businesses/:business_id/reviews/new` |
| edit review form   | `/reviews/:id/edit`                    |

* ReviewForm
  * ReviewFormCore

## SessionFormContainer
AuthRoute: only accessible when no one is logged in.

| Form Type   | Route     |
| ----------- | --------- |
| signup form | `/signup` |
| login form  | `/login`  |
* SessionForm

## FourZeroFour
Route: anything else

## Header Routes
| Path          | Component                              |
| ------------- | -------------------------------------- |
| `/`           | `null` (HomeHeader is in Home Component) |
| `/businesses` | `BusinessHeaderContainer`              |
| `/reviews`    | `BusinessHeaderContainer`              |
| anything else | `SessionHeader`                        |
