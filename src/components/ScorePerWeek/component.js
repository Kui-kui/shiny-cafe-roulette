import PropTypes from 'prop-types';
import { path, keys, values, sum, max } from 'ramda';
import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import Styled from './styles';
import useWindowSize from '../../hooks/useWindowSize';

const getWeekIndex = week => week[1];

const ScorePerWeek = ({ data }) => {
  const { height: screenHeight, width: screenWidth } = useWindowSize();

  const scoreArrayLengths = data.map(({ scores }) => keys(scores).length);
  const indexWithMostScores = scoreArrayLengths.indexOf(
    Math.max(...scoreArrayLengths)
  );
  const weeks = keys(path([indexWithMostScores, 'scores'])(data));

  const formattedData = weeks.map(week => {
    const playerScores = data.reduce((acc, player) => {
      const weekIndex = parseInt(getWeekIndex(week), 10) + 1;
      const { name, scores } = player;
      const scoresUntilWeek = sum(values(scores).slice(0, weekIndex));
      return {
        ...acc,
        [name]: scoresUntilWeek,
      };
    }, {});
    return {
      week,
      ...playerScores,
    };
  });

  return (
    <Styled>
      <LineChart
        data={formattedData}
        height={screenHeight - 200}
        width={screenWidth - 200}
      >
        <XAxis dataKey="week" padding={{ left: 30, right: 30 }} />
        <YAxis type="number" />
        <CartesianGrid strokeDasharray="0.1 0.1" />
        <Tooltip />
        {data.map(({ color, name }) => (
          <Line
            key={name}
            activeDot={{ r: 8 }}
            dataKey={name}
            stroke={color}
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
    })
  ).isRequired,
};

export default ScorePerWeek;
