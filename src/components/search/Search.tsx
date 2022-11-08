import React, { Component } from "react";

export class Search extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    localStorage.setItem("inputValue", e.target.value);
    console.log(e.target.value);
  }

  showInputValue: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log(
      "now in the localStorage: ",
      localStorage.getItem("inputValue")
    );
  };
  lastInput = localStorage.getItem("inputValue");

  render() {
    return (
      <div className="w-96">
        <form action="/" method="get" className="py-4 flex">
          <input
            type="text"
            id="header-search"
            placeholder={`${this.lastInput || "Find something"}`}
            name="s"
            className="text-lg"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="inline-block hover:bg-[#ddd] px-4 bg-gray-300"
            onClick={this.showInputValue}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
