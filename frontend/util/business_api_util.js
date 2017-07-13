export const fetchAllBusinesses = data => {
  return(
    $.ajax({
      method: 'GET',
      url: '/api/businesses',
      data
    })
  );
};

export const createBusiness = business => (
  $.ajax({
    method: 'POST',
    url: '/api/businesses',
    data: { business }
  })
);


export const fetchBusiness = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${id}`
  })
);

export const editBusiness = business => (
  $.ajax({
    method: 'PATCH',
    url: `/api/businesses/${business.id}`,
    data: { business }
  })
);

export const deleteBusiness = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/businesses/${id}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  })
);

export const editReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  })
);
