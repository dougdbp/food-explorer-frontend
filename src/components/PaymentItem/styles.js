import styled from 'styled-components';

export const Container = styled.div`
  max-width: 53rem;
  height: 41.3rem;

  border: 1px solid ${({ theme }) => theme.LIGHT[600]};
  border-radius: 0.8rem;
  overflow: hidden;

  > #buttons {
    height: 8.1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    border-bottom: 1px solid ${({ theme }) => theme.LIGHT[600]};
    > button {
      background-color: transparent;
      color: ${({ theme }) => theme.LIGHT[100]};

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.4rem;

      &:first-child {
        border-right: 1px solid ${({ theme }) => theme.LIGHT[600]};
      }

      &:hover,
      &.selected {
        background-color: ${({ theme }) => theme.DARK[800]};
      }
    }
  }

  .payment {
    padding: 3rem 2.6rem;
    display: grid;
    place-content: center;
    height: calc(100% - 8.1rem);

    > img {
      width: min(50vw, 25rem);
      margin: 0 auto;
      height: min(50vw, 25rem);
    }

    .copy-wrapper {
      margin-top: 1.5rem;
      display: flex;

      > input {
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: transparent;
        outline: none;
        border: 1px solid ${({ theme }) => theme.LIGHT[600]};
        border-radius: 0.8rem 0 0 0.8rem;

        color: ${({ theme }) => theme.LIGHT[400]};
        padding: 0.4rem 0.8rem;
        width: 100%;
      }

      > button {
        color: ${({ theme }) => theme.LIGHT[400]};

        border-radius: 0 0.8rem 0.8rem 0;
        padding: 0.4rem 0.8rem;
        background: ${({ theme }) => theme.TINTS.TOMATO[400]};
      }
    }

    > #state {
      text-align: center;

      > img {
        margin: 0 auto;
        margin-bottom: 2.4rem;
      }

      > p {
        color: ${({ theme }) => theme.LIGHT[400]};
        font-size: clamp(1.4rem, -1rem + 7.5vw, 2rem);
        font-weight: 700;
        line-height: 3.2rem;
        > span {
          display: inline-block;
          font-size: clamp(0.9rem, 0.6857rem + 0.6696vw, 1.2rem);
          line-height: 1.2rem;
          color: ${({ theme }) => theme.TINTS.TOMATO[400]};
        }
      }
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 3.7rem;

      max-width: 34.8rem;

      label {
        color: ${({ theme }) => theme.LIGHT[400]};
      }

      input {
        color: ${({ theme }) => theme.LIGHT[400]};

        background-color: transparent;

        border: 1px solid ${({ theme }) => theme.LIGHT[100]};
        border-radius: 0.5rem;

        width: 100%;
        height: 4.8rem;
        padding: 1.2rem 1.4rem;
        margin-top: 0.8rem;
      }
      #twoColumns {
        display: flex;
        gap: 1.7rem;
      }
    }
  }
`;
