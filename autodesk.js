// write a React component to add a character to a starting every second.

class TimeDisplay extends React.Component {
  constructor(props) { 
     
     super(props) 
     this.state = {randomChar: 'abc'}
     
  }
  
  changeChar() {
    let currentChar = this.state.randomChar
    let newChar = currentChar + '1'
    this.setState({randomChar: newChar})
  }
  
  componentDidMount() {
  //  let changeCharFunc = this.changeChar()
    setInterval( () => this.changeChar(), 1000)
  }
 
  render() {

    return (
      <div>
        {this.state.randomChar}
      </div>
    )
  }
}

ReactDOM.render( <TimeDisplay />, document.getElementById('app'))