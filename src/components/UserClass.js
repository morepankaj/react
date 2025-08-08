import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.props.name + " component constructor");

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  render() {
    const { location } = this.props;
    console.log(this.props.name + " component render");

    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment count
        </button>
        <h1>Name: {this.props.name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact: @pankaj.more</h3>
      </div>
    );
  }
}

export default UserClass;
