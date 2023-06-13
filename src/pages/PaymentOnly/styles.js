import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  > header {
    position: sticky;
    z-index: 2;
    top: 0;
  }
  display: grid;
  grid-template-areas:
    'header'
    'back'
    'main'
    'footer';

  grid-template-rows: 11.4rem 7rem auto 7.7rem;

  > .wrapper,
  > main {
    width: min(90%, 1122px);
    margin: 0 auto;
  }
  > .wrapper {
    grid-area: back;
    display: flex;
    align-items: center;
    > a {
      font-size: clamp(1.4rem, 0.7333rem + 2.0833vw, 2.4rem);
    }
  }

  > main {
    grid-area: main;
  }

  @media (min-width: 769px) {
    grid-template-rows: 9.3rem 9rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  padding-bottom: 3.2rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2.4rem, 1.8286rem + 1.7857vw, 3.2rem);
    line-height: 4.5rem;

    margin-bottom: 3.2rem;
  }

  > #payment {
    > div {
      margin: 0 auto;
    }
  }
`;
