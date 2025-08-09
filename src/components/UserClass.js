import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.props.name + " component constructor");

    this.state = {
      userInfo: {
        name: "xxx",
        location: "yyy",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/pankajmore");
    const data = await response.json();
    console.log(data);
    this.setState({ userInfo: data });

    /* this.timer = setInterval(() => {
      console.log("will call each sec");
    }, 1000); */
  }

  componentWillUnmount() {
    console.log(" component unmounted");
    //clearInterval(this.timer);
  }
  componentDidUpdate() {
    console.log(" component updated");
  }

  render() {
    //const { location } = this.userInfo;
    //console.log(this.props.name + " component render");
    console.log(this.state.userInfo.name + " component render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} alt="avatar" />
        <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Location : {this.state.userInfo.blog}</h2>
        <h3>Contact: @pankaj.more</h3>
      </div>
    );
  }
}

export default UserClass;
