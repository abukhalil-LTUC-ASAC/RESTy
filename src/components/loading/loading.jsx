import React from 'react';
import {ReactComponent as ReactLogo} from './loading.svg';
import './loading.scss';

const Loading = (props) => {
  return (
    <div className={`overlay ${props.show ? 'show' : 'hide'}`}>
      <ReactLogo />
    </div>
  );
}
export default Loading;