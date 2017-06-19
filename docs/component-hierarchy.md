## Component Hierarchy

**AuthFormContainer**
- AuthForm

**HomeContainer**
- Business Search
  * Business Search Bar
- Business Category index
  * Business Category index item

**NewBusinessContainer**
- Business Form
  - Review Form (optional)

**BusinessContainer**
- Map Component
- Gallery Component
  * Picture Component
- Review Form Component
- Review Index Component
  * Review Index Item Component
- Business Detail Component

**SearchResultsContainer**
- Business Search Result Component
  * Business Search Result Item Component
- Map Component

**NewReviewContainer**
- Review Creation Component
  * Business Information Component
  * Review Form
- Review Index Component
  * Review Index Item Component


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/log-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/new-business" | "NewBusinessContainer" |
| "/search-results" | "SearchResultsContainer" |
| "/business/:businessId" | "BusinessContainer" |
| "/business/:businessId/new-review" | "NewReviewContainer" |
