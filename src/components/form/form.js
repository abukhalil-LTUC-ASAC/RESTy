import React, { Component } from 'react';
import './form.scss';
import './form.scss';
import { CRUD } from './crud-functions'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if'
import md5 from 'md5';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {url: '', method: '', params: '', id: ''};

    this.onMethodChoice = this.onMethodChoice.bind(this);
    this.onURLChange = this.onURLChange.bind(this);
    this.onParamChange = this.onParamChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  onMethodChoice(event) {
    this.setState({method: event.target.value});
  }

  onURLChange(event) {
    this.setState({url: event.target.value});
  }

  onParamChange(event) {
    this.setState({params: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    // loader will show true
    this.props.toggleLoading();
    
    let response = await CRUD(this.state.url, this.state.method, this.state.params, this.state.id);
    this.props.handler(response);

    this.saveData(this.state.url, this.state.method, this.state.params, this.state.id);
    // toggle loader back to false 
    this.props.toggleLoading();
  }

  saveData(url, method, body, id) {
    let history = JSON.parse(localStorage.getItem('API History')) || {};
    let output = {
      url: url,
      method: method,
      body: body,
      id: id
    }
    let key = md5(JSON.stringify(output))
    let unit = {[key]: output};

    this.props.toggleLoading();
    history[key] = unit;
    localStorage.setItem('API History', JSON.stringify(history));
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
            <input type="text" value={this.state.value} onChange={this.onURLChange}/>
          </label>
          <input type="submit" value="Submit" />
          <br/>
          {this.state.method}
          <br/>
          <If condition={() => this.state.method && (/POST|UPDATE/.test(this.state.method))}>
            <Then>
              <div className='body'>
                <textarea value={this.state.value} onChange={this.onParamChange}/>
              </div>
            </Then>
          <Else>
            <When condition></When>
          </Else>
          </If>
        </form>
      </>
    );
  }
}

export default Form;