import PropTypes from 'prop-types';
import { path, keys } from 'ramda';
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

  const formattedData = weeks.map((week) => {
    const playerScores = data.reduce(
      (acc, player) => ({
        ...acc,
        [player.name]: player.scores[week],
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
        {data.map(({ color, name }) => (
          <Line
            key={name}
            activeDot={{ r: 8 }}
            dataKey={name}
            stroke={color}
            type="natural"
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
