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
    let arr = localStorage.getItem("List")
      ? JSON.parse(localStorage.getItem("List"))
      : [];

    let str = "";

    for (let i = 0; i < arr.length; i++) {
      str +=
        '<div class="container"><img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar" style="width:100%;"><p>' +
        arr[i] +
        '</p><span class="time-right">11:00</span></div>;';
    }
    document.getElementsByClassName("comment-box")[0].innerHTML = str;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //  alert("A name was submitted: " + this.state.value);
    let value = this.state.value;
    this.setState({ value: "" });
    let arr = localStorage.getItem("List")
      ? JSON.parse(localStorage.getItem("List"))
      : [];
    arr.push(value);
    localStorage.setItem("List", JSON.stringify(arr));
    // localStorage.setItem()
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str +=
        '<div class="container"><img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar" style="width:100%;"><p>' +
        arr[i] +
        '</p><span class="time-right">11:00</span></div>;';
    }
    document.getElementsByClassName("comment-box")[0].innerHTML = str;

    // }````
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Nhận xét của khách hàng về khách sạn và các dịch vụ khác</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Chat message..."
            />
          </label>
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>

        <div className="comment-box"></div>
      </div>
    );
  }
}

export default App;
