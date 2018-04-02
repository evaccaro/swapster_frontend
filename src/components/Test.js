import React from "react";

class Test extends React.Component {
  render() {
    console.log("name ", this.props.user.name);
    return (
      <div>
        <h3>{this.props.user.name}</h3>
      </div>
    );
  }
}

export default Test;
