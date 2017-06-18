```js
{
  currentUser: {
    id: 1,
    username: "capybara"
  },

  errors: ["body can't be blank", "title can't be blank"],

  businesses: {
    1: {
      name: "Good Pizza",
      author_id: 1,
      address 1: "555 W. 25th St.",
      city: "Chicago",
      state: "IL",
      zip: 60637,
      phone: "111-111-1111",
      price: 1,
      business_tags: [1]
    },

    2: {
      name: "Great Pizza",
      author_id: 1,
      address 1: "666 W. 25th St.",
      city: "Chicago",
      state: "IL",
      zip: 60637,
      phone: "222-222-2222",
      price: 2,
      business_tags: [1, 4]
    }
  },

  business_tags: {
    1: "Pizza",
    2: "Chinese",
    3: "Tacos",
    4: "Salad"
  },

  reviews: {
    1: {
      rating: 4,
      body: "This place has good pizza",
      author_id: 1,
      business_id: 1
      tags: [1, 2]
    },
    2: {
      rating: 5,
      body: "This place has great pizza",
      author_id: 1,
      business_id: 2
      tags: [1]
    }
  },

  review_tags: {
    1: "Useful",
    2: "Funny",
    3: "Cool"
  },

  businessTagFilters: [1, 3] // Used to track selected Tags for filtering of businesses
}

```
