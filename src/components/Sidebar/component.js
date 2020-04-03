import PropTypes from 'prop-types';
import { sum, values } from 'ramda';
import React, { useCallback } from 'react';

import Styled from './styles';

const Sidebar = ({ data, selectedPlayers, setSelectedPlayers }) => {
  const getIsSelected = (name) => selectedPlayers.includes(name);
  const toggle = useCallback(
    (name) => {
      const isSelected = getIsSelected(name);
      if (isSelected) {
        setSelectedPlayers(
          selectedPlayers.filter((selectedPlayer) => selectedPlayer !== name),
        );
      } else {
        setSelectedPlayers([...selectedPlayers, name]);
      }
    },
    [getIsSelected, selectedPlayers, setSelectedPlayers],
  );

  return (
    <Styled>
      <p className="title">List of players</p>
      {data.map(({ name, scores }) => {
        const totalScore = sum(values(scores));
        return (
          <div key={name} className="labelContainer">
            <input
              checked={getIsSelected(name)}
              id={name}
              onChange={() => toggle(name)}
              type="checkbox"
            />
            <label
              className="label"
              htmlFor={name}
            >{`${name} (${totalScore} pts)`}</label>
          </div>
        );
      })}
    </Styled>
  );
};

Sidebar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      scores: PropTypes.shape({}).isRequired,
    }),
  ).isRequired,
  selectedPlayers: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedPlayers: PropTypes.func.isRequired,
};

export default Sidebar;
