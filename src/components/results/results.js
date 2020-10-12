import React from 'react';
import './results.scss'
import JSONPretty from 'react-json-pretty';

const Results = (props) => {
  if (props.data.length !== 0) {
    return (
      <div className={`loading-${props.loading} output`} >
    
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
      } space="6"></JSONPretty>
      </div>
    );
  } else {
    return (
      <div className='empty'>Waiting for input</div>
    );
  }

}

export default Results;