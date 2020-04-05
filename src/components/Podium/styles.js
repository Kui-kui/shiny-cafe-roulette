import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 16px;

  .container {
    align-items: center;
    border-radius: 8px;
    display: flex;
    flex: 1;
    margin: 0 16px 16px;
    padding: 8px 16px;
  }

  .players {
    display: flex;
    flex: 1;
  }

  .rank {
    font-size: 18px;
    font-weight: 600;
  }

  .rankContainer {
    align-items: center;
    background-color: white;
    border-radius: 20px;
    display: flex;
    height: 40px;
    justify-content: center;
    margin-right: 8px;
    width: 40px;
  }

  .goldContainer {
    background-color: #d4af37;
  }

  .silverContainer {
    background-color: #aaa9ad;
  }

  .bronzeContainer {
    background-color: #cd7f32;
  }
`;
