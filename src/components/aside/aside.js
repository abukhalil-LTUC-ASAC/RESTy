import React, { Component, useState } from 'react';
import './aside.scss'

function Aside(props) {
  const [results, setResults] = useState(JSON.parse(localStorage.getItem('API History')) || {});

  React.useEffect(() => {
    window.addEventListener('storage', () => {
      // When local storage changes, update the results list
      setResults(JSON.parse(localStorage.getItem('API History')) || {});
      console.log(results);
    });
  });

    console.log(results);

    let items = () => results.map((item, i)=> <li key={i} >{item.name}</li>);
    return (
      <aside>
        <div className="title">
          Aside
        </div>
        <hr/>
        <ul className="list">
          {items}
        </ul>
      </aside>
    )
}

export default Aside;
