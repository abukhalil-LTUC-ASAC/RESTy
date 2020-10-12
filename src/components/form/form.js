import React, { Component } from 'react';
import './form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {url: '', method: 'GET', result: ''};

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

  async handleSubmit(event) {
    event.preventDefault();

    // loader will show true 
    this.props.toggleLoading();
    console.log(this.state.url);
      if (this.state.method === 'GET') {
        let raw = await fetch(this.state.url)
        const contentType = raw.headers.get("content-type");

        if (contentType && contentType.indexOf("application/json") !== -1) {
          // process your JSON data further and send data to the parent
          let data = await raw.json();
          this.props.handler(data);
        } else {
          throw new Error('Invalid Response');
        }

      // toggle loader back to false 
      this.props.toggleLoading();
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div onChange={this.onMethodChoice}>
            <input type="radio" value="GET" checked={true} name="method" /> GET
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
        </form>
      </>
    );
  }
}

export default Form;