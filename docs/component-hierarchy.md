# Component Hierarchy

**HeaderRouter**
* SessionHeader
* BusinessHeaderContainer
  * BusinessHeader
    * SearchBar
    * BusinessHeaderLinks
    * Dropdown

**BusinessFormContainer**
* BusinessForm
  * FormMap
* ErrorList

**ReviewFormContainer**
* ReviewForm
  * ReviewFormCore
  * ErrorList

**SessionFormContainer**
* SessionForm
  * ErrorList

**BusinessShowContainer**
* BusinessShow
  * BusinessShowCore
    * ReviewIndex
      * ReviewIndexItemContainer
        * ReviewIndexItem
    * ShowMap
* ErrorList

**SearchContainer**
* Search
  * BusinessIndex
    * BusinessIndexItemContainer
      * BusinessIndexItem
  * IndexMapContainer
    * IndexMap

**Home**
* HomeBarContainer
  * HomeBar
    * Dropdown
  * SearchBar
  * HomeLinks

# Routes

| Path                   | Component               | Note |
| ---------------------- | ----------------------- | ---- |
| `/businesses/new`      | `BusinessFormContainer` | createBusiess form, ProtectedRoute |
| `/businesses/:id/edit` | `BusinessFormContainer` | editBusiess form, ProtectedRoute |
| `/businesses/:business_id/reviews/new` | `ReviewFormContainer` | createReview form, ProtectedRoute |
| `/reviews/:id/edit`    | `ReviewFormContainer`   | editReview form, ProtectedRoute |
| `/login`               | `SessionFormContainer`  | login form, AuthRoute |
| `/signup`              | `SessionFormContainer`  | signup form, AuthRoute |
| `/businesses/:id`      | `BusinessShowContainer` |      |
| `/businesses`          | `SearchContainer`       |      |
| `/`                    | `Home`                  |      |
| anything else          | `FourZeroFour`          |      |

## Header Routes
| Path          | Component                 |
| ------------- | ------------------------- |
| `/`           | null                      |
| `/businesses` | `BusinessHeaderContainer` |
| `/reviews`    | `BusinessHeaderContainer` |
| anything else | `SessionHeader`           |
