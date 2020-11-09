import styled from 'styled-components';
import { prop } from 'ramda';

export default styled.div`
  padding: 16px;
  width: 168px;

  .button {
    color: #505fe3;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    border: none;
    background: none;
  }

  .buttonContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .label {
    font-size: 15px;
    margin-left: 4px;
  }

  .labelContainer {
    align-items: center;
    display: flex;
    margin-bottom: 4px;
  }

  .names {
    margin-bottom: 16px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const Checkbox = styled.div`
  background-color: ${({ isSelected, color }) =>
    isSelected ? color : 'white'};
  border-radius: 10px;
  border: 1px solid ${prop('color')};
  height: 10px;
  margin-right: 4px;
  width: 10px;
`;
