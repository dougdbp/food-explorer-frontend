import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.DARK[700]};
  color: ${({ theme }) => theme.LIGHT[100]};

  .hide {
    display: none !important;
  }

  #search {
    background-color: ${({ theme }) => theme.DARK[900]};

    border-radius: 5px;

    display: flex;
    align-items: center;
    flex: 2;
    padding-left: 1.2rem;

    opacity: ${({ searchDisabled }) => (searchDisabled ? 0.5 : 1)};
    cursor: ${({ searchDisabled }) => (searchDisabled ? 'not-allowed' :'unset')};

    > svg {
      min-width: 1.54rem;
    }

    > div {
      width: 100%;

      > label {
        display: none;
      }

      > input:focus {
        outline: none;
      }
    }
  }

  > header {
    width: min(90%, 1122px);
    margin: 0 auto;

    display: flex;
    align-items: center;

    > h2 {
      margin-left: 1.6rem;
      font-size: 2.1rem;
    }

    > #logo {
      display: flex;
      align-items: center;
      gap: clamp(0.8rem, 0.6rem + 0.625vw, 1rem);
      margin: 0 auto;
      > h1 {
        font-weight: 700;
        color: ${({ theme }) => theme.LIGHT[200]};
      }
      > span {
        color: ${({ theme }) => theme.TINTS.CAKE[200]};
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    @media (max-width: 768px) {
      padding: 5.6rem 0 2.4rem;
      > #search {
        margin: 0 auto;
      }
      > button {
        background-color: transparent;
      }

      #receipt {
        background-color: transparent;
        position: relative;
        > svg {
          color: ${({ theme }) => theme.LIGHT[100]};
          font-size: 3rem;
        }
        > span {
          color: ${({ theme }) => theme.LIGHT[100]};
          background-color: ${({ theme }) => theme.TINTS.TOMATO[200]};
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 0;

          width: 2rem;
          height: 2rem;
          border-radius: 50%;

          position: absolute;
          top: -1rem;
          right: -1rem;

          display: grid;
          place-content: center;
        }
      }

      > #search,
      > #logout,
      > #new,
      #redBtn,
      #historic,
      #fav {
        display: none;
      }
    }

    @media (min-width: 769px) {
      gap: clamp(1.5rem, -0.7573rem + 3.527vw, 3.2rem); // mudar
      padding-block: 2.4rem;
      > #menuBurgue,
      > a:has(#receipt) {
        display: none !important;
      }
      > #logout {
        flex-shrink: 0;
      }

      > #buttons {
        display: flex;
        gap: clamp(1rem, -1.9212rem + 4.5643vw, 3.2rem); // mudar
        min-width: 14.5rem;
      }
      #new {
        flex-shrink: 0;
      }

      > #logo {
        display: grid;
        grid-template-columns: 2.6rem max-content;
        row-gap: 0;
        > h1 {
          font-size: clamp(1.6rem, -0.4571rem + 2.8571vw, 2.4rem); // mudar
        }
        > span {
          margin-top: -3px;
          grid-column-start: 2;
          justify-self: end;
        }
      }
      > a#receiptDesktop {
        flex: 1;
        max-width: 216px;
        > button#redBtn {
          padding-inline: 0;
          min-width: ${({ isAdmin }) => (isAdmin ? '12rem' : '7rem')};
        }
      }

      > svg {
        width: clamp(2.5rem, -0.3rem + 4.375vw, 3.2rem); // mudar
        height: clamp(2.5rem, -0.3rem + 4.375vw, 3.2rem); // mudar
        cursor: pointer;
      }
    }
    @media (min-width: 769px) and (max-width: 810px) {
      > #logo {
        max-width: 8rem;
        > h1 {
          display: none;
        }
      }
    }

    @media (max-width: 1028px) {
      #buttons {
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
      }
    }
  }
`;
