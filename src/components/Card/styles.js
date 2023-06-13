import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.DARK[200]};
  border: 1px solid ${({ theme }) => theme.DARK[300]};

  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  position: relative;

  > button {
    background-color: transparent;
    width: 2.4rem;
    height: 2.4rem;

    position: absolute;
    top: 1.6rem;
    right: 1.8rem;

    > svg {
      width: 100%;
      height: 100%;

      color: ${({ theme }) => theme.LIGHT[300]};

      &.fav > path {
        fill: ${({ theme }) => theme.LIGHT[300]};
      }
    }
  }

  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    color: ${({ theme }) => theme.LIGHT[300]};
    > img {
      width: 8.8rem;
      height: 8.8rem;
      border-radius: 50%;
    }

    > p {
      display: none;
    }

    > span {
      color: ${({ theme }) => theme.TINTS.CAKE[200]};
    }

    > h3 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.4rem;
    }
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    > div {
      font-size: 1.6rem;
      font-weight: 400;
    }

    > button {
      padding: 4px 0;
      background-color: ${({ inCart, theme }) =>
        inCart
          ? `${theme.TINTS.MINT}`
          : `${({ theme }) => theme.TINTS.TOMATO[100]}`};
    }
  }

  @media (min-width: 769px) {
    width: 30.4rem;
    height: 46.2rem;
    gap: 1.5rem;

    > a {
      gap: 1.5rem;

      > img {
        width: 17.6rem;
        height: 17.6rem;
      }

      > h3 {
        font-weight: 700;
        font-size: 2.4rem;
        width: 256px;
      }

      > p {
        color: ${({ theme }) => theme.LIGHT[400]};
        font-size: 1.4rem;
        line-height: 2.2rem;
        text-overflow: ellipsis;

        overflow: hidden;
        display: -webkit-box;
        max-height: 4.4rem;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      > span {
        font-size: 3.2rem;
      }
    }

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      gap: 1.6rem;

      > div {
        font-weight: 700;
        font-size: 2rem;
      }

      > button {
        padding: 1.2rem 0;
      }
    }
  }
`;
