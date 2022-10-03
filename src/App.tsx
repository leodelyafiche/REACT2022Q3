import React from "react";
import SearchPanel from "./components/search-panel/search-panel";

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
      <div>
        <SearchPanel />
        count: {this.state.count}
      </div>
    );
  }
}

export default App;
