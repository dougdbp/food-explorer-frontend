import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;

  > h1 {
    color: ${({ theme }) => theme.LIGHT[100]};
    font-size: clamp(3.2rem, 2.2rem + 3.125vw, 4.2rem);
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  @media (min-width: 769px) {
    padding: 0 7vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    > h1 {
      margin-top: -2rem;
      flex-shrink: 0;
      font-size: clamp(2.6rem, -3.8rem + 10vw, 4.2rem);
    }
  }

  @media (max-width: 768px) {
    padding-top: 16vh;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: clamp(3.2rem, 1.6941rem + 4.7059vw, 6.4rem);
  border-radius: 1.6rem;

  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 3.2rem;

  max-width: 50rem;

  -webkit-animation: bounce-in-bottom 1.1s both;
  animation: bounce-in-bottom 1.1s both;

  > a {
    margin: 0 auto;
  }

  > h2 {
    display: none;
  }

  > div > input {
    &:valid {
      outline: 2px solid ${({ theme }) => theme.TINTS.MINT};
    }
  }

  > div:nth-child(5):hover {
    animation: jello-horizontal 0.9s both;
  }

  @media (min-width: 769px) {
    width: min(95%, 476px);

    background-color: ${({ theme }) => theme.DARK[700]};
    margin: 0;

    -webkit-animation: tilt-in-br 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: tilt-in-br 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    h2 {
      display: block;
      text-align: center;
      font-size: clamp(3rem, 2.2rem + 1.25vw, 3.2rem);
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }
  }

  // keyframes

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  @-webkit-keyframes tilt-in-br {
    0% {
      -webkit-transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px)
        skew(12deg, 15deg);
      transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px)
        skew(12deg, 15deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  @keyframes tilt-in-br {
    0% {
      -webkit-transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px)
        skew(12deg, 15deg);
      transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px)
        skew(12deg, 15deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }

  @-webkit-keyframes bounce-in-bottom {
    0% {
      -webkit-transform: translateY(500px);
      transform: translateY(500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(65px);
      transform: translateY(65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(28px);
      transform: translateY(28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-bottom {
    0% {
      -webkit-transform: translateY(500px);
      transform: translateY(500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(65px);
      transform: translateY(65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(28px);
      transform: translateY(28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;
