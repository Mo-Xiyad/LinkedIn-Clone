export const fetchData = async (query, method) => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o"
  );
  let url = "https://striveschool-api.herokuapp.com/api/profile/";
  try {
    console.log("api");
    if (query !== null || query !== undefined) {
      let response = await fetch(url + query, {
        method: method,
        headers: myHeaders,
      });

      if (response.ok) {
        let data = await response.json();
        console.log("response ok part");
        return data;
      } else {
        console.log('error with the fetch, with "METHOD" ');
      }
    } else {
      let response = await fetch(url, {
        method: "GET",
        headers: myHeaders,
      });
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        console.log('error with the fetch, method "GET" ');
      }
    }
  } catch (err) {
    console.log(err);
  }
};
