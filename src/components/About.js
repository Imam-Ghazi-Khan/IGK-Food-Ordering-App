import React, { Component } from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  componentWillUnmount() {
    console.log("Parent component did unmount");
  }

  componentDidUpdate() {
    console.log("Parent component did update");
  }

  render() {
    return (
      <div className="flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-blue-400">About IGK's FOODs</h1>
          <UserClass name={"Imam Ghazi Khan"} />
          <p className="text-gray-700">
            Welcome to IGK's FOODs, your go-to destination for delicious and
            convenient food ordering. Our passion is to provide you with a seamless
            and enjoyable dining experience, right at your fingertips.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
