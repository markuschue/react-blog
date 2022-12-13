import { useState, useEffect } from 'react';

/** Custom react component for fetching and rendering JSON data from the server */
function Data(props) {
  const [data, setData] = useState({});
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch(props.fetchRoute).then(res => res.json()).then(fetched => {
      setData(fetched);
      setKeys(Object.keys(fetched));
      setValues(Object.values(fetched));
    });
  }, props.dependencyList);

  return (
    <div>
      <h1>{'{'}</h1>
      {keys.map((key, index) => {
        return (
          <div key={index}>
            <span>{key}: {values[index] + (index < keys.length - 1 ? ',' : '')}</span>
          </div>
        );
      })}
      <h1>{'}'}</h1>
    </div>
  );
}

Data.defaultProps = {
  fetchRoute: 'http://localhost:9000/',
  dependencyList: []
}

export default Data;