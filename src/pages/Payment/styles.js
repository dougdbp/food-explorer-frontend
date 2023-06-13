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
    'main'
    'footer';

  grid-template-rows: 11.4rem auto 7.7rem;

  > main {
    width: min(90%, 1122px);
    margin: 0 auto;
  }

  > main {
    grid-area: main;
  }

  @media (min-width: 769px) {
    grid-template-rows: 9.3rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3.2rem 0;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2.4rem, 1.8286rem + 1.7857vw, 3.2rem);
    line-height: 4.5rem;

    margin-bottom: 3.2rem;
  }

  > #order {
    > ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
    }

    > p {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 2rem;
      line-height: 3.2rem;

      margin-top: 3.2rem;

      > span {
        color: ${({theme}) => theme.TINTS.MINT};
      }
    }
  }

  > a {
    display: inline-block;
    margin-top: 3.2rem;
    align-self: flex-end;
    > button {
      width: 21.6rem;
    }
  }

  > section#payment {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    > a {
      display: none;
    }

    section#payment {
      display: block;
    }
  }
`;
