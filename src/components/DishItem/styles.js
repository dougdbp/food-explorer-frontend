import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  width: fit-content;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  > img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }

  > div {
    > h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.2rem;

      display: flex;
      align-items: baseline;
      gap: 1rem;

      cursor: pointer;

      > small {
        color: ${({ theme }) => theme.LIGHT[400]};
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        line-height: 1.9rem;
        font-weight: 400;
      }
    }
    > button {
      color: ${({ theme }) => theme.TINTS.TOMATO[400]};
      background-color: transparent;

      font-size: 1.2rem;
      line-height: 1.9rem;

      border: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 450px) {
    > div {
      > h2 {
        font-size: 1.4rem;
        flex-direction: column;
        gap: 0;
        line-height: 1.9rem;
        > small {
          font-size: 1rem;
        }
      }

      > button {
        margin-top: 0.8rem;
      }
    }
  }
`;
