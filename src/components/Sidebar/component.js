import PropTypes from 'prop-types';
import { sum, values, prop } from 'ramda';
import React, { useCallback, useState } from 'react';

import Styled, { Checkbox } from './styles';

const Sidebar = ({
  data,
  selectedPlayers,
  selectedSeason,
  setSelectedSeason,
  setSelectedPlayers,
}) => {
  const getIsSelected = useCallback(name => selectedPlayers.includes(name), [
    selectedPlayers,
  ]);
  const toggle = useCallback(
    name => {
      const isSelected = getIsSelected(name);
      if (isSelected) {
        setSelectedPlayers(
          selectedPlayers.filter(selectedPlayer => selectedPlayer !== name)
        );
      } else {
        setSelectedPlayers([...selectedPlayers, name]);
      }
    },
    [getIsSelected, selectedPlayers, setSelectedPlayers]
  );

  const selectAll = useCallback(() => {
    setSelectedPlayers(data.map(prop('name')));
  }, [data, setSelectedPlayers]);

  const deselectAll = useCallback(() => {
    setSelectedPlayers([]);
  }, [setSelectedPlayers]);

  const toggleSeason = useCallback(() => {
    setSelectedSeason(selectedSeason === 'S1' ? 'S2' : 'S1');
  }, [selectedSeason, setSelectedSeason]);

  return (
    <Styled>
      <p className="title">List of players</p>
      <div className="buttonContainer">
        <button className="button" onClick={selectAll} type="button">
          Select all
        </button>
        <button className="button" onClick={deselectAll} type="button">
          Deselect all
        </button>
      </div>
      <div className="names">
        {data.map(({ color, name, scores }) => {
          const totalScore = sum(values(scores));
          return (
            <div
              key={name}
              className="labelContainer"
              onClick={() => toggle(name)}
            >
              <Checkbox color={color} isSelected={getIsSelected(name)} />
              <label
                className="label"
                htmlFor={name}
              >{`${name} (${totalScore} pts)`}</label>
            </div>
          );
        })}
      </div>
      <button className="button" onClick={toggleSeason} type="button">
        {selectedSeason === 'S1' ? 'See current season' : 'See previous season'}
      </button>
    </Styled>
  );
};

Sidebar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      scores: PropTypes.shape({}).isRequired,
    })
  ).isRequired,
  selectedPlayers: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedSeason: PropTypes.string.isRequired,
  setSelectedSeason: PropTypes.func.isRequired,
  setSelectedPlayers: PropTypes.func.isRequired,
};

export default Sidebar;
