import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { location } = this.props;

    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>
        <h1>Name: {this.props.name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact: @pankaj.more</h3>
      </div>
    );
  }
}

export default UserClass;
