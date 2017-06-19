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
| "/new-business" | "NewBusinessContainer" |
| "/search-results" | "SearchResultContainer" |
| "/business/:business_id" | "BusinessContainer" |
| "/business/:business_id/new-review" | "NewReviewContainer" |
