let randomNumber = Math.floor(Math.random() * 101);

class Game extends React.Component {

  constructor (props) {
    super(props) 

    this.state = {
      // random: "",
      numberofguesses: 0,
      value: "",
      message: ""
    }
  }
  
  // randomNumber = () => {
  //   this.randomNum = Math.round(Math.random() * 10);
  //   // this.setState({random: randomNum })
  // }


  // render() {
  //   return (
  //     <div>
  //       <button onClick= {this.handleClick}>Click</button>
  //       <p>The number is:{this.state.random}</p>
  //     </div>
  //   )
  // }


  handleClick = () => {
    if (this.state.value >= 1 && this.state.value <= 100) {
      this.setState({numberofguesses: this.state.numberofguesses + 1 })
    }
    if (this.state.value == randomNumber) {
      this.state.message = alert(`Correct, Your core is ${this.state.numberofguesses + 1} `)
    }
    if (this.state.value < randomNumber) {
      this.state.message = "Your guessing number is small"
    }
    if (this.state.value > randomNumber) {
      this.state.message = "Your guessing number is big"
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  newGame = () => {
    this.setState({
      numberofguesses: 0,
      value: "",
      message: ""
    })
    randomNumber =  Math.floor(Math.random() * 101);
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h3>Guessing random number</h3>
          <p>I have already randomed a number from 1 to 100, dare you to guess it in 10 times</p>
        </div>
        <div className="main">
          <button className="btn-primary" onClick ={this.newGame}>New Game</button>
          <hr />
          <p>Number of guesses: {this.state.numberofguesses}</p>
          <p>Enter Number: </p>
          <input type="text"  value={this.state.value} onChange={this.handleChange}/>
          <button onClick={this.handleClick} className="btn-success">Guess</button>
          <p className="text-danger">{this.state.message}</p>
        </div>
      </div>
    );
  }
}



ReactDOM.render(<Game />, document.getElementById("app"))