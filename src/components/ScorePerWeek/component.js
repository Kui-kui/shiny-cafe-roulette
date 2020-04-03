import PropTypes from 'prop-types';
import { path, keys, prop } from 'ramda';
import randomColor from 'randomcolor';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import Styled from './styles';

const ScorePerWeek = ({ data }) => {
  const weeks = keys(path([0, 'scores'])(data));
  const names = data.map(prop('name'));
  const formattedData = weeks.map((week) => {
    const playerScores = data.reduce(
      (acc, player) => ({
        ...acc,
        [player.name]: parseFloat(player.scores[week].replace(',', '.')) || 0,
      }),
      {},
    );
    return {
      week,
      ...playerScores,
    };
  });
  return (
    <Styled>
      <LineChart data={formattedData} height={600} width={800}>
        <XAxis dataKey="week" padding={{ left: 30, right: 30 }} />
        <YAxis domain={[-1, 4]} minTickGap={0.5} type="number" />
        <CartesianGrid strokeDasharray="0.1 0.1" />
        <Tooltip />
        {names.map((name) => (
          <Line
            key={name}
            activeDot={{ r: 8 }}
            dataKey={name}
            stroke={randomColor()}
            type="monotone"
          />
        ))}
        <Legend />
      </LineChart>
    </Styled>
  );
};

ScorePerWeek.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      scores: PropTypes.shape({}).isRequired,
    }),
  ).isRequired,
};

export default ScorePerWeek;
