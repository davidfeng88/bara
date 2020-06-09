export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${id}`,
  })
);

