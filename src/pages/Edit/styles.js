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
    padding-bottom: 3.2rem;
  }

  @media (min-width: 769px) {
    grid-template-rows: 9.3rem 9rem auto 7.7rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
  }

  label {
    color: ${({ theme }) => theme.LIGHT[400]};
  }

  #threeColumns {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    div:first-child {
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
    > .input-wrapper {
      > div {
        position: relative;
        background-color: ${({ theme }) => theme.DARK[800]};

        padding: 1.2rem 0;
        border-radius: 0.8rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 4.8rem;

        > span {
          color: ${({ theme }) => theme.LIGHT[100]};
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 500;

          display: flex;
          align-items: center;
          gap: 0.8rem;

          cursor: pointer;

          > svg {
            width: 2.4rem;
            height: 2.4rem;
          }
        }

        > div {
          position: absolute;
          inset: 0;
          opacity: 0;
          > label {
            display: none;
          }
        }
      }
    }

    > div:nth-child(2) {
      > input {
        height: 4.8rem;
        background-color: ${({ theme }) => theme.DARK[800]};
      }
    }

    > div > select {
      background-color: ${({ theme }) => theme.DARK[800]};
      color: ${({ theme }) => theme.LIGHT[400]};

      border-radius: 5px;
      padding-left: 1.6rem;
      height: 4.8rem;

      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: center right 1.6rem;

      cursor: pointer;

      &:focus {
        outline: 2px solid ${({ theme }) => theme.TINTS.CAKE[300]};
      }

      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border: none;
    }
  }

  #twoColumns {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > div {
        background-color: ${({ theme }) => theme.DARK[800]};

        min-height: 4.8rem;
        padding: 0.8rem;
        border-radius: 0.8rem;

        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;
      }
    }

    > div:last-child {
      gap: 1.6rem;

      > input {
        height: 4.8rem;
        background-color: ${({ theme }) => theme.DARK[800]};
        color: ${({ theme }) => theme.LIGHT[400]};
      }
    }
  }

  > #textarea {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  div:last-child {
    display: flex;
    gap: clamp(1rem, -2.2rem + 10vw, 3.2rem);
    > #buttonAdd {
      font-size: clamp(1.2rem, 0.6182rem + 1.8182vw, 1.6rem);
      padding-block: 1.2rem;
      padding-inline: 0;
      background-color: ${({ theme }) => theme.TINTS.TOMATO[400]};
    }
    > #buttonRemove {
      font-size: clamp(1.2rem, 0.6182rem + 1.8182vw, 1.6rem);

      padding-block: 1.2rem;
      padding-inline: 0;
      background-color: ${({ theme }) => theme.DARK[800]};
    }
  }

  @media (min-width: 740px) {
    #threeColumns {
      flex-direction: row;
      justify-content: space-between;
      gap: clamp(1rem, -5.2615rem + 8.4615vw, 3.2rem);
      > div {
        width: 100%;
      }

      > div:first-child {
        min-width: 184px;
        max-width: 229px;
      }
    }

    #twoColumns {
      flex-direction: row;

      > div:first-child {
        flex: 1;
      }
    }
  }

  @media (min-width: 769px) {
    > div:last-child {
      align-self: flex-end;
      > #buttonAdd {
        width: 17.2rem;
      }

      > #buttonRemove {
        width: 13.5rem;
      }
    }
  }
`;

export const Textarea = styled.textarea`
  border-radius: 0.8rem;
  height: 17.2rem;
  padding: 1.4rem;

  outline: none;
  border: none;

  background-color: ${({ theme }) => theme.DARK[800]};
  color: ${({ theme }) => theme.LIGHT[400]};

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.LIGHT[500]};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.TINTS.CAKE[300]};
  }
`;
