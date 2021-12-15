import React from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";

class App extends React.Component {
  foo = () => "Bars";
  render() {
    const number = "omer";
    return (
      <div className="App">
        <h1>Hello</h1>
        <Navbar title={number} />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}
export default App;
