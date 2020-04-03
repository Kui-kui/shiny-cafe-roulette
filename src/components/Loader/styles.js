import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;

  .water {
    background-color: skyblue;
    border-radius: 50%;
    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.2),
      0 4px 10px 0 rgba(0, 0, 0, 0.2);
    height: 200px;
    overflow: hidden;
    position: relative;
    width: 200px;
  }

  .water:before,
  .water:after {
    background-color: #fff;
    content: '';
    height: 200px;
    position: absolute;
    top: -75px;
    width: 200px;
  }

  .water:before {
    animation: wave 5s linear infinite;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 45%;
  }

  .water:after {
    animation: wave 5s linear infinite;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 35%;
  }

  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
