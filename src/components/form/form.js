import React, { Component } from 'react';
import './form.scss';
import { CRUD } from './crud-functions'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if'
import md5 from 'md5';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '', 
      method: 'GET', 
      params: '', 
      id: '',
    };

    this.onMethodChoice = this.onMethodChoice.bind(this);
    this.onURLChange = this.onURLChange.bind(this);
    this.onParamChange = this.onParamChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (!(Object.keys(props.form).length === 0 && props.form.constructor === Object)) {
      console.log('Filling form with: ', props.form)
      this.setState({
        url: props.form.url,
        method: props.form.method,
        params: props.form.params,
      });
    }
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
    this.saveData();
    await this.props.updateHistory();

    this.props.toggleLoading();
    
    console.log('doing crud');
    let response = await CRUD(this.state.url, this.state.method, this.state.params, this.state.id);
    this.props.handler(response);

    // toggle loader back to false 
    setTimeout(() => {
      this.props.toggleLoading();
    }, 1000);
  }

  saveData() {
    let history = JSON.parse(localStorage.getItem('API History'));
    let output = {
      url: this.state.url,
      method: this.state.method,
      params: this.state.params,
      id: this.state.id,
    }
    console.log('saving output: ', output);
    let key = md5(JSON.stringify(output))

    history[key] = output;
    localStorage.setItem('API History', JSON.stringify(history));
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div onChange={this.onMethodChoice}>
            <input type="radio" value="GET" checked={this.state.method === "GET"} name="method" /> GET
            <input type="radio" value="POST" checked={this.state.method === "POST"} name="method" /> POST
            <input type="radio" value="UPDATE" checked={this.state.method === "UPDATE"} name="method" /> UPDATE
            <input type="radio" value="DELETE" checked={this.state.method === "DELETE"} name="method" /> DELETE
          </div>
          <label>
            URL:
            <input type="text" value={this.state.url} onChange={this.onURLChange}/>
          </label>
          <input type="submit" value="Submit" />
          <br/>
          {this.state.method}
          <br/>
          <If condition={() => this.state.method && (/POST|UPDATE/.test(this.state.method))}>
            <Then>
              <div className='body'>
                <textarea value={this.state.params} onChange={this.onParamChange}/>
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