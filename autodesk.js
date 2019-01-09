// write a React component that displays and updates date and time

class DisplayTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeNow: new Date().toLocaleString()
    }
  }
  
  updateTime() {
    let date = new Date().toLocaleString()
    this.setState({timeNow: date})
  }
  
  componentDidMount() {
    setInterval( () => this.updateTime(), 1000)
  }

  render() {
    return( <div>
      {this.state.timeNow}
    </div>)
  }
}

ReactDOM.render(<DisplayTime />, document.getElementById('app'))