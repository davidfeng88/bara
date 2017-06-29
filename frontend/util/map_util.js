export const fetchLatlng = business => {
  let parameters = `address=${business.address},${business.city}, ${business.state}`;
  return(
    $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?${parameters}&key=AIzaSyB42USxCYSP5SVIAjZz3hGSmWglUma3zok`,
    })
  );
};
