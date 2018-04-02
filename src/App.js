import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { users_reducer } from "./reducers/users_reducer";
import { getCurrentUser, login } from "./actions/getAuthUser";
import LoginForm from "./components/LoginForm";
import Test from "./components/Test";
import UserEventsContainer from "./components/UserEventsContainer";
import NewEventForm from "./components/NewEventForm";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.getCurrentUser();
    }
  }

  render() {
    console.log("APP props", this.props);
    let routes = (
      <div>
        <Route
          exact
          path="/"
          render={routerProps => <LoginForm {...routerProps} />}
        />
        <Route
          exact
          path="/logged"
          render={routerProps => {
            console.log("here ya go", this.props);
            return <UserEventsContainer {...this.props} />;
          }}
        />
        <Route
          exact
          path="/new_event"
          render={routerProps => {
            console.log("here ya go", this.props);
            return <NewEventForm {...this.props} />;
          }}
        />
        {/* <Route
          exact
          path="/create_event"
          render={routerProps => (
            <EventForm
              {...routerProps}
              user={this.props.user}
              current_event={this.props.new_event}
            />
          )}
        />
        <Route
          exact
          path="/events"
          render={routerProps => (
            <Events
              {...routerProps}
              events={this.props.user_events.events}
              getEvents={this.props.getEvents}
            />
          )}
        /> */}
      </div>
    );

    return (
      <div className="App">
        {/* {this.props.rootReducer.user.id ? <Navbar /> : null} */}
        {routes}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("in map state to props", state);
  return {
    // user: state.user.current_user,
    // // new_event: state.user_events.new_event.event,
    // // user_events: state.user_events,
    // // events: state.events
    ...state
  };
}

export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    login
  })(App)
);
