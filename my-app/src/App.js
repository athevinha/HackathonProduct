import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      values: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let arr = JSON.parse(localStorage.getItem("List"));
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str += arr[i] + "<br>";
    }
    document.getElementsByClassName("comment-box")[0].innerHTML = str;
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //  alert("A name was submitted: " + this.state.value);
    let value = this.state.value;
    let values = this.state.values;
    this.setState({
      values: JSON.parse(localStorage.getItem("List")),
    });

    values.push(value);

    this.setState({ values: values });

    localStorage.setItem("List", JSON.stringify(this.state.values));
    let arr = JSON.parse(localStorage.getItem("List"));
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str += arr[i] + "<br>";
    }
    document.getElementsByClassName("comment-box")[0].innerHTML = str;
    // }````
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="comment-box"></div>
      </div>
    );
  }
}

export default App;
