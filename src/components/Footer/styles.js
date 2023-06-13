import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.DARK[600]};
  height: 7.7rem;

  display: flex;

  > div {
    width: min(90%, 1122px);
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      color: ${({ theme }) => theme.LIGHT[700]};
      font-size: clamp(1.5rem, 0.6rem + 2.8125vw, 2.4rem);
      font-weight: 700;

      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: clamp(0.6rem, 0.2rem + 1.25vw, 1rem);

      > svg {
        width: clamp(2.2rem, 1.4rem + 2.5vw, 3rem);
      }
    }

    > p {
      color: ${({ theme }) => theme.LIGHT[200]};
      font-size: clamp(1.2rem, 1rem + 0.625vw, 1.4rem);
    }

    @media (max-width: 400px) {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
