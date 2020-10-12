import React from 'react';
import './design/reset.css';
import './design/design.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        results: []
    };
  }

  toggleLoading = () => {
    this.setState({loading: !this.state.loading})
  }

  updateHandler = (data) => {
    console.log(data);
    this.setState({results: data.results});
  }

  render () {
    return (
    <>
      <Header/>
      <main>
        <Form toggleLoading={this.toggleLoading} handler={this.updateHandler}/>
        <Results loading={this.state.loading} data={this.state.results}/>
      </main>
      <Footer/>
    </>
    )
  }
}

export default App;
