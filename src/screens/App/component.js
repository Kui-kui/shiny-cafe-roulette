import React, { useEffect, useState } from 'react';

import { load } from '../../helpers/spreadsheet';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      await load(setData);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, []);
  return <div className="App" />;
};

export default App;
