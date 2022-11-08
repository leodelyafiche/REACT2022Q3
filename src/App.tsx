import React from "react";
// import SearchPanel from "./components/search-panel/search-panel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppHeader } from "./components/app-header/AppHeader";
import { Home } from "./components/app-header/Home";
import { AboutUs } from "./components/app-header/AboutUs";
import { Error } from "./components/app-header/Error";
import { Search } from "./components/search/Search";

type Props = {
  // using `interface` is also ok
  // message: string;
};
type State = {
  count: number; // like this
};
class App extends React.Component<Props, State> {
  state: State = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    return (
      <div className="flex justify-center flex-col">
        <Router>
          <div className="flex justify-evenly bg-gray-200">
            <AppHeader />
            <Search />
          </div>

          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/404" element={<Error />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
