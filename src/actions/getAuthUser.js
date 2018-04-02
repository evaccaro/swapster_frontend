export function createUser(name, email, password, history) {
  return dispatch => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    };
    fetch("http://localhost:3000/users", options)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch({ type: "LOGIN", user: json });
        history.push("/logged");
      });
  };
}

export function login(email, password, history) {
  return dispatch => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    };
    fetch("http://localhost:3000/login", options)
      .then(res => res.json())
      .then(json => {
        if (json.jwt === undefined) {
          console.log("no jwt", json);
          dispatch({ type: "NOTUSER" });
          history.push("/");
          alert(
            "We don't seem to have that username/password. Please try again or create an account."
          );
        } else {
          console.log("getting user", json);
          localStorage.setItem("token", json.jwt);
          dispatch({ type: "LOGIN", user: json });
          history.push("/logged");
        }
      });
  };
}

export function getCurrentUser() {
  return dispatch => {
    let headers = {
      headers: { Authorization: localStorage.getItem("token") }
    };
    return fetch("http://localhost:3000/current_user", headers)
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        dispatch({ type: "LOGIN", user: json });
      });
  };
}

export function logout() {
  localStorage.removeItem("token");
  return { type: "LOGOUT" };
}
