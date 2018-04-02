export function createEvent(title, date, occasion, price_limit, history) {
  return dispatch => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, date, occasion, price_limit })
    };
    fetch("http://localhost:3000/events", options)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "NEW_EVENT", event: json });
      });
  };
}

