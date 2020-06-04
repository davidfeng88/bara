export const fetchReview = id => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`,
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
  })
);
