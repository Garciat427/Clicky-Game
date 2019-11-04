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
    characters
  };
  gameItt = 0;
  gameStatus = "Press any Character to Start!";

  // handleIncrement increases this.state.count by 1
  handleIncrement = id => {
     
    //Select the character from the Array based on clicked charId
    const selChar = this.state.characters.filter(character => character.id === id);

    if (selChar[0].count === 0) { //If the selected character is still count 0 (Correct)
      //increase Game Itteration by 1
      this.gameItt++

      //Setting Game Status
      if (this.gameItt === characters.length){
        this.gameStatus = "Congrats! You Win! Press any Character to restart the game!";
        
        //resetGame
        characters.forEach(element => {
          element.count = 0; 
        });
        //Set Game Itteration back to 0
        this.gameItt = 0;

      } else {
        this.gameStatus = "Correct! only " + (characters.length - this.gameItt) + " to go!"
      }
      
      //Increase Sel Char count by 1
      selChar[0].count++
      
      
    } else {
      this.gameStatus = "Sorry wrong choice! Press any Character to try again:("
      
      //reset Game
      characters.forEach(element => {
        element.count = 0; 
      });
      //Set Game Itteration back to 0
      this.gameItt = 0;
    }

    //Randomize Array
    let currentIndex = characters.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = characters[currentIndex];
      characters[currentIndex] = characters[randomIndex];
      characters[randomIndex] = temporaryValue;
    }
      

    //set state to new Shuffled characters array
    this.setState({ characters });
    
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col s12 m12 center">
              <h4>The goal of this game is to click all the characters only once. If you click a character twice, you lose!</h4>
              <h3>{this.gameStatus}</h3>
            </div>
          </div>
          <div className="row">
          {this.state.characters.map(character => (
            <CardBody
            //count={character.count}
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
