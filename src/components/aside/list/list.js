import React from 'react';

import './list.scss';

export default props => {
    // console.log(props)
    return <ul className="list">{props.children}</ul>
}
