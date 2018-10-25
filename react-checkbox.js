//https://jsfiddle.net/69z2wepo/315466/


// Assume that you have a table with a list of many items where each row has a checkbox. You also have a checkbox above the table labeled as "Check All".

// We want the following behavior:
// - All checkboxes must be checked if "Check All" is checked.
// - All checkboxes must be unchecked if "Check All" is unchecked.
// - If I manually check each checkbox from the table, 1 by 1, when all checboxes are checked, "Check all" must be automatically checked too.
// - If every checkbox is checked (including "Check All"), If I uncheck any checkbox from the table, "Check All" must be unchecked.

// Given this html:

//    Check All
//    List item A
//    List item B
//    List item C

//html


<div id="container"></div>


//JSX

class CheckBox extends React.Component {
  
  selectAll() {
    this.refs.one.checked = !this.refs.one.checked;
    this.refs.two.checked = !this.refs.two.checked;
    this.refs.three.checked = !this.refs.three.checked;
    this.refs.all.checked = undefined;
    
    if (this.refs.one.checked == true && this.refs.two.checked  == true && this.refs.three.checked == true) {
      this.refs.all.checked = true
    }
  }
  
  
  render() {
    return (  
      <div>
        <h3>Check Box</h3>
        <input type="checkbox" ref='one' /> Item One <br />
        <input type="checkbox" ref='two' /> Item Two <br />
        <input type="checkbox" ref='three' /> Item Three <br />
        <br />
        <input type="checkbox" ref='all' onClick={this.selectAll.bind(this)} /> 
          Select All
      </div>)
  }
}

ReactDOM.render(
  <CheckBox />,
  document.getElementById('container')
);
