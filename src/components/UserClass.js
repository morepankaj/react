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
      <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img
          class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={this.state.userInfo.avatar_url}
          alt="avatar"
        />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">
              {this.state.userInfo.name}
            </p>
            <p class="font-medium text-gray-500">Engineer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;

/*
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} alt="avatar" />
        <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Location : {this.state.userInfo.blog}</h2>
        <h3>Contact: @pankaj.more</h3>
      </div>

*/
