import React, {Component, Fragment} from "react";

/*
function App(props) {
    return <h1>Hello {props.name}! Welcome to {props.city}.</h1>;
}
*/

//Typescript
interface AppProps {
  name?: "James";
  city?: "Elks Town";
  hasLoaded?: Boolean;
}

class App extends Component<AppProps>{
    constructor(Component){
      super(Component);
      this.state = {
        loaded: false,
        hasLoaded:false,
      };
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
      console.log("Inside Component Did Mount!");
      this.setState({
        ready: true
      });
    }
    handleClick(e) {
      this.setState({
          loaded: true,
      });
    }
    
    render() {
      if(this.state.loaded){
        console.log("success");
        return(
        <Fragment>{this.props.name}: {this.props.onChange}</Fragment>
        );
      }
      else if(this.props.hasLoaded === false){
        return(
          <Fragment>
            <h2>Loading...</h2>
            <button onClick={this.handleClick}>Greet Anyway</button>
          </Fragment>
        );
      }  
      else{
        return (  
          <Fragment>
            <h1>Hello {this.props.name}! Welcome to {this.props.city}.</h1>
            <button onClick={this.handleClick}>Greet</button>
          </Fragment>
        );
      }
    }
}


export default App;