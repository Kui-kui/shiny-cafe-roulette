import React, { useEffect, useState } from 'react';

import { load } from '../../helpers/spreadsheet';
import Error from '../../components/Error';
import Loader from '../../components/Loader';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = async () => {
      try {
        await load((response) => {
          setData(response);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
      }
    };
    onLoad();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="root">
      {data.map(({ name, scores }) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

export default App;
