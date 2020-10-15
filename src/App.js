import React from 'react';
import './design/reset.css';
import './design/design.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import Aside from './components/aside/aside';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        results: [],
        history: JSON.parse(localStorage.getItem('API History')),
        form: {},
    };
  }
  
  // async componentDidMount() {
  //   console.log('mounting history');
  //   this.setState({history: });
  //   console.log(this.state.history);
  // }

  toggleLoading = () => {
    this.setState({loading: !this.state.loading});
  }

  updateHandler = (data) => {
    console.log(data);
    this.setState({results: data});
  }

  updateHistory = async () => {
    console.log('updating history');
    const history = await JSON.parse(localStorage.getItem('API History'));
    this.setState({history});
    console.log(this.state.history);
  }

  fetchHistory = (data) => {
    console.log('filling form with history');
    console.log(data);
    this.setState({form: data});
  }

  render () {
    return (
    <>
      <Header/>
      <Aside history={this.state.history} fetch={this.fetchHistory}/>
      <main>
        <Form toggleLoading={this.toggleLoading} handler={this.updateHandler} updateHistory={this.updateHistory} form={this.state.form} />
        <Results loading={this.state.loading} data={this.state.results}/>
      </main>
      <Footer/>
    </>
    )
  }
}

export default App;
