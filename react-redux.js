// My solution: https://jsfiddle.net/69z2wepo/311152/

// Redux-specific coding challenge

// Problem: 
// For this exercise we would like you to use a basic JavaScript template with defined mock data to implement a simple interface. 
 
// The mock data in the fiddle below contains a Json array of multiple choice questions, possible answers, and the number of times each answer was selected by other users. Please modify the Javascript to parse the mock Json that is already defined, pick one of the questions at random, and display the question prompt with the potential answers as a form with radio buttons.
 
// When this form is submitted, you should render additional text at the top of the page that says "You selected: the text for the answer they selected" and below that, the other potential answers each with the number of times each was selected by other users next to it (which is found the "responses" attribute in the Json).
// 1.              Fork this fiddle: https://jsfiddle.net/ebayfred/n431oxwz/
// 2.              Change the JavaScript, HTML, and CSS panels to solve the problem (as described in the summary, preferably with React templates)
// 3.              As part of the solution, implement the questionReducer. It’s a standard Redux reducer that takes a state and action and returns a new state.
// a.              The state is the questions part of the last challenge.
// b.              The action is dispatched when someone picks an answer to a question. It contains both the question ID and answer ID. The matching question/answer’s responses should be incremented.
// 1.               Click "Run" and view the bottom right pane to verify solution
// 2.               Click the "Save/Update" button to save your work
// 3.               Send the resulting url to the Fiddle (from the browser)



//Html
<div id="app"></div>

//Babel + JSX + Pure JS
//Included resources: react.development, react-dom.development, redux.min


const questions = [{
    "id": 1,
    "text": "Favorite color",
    "answers": [{
      "id": 1,
      "text": "Red",
      "responses": 10
    }, {
      "id": 2,
      "text": "Green",
      "responses": 20
    }, {
      "id": 3,
      "text": "Blue",
      "responses": 5
    }]
  }, {
    "id": 2,
    "text": "Favorite animal",
    "answers": [{
      "id": 1,
      "text": "Dog",
      "responses": 150
    }, {
      "id": 2,
      "text": "Cat",
      "responses": 100
    }, {
      "id": 3,
      "text": "Bird",
      "responses": 17
    }]
  }]; 
  
  
  const action1 = {
    type: "VOTE1",
    questionId: 1,
    answerId: 1
  };
  
  const action2 = {
    type: "VOTE2",
    questionId: 1,
    answerId: 2
  };
  
  const action3 = {
    type: "VOTE3",
    questionId: 1,
    answerId: 3
  }
  
  //Get the default score for each color
  
  var actionArr = [action1, action2, action3];
  var defaultScore = [];
  
  //map through action and quetion so that the quetion is not hard coded in
  actionArr.map( act => {
   questions.map( q => {
     if (act.questionId == q.id) {
       q.answers.map( obj => {
         defaultScore.push(obj.responses)
       })
     }
   })
  }); 
  
  
  function questionReducer(questions, action) {
  
    questions = questions || defaultScore;
    
    let redState = questions[0];
    let blueState = questions[1];
    let greenState = questions[2];
    
    let type = action.type;
    
    switch(type) {
      case "VOTE1":
        return [redState +1, blueState, greenState];
      case "VOTE2":
        return  [redState, blueState +1, greenState];
      case "VOTE3":
        return  [redState, blueState, greenState +1];
    }
  }
  
  const store = Redux.createStore(questionReducer); 
  
  
  class App extends React.Component {
  
          constructor(props) {
          super(props);
        
        this.state = {
            red: defaultScore[0],
          blue: defaultScore[1],
          green: defaultScore[2]
        };
      }
   
     setColor(event) {
      if (event.target.value === 'VOTE1') {
        store.dispatch(action1)
      } else if (event.target.value === 'VOTE2') {
      store.dispatch(action2)
      } else if (event.target.value === 'VOTE3') {
      store.dispatch(action3)
      }
      
      
      //update the state here
      store.subscribe( () => {
          this.setState({
            red: store.getState()[0],
          blue: store.getState()[1],
          green: store.getState()[2]
        });
      });
    } 
    
    
    render() {
      return ( 
        <form onChange={this.setColor.bind(this)}>
          <p>Pick your favorite color:</p>
          <input type="radio" id="btn" value="VOTE1" name="color"/> Red (current vote: {this.state.red} )
          <br></br> 
          <input type="radio" id="btn" value="VOTE2" name="color" /> Blue (current vote: {this.state.blue} )
          <br></br>
          <input type="radio" id="btn" value="VOTE3" name="color" /> Green   (current vote: {this.state.green})
    
        </form>
       )
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById('app'));