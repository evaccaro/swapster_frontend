import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createEvent } from "../actions/createEvent";

class NewEventForm extends React.Component {
  constructor() {
    super();

    this.state = {
      event_title: "",
      event_date: "",
      event_occasion: "",
      event_price_limit: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleNewEvent = event => {
    event.preventDefault();
    this.props.createEvent(
      this.state.event_title,
      this.state.event_date,
      this.state.event_occasion,
      this.state.event_price_limit
    );
    this.props.history.push("/logged");
  };

  render() {
    return (
      <div>
        <div>
          <h4>Create a New Event!</h4>
        </div>
        <br />
        <br />
        <form>
          <input name="event_title" type="text" placeholder="Event Name" />
          <br />
          <br />
          <input name="event_date" type="date" />
          <br />
          <br />
          <input name="event_occasion" type="text" placeholder="Occasion" />
          <br />
          <br />
          <input name="event_price_limit" type="integer" placeholder="20" />
          <br />
          <br />
          <button>Create Your Event</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(NewEventForm));
