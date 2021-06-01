import React, { Component } from "react";
import Table from "./Table.jsx";
import Form from "./Form";

class App extends Component {
  // Save personal list in a state memory part (read/write)
  state = {
    characters: [
      {
        Id: "13",
        FirstName: "Charlie",
        LastName: "Jonsson",
        Phone: "045487654",
      },
      {
        Id: "15",
        FirstName: "Mac",
        LastName: "Svenson",
        Phone: "023487664",
      },
      {
        Id: "17",
        FirstName: "Dee",
        LastName: "Bengtson",
        Phone: "042387684",
      },
      {
        Id: "23",
        FirstName: "Dennis",
        LastName: "Knutson",
        Phone: "0455687676",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        // Creating a new list instead of mutating the old
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] }); // Spread syntax '...'
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h2>Testar React</h2>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add new</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
