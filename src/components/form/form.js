import React, { Component } from 'react';
import './form.scss'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {url: '', method: '', result: ''};

    this.onMethodChoice = this.onMethodChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  onMethodChoice(event) {
    this.setState({method: event.target.value});
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({result: `${this.state.method}: ${this.state.url}`});
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div onChange={this.onMethodChoice}>
            <input type="radio" value="GET" name="method" /> GET
            <input type="radio" value="POST" name="method" /> POST
            <input type="radio" value="UPDATE" name="method" /> UPDATE
            <input type="radio" value="DELETE" name="method" /> DELETE
          </div>
          <label>
            URL:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
          <br/>
          <div>
            {this.state.result}
          </div>
        </form>
      </>
    );
  }
}

export default Form;