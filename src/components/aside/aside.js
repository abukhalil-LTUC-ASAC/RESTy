import React from 'react';
import './aside.scss';
import List from './list/list';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentWillReceiveProps(props) {
    this.updateForm();
    console.log('Changed List to: ', this.state.lists)
  }

  componentDidMount() {
    this.updateForm();
    console.log('Added List')
  }

  updateForm() {
    this.setState({ 
      lists: Object.keys(this.props.history).map((key) => (
      <li key={key} onClick={() => this.props.fetch(this.props.history[key])}>
        <div className="method">
          {this.props.history[key].method}
        </div>
        <div className="url">
          {this.props.history[key].url}
        </div>
        <div className="body">
          {this.props.history[key].params}
        </div>
      </li>))
    });
  }

  render() {
    return (
      <aside>
        <div className="title">
          Aside
        </div>
        <hr/>
        <List>
          {this.state.lists}
        </List>
      </aside>
    )
  }
}

export default Aside;
