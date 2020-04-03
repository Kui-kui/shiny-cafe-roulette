import React, { useEffect, useState } from 'react';

import { load } from '../../helpers/spreadsheet';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import ScorePerWeek from '../../components/ScorePerWeek';
import Styled from './styles';

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
    <Styled>
      <ScorePerWeek data={data} />
    </Styled>
  );
};

export default App;
