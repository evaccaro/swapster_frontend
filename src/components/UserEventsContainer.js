import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class UserEventsContainer extends Component {
  things = props =>
    this.props.user.user_events.map(thing => {
      return <p>{thing.title}</p>;
    });
  render() {
    return (
      <div>
        <h3>{this.props.user.name}'s Events</h3>
        <ul>{this.things()}</ul>
      </div>
    );
  }
}

// const mapStateToProps = () => {
//   return {
//     user_events: users_reducer.user_events
//   };
// };

export default withRouter(connect(null)(UserEventsContainer));
