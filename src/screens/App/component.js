import React, { useEffect, useState } from 'react';
import ReactSidebar from 'react-sidebar';

import { prop } from 'ramda';
import { load } from '../../helpers/spreadsheet';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Podium from '../../components/Podium';
import ScorePerWeek from '../../components/ScorePerWeek';
import Sidebar from '../../components/Sidebar';
import Styled from './styles';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const filteredData = data.filter(({ name }) =>
    selectedPlayers.includes(name),
  );

  useEffect(() => {
    const onLoad = async () => {
      try {
        await load((response) => {
          setData(response);
          setSelectedPlayers(response.map(prop('name')));
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
    <ReactSidebar
      docked
      sidebar={
        <Sidebar
          data={data}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      }
    >
      <Styled>
        <Podium data={data} />
        <ScorePerWeek data={filteredData} />
      </Styled>
    </ReactSidebar>
  );
};

export default App;
