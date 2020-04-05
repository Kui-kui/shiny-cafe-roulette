import PropTypes from 'prop-types';
import React from 'react';

import { descend, prop, sort, sum, uniq, values } from 'ramda';
import Styled from './styles';

const byTotalcore = descend(prop('total'));

const getByScore = ({ data, score }) =>
  data.filter(({ total }) => total === score);

const Podium = ({ data }) => {
  const maxScoresPerPlayer = data.map(({ name, scores }) => ({
    name,
    total: sum(values(scores)),
  }));
  const sortedMaxScoresPerPlayer = sort(byTotalcore)(maxScoresPerPlayer);

  const [goldScore, silverScore, bronzeScore] = uniq(
    sortedMaxScoresPerPlayer.map(prop('total')),
  ).slice(0, 3);
  const goldPlayers = getByScore({
    data: sortedMaxScoresPerPlayer,
    score: goldScore,
  });
  const silverPlayers = getByScore({
    data: sortedMaxScoresPerPlayer,
    score: silverScore,
  });
  const bronzePlayers = getByScore({
    data: sortedMaxScoresPerPlayer,
    score: bronzeScore,
  });

  return (
    <Styled>
      <div className="container goldContainer">
        <div className="rankContainer">
          <p className="rank">#1</p>
        </div>
        <div className="players">
          <p className="names">{goldPlayers.map(prop('name')).join(', ')}</p>
        </div>
      </div>
      <div className="container silverContainer">
        <div className="rankContainer">
          <p className="rank">#2</p>
        </div>
        <div className="players">
          <p className="names">{silverPlayers.map(prop('name')).join(', ')}</p>
        </div>
      </div>
      <div className="container bronzeContainer">
        <div className="rankContainer">
          <p className="rank">#3</p>
        </div>
        <div className="players">
          <p className="names">{bronzePlayers.map(prop('name')).join(', ')}</p>
        </div>
      </div>
    </Styled>
  );
};

Podium.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      scores: PropTypes.shape({}).isRequired,
    }),
  ).isRequired,
};

export default Podium;
