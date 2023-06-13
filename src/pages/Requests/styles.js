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
  padding: 3.2rem 0;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2.4rem, 1.8286rem + 1.7857vw, 3.2rem);
    line-height: 4.5rem;

    margin-bottom: 3.2rem;
  }

  .details,
  .code,
  .status,
  .time {
    color: ${({ theme }) => theme.LIGHT[400]};
    font-size: 1.4rem;
  }

  > #requests {
    display: grid;
    gap: 1.7rem;
  }
  table {
    display: none;
  }

  @media (min-width: 768px) {
    > #requests {
      grid-template-columns: repeat(auto-fit, minmax(35.8rem, 1fr));
    }
  }
  @media (min-width: 992px) {
    // (min-width: 355px) 768
    > #requests {
      display: none;
    }
    > table {
      border-collapse: collapse;

      display: table;
      width: 100%;

      thead {
        > tr {
          > th:first-child {
            border-radius: 1rem;
          }
        }
      }

      th,
      td {
        border: 2px solid ${({ theme }) => theme.DARK[1000]};
        text-align: start;
        padding: 2.4rem;
        padding-inline: clamp(1.2rem, -7.9569rem + 9.2308vw, 2.4rem);
        padding-block: 2.1rem;
      }
    }
  }
`;

export const RequestMobile = styled.div`
  width: 100%;
  padding: 1.6rem 2rem;
  display: grid;
  row-gap: 1.6rem;

  border: 2px solid ${({ theme }) => theme.DARK[1000]};
  border-radius: 0.8rem;

  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;

  grid-template-areas: ${({ isAdmin }) => {
    if (isAdmin) {
      return `'code . time'
    'details details details'
    'status status status'`;
    }
    return `'code status time'
    'details details details'`;
  }};

  > .details {
    line-height: 2.2rem;
    grid-area: details;
  }
  .code {
    grid-area: code;
  }
  .time {
    grid-area: time;
    justify-self: end;
  }
  .status {
    grid-area: status;
    justify-self: ${({ isAdmin }) => (isAdmin ? 'stretch' : 'center')};
  }

  @media (max-width: 370px) {
    .code,
    .status,
    .time {
      font-size: 1.2rem;
    }
  }
`;
