import React from "react";

//Main Components
import CardBody from "./CardBody";
import characters from "./friends.json"

//Sub Components
import NavBar from "./SubComponents/NavBar";

// By extending the React.Component class, Counter inherits functionality from it
class MainPage extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    //count: 0,
    characters
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = id => {
    
    //Select the character from the Array based on clicked charId
    const selChar = this.state.characters.filter(character => character.id === id);

    if (selChar[0].count === 0) { //If the selected character is still count 0 (Correct)
      console.log("Correct");
      //Increase Sel Char count by 1
      selChar[0].count++
      //Update state with new characters array info
      this.setState({ characters });
    } else {
      console.log("Wrong");
      characters.forEach(element => {
        element.count = 0;
      });
      this.setState({characters});
    }
    
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col s12 m12">
              <h1>Click Counter!</h1>
            </div>
          </div>
          <div className="row">
          {this.state.characters.map(character => (
            <CardBody
              count={character.count}
              handleIncrement={this.handleIncrement}

              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
