import React, {Component} from "react";
/*
function App(props) {
    return <h1>Hello {props.name}! Welcome to {props.city}.</h1>;
}
*/
//Typescript
interface AppProps {
    name?: "James";
    city?: "Elks Town";
  }

class App extends Component<AppProps>{
    render() {
        return (
          <div>
            Hello {this.props.name}! Welcome to {this.props.city}.
          </div>
        );
      }
}


export default App;