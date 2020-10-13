import React, {Component} from "react";

/*
function App(props) {
    return <h1>Hello {props.name}! Welcome to {props.city}.</h1>;
}
*/

//Typescript Removed ? from types such as name?: which states the specified type as optional.
interface AppProps {
  name: string;
  city: string;
  loaded: Boolean;
  hasLoaded: Boolean;
  onChange: string;
}

interface AppLoaded{
  loaded: Boolean;
  hasLoaded: Boolean;
}

const Welcome = (props: { name: React.ReactNode; city: React.ReactNode; }) =>{
  return <h1>Hello {props.name}! Welcome to {props.city}.</h1>;
}

class App extends Component<AppProps, AppLoaded>{
    constructor(props: AppProps){
      super(props);
      this.state = {
        loaded: false,
        hasLoaded:false
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
      console.log("Inside Component Did Mount!");
      this.setState({
        hasLoaded:false,
      });
    }
    //This context binding is a shortcut for: 
    //this.handleClick = this.handleClick.bind(this); which is normally within the constructor.
    //This is not safe in vanilla js.
    handleClick = () => {
      this.setState({
          loaded: true,
      });
    }
    render() {
      const {loaded} = this.state; // Destructuring state properties
      const {hasLoaded, name, city, onChange} = this.props

      if(loaded){
        console.log("success");
        return(
        <>{name}: {onChange}</>
        );
      }
      else if(hasLoaded === false){
        return(
          <>
            <h2>Loading...</h2>
            <button onClick={this.handleClick}>Greet Anyway</button>
          </>
        );
      }  
      else{
        return (  
          <>
            <Welcome name={"Artichoke"} city={"Marvin Land"}></Welcome>
            <h1>Hello {name}! Welcome to {city}.</h1>
            <button onClick={this.handleClick}>Greet</button>
          </>
        );
      }
    }
}


export default App;