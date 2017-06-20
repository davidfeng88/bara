## Component Hierarchy

**AuthFormContainer**
- AuthForm

**HomeContainer**
- BusinessSearch
  * BusinessSearchBar
- BusinessCategoryIndex
  * BusinessCategoryIndexItem

**NewBusinessContainer**
- BusinessForm
  - ReviewForm (optional)

**BusinessContainer**
- Map
- Gallery
  * Picture
- ReviewForm
- ReviewIndex
  * ReviewIndexItem
- BusinessDetail

**SearchResultContainer**
- BusinessSearchResult
  * BusinessSearchResultItem
- Map

**NewReviewContainer**
- ReviewCreation
  * BusinessInformation
  * ReviewForm
- ReviewIndex
  * ReviewIndexItem


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/log-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/businesses/new" | "NewBusinessContainer" |
| "/search-results" | "SearchResultContainer" |
| "/businesses/:id" | "BusinessContainer" |
| "/businesses/:id/reviews/new" | "NewReviewContainer" |
