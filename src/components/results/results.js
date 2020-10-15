import React from 'react';
import './results.scss'
import JSONPretty from 'react-json-pretty';
import Loading from '../loading/loading.jsx';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if'

const Results = (props) => {
  return (
    <>
      <Loading show={props.loading}/>
      <If condition={props.data.length !== 0}>
        <Then>
          <JSONPretty id="json-pretty" data={props.data} replacer={
            function (key, value) {
              if (key === 'cccc') {
                value += '~~~abc';
              }
              if (key === 'gggg') {
                value *=10;
              }
              return value;
            }
          } space="6">
          </JSONPretty>
        </Then>
      <Else>
        <When condition={props.data.length === 0}>
          <div className='empty'>Waiting for input</div>
        </When>
      </Else>
      </If>
    </> 
  );
}

export default Results;