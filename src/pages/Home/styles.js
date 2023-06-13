import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-areas:
    'header'
    'banner'
    'main'
    'footer';

  grid-template-rows: 11.4rem 16.4rem auto 7.7rem;

  > header {
    position: sticky;
    z-index: 2;
    top: 0;
  }

  > main {
    grid-area: main;
    margin-top: 6.2rem;
    padding: 0 0 2.5rem 0;
    padding-left: 5.5vw;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media (min-width: 769px) {
    grid-template-rows: 9.3rem clamp(16.4rem, -18.2486rem + 54.0541vw, 42.4rem) auto 7.7rem;
    > main {
      padding-left: 0;
      padding-bottom: 4.8rem;
      gap: 4.8rem;
    }
  }
`;

export const Banner = styled.div`
  height: 12rem;
  width: min(89%, 1122px);
  margin: 4.4rem auto 0;
  grid-area: banner;
  background: ${({ theme }) => theme.GRADIENTS[200]};

  border-radius: 3px;

  display: flex;
  justify-content: flex-end;

  position: relative;
  > picture {
    position: absolute;
    top: -3rem;
    left: -3rem;
    bottom: 0;
  }

  padding-right: clamp(0rem, -5.5556rem + 13.8889vw, 10rem);
  > div {
    font-family: 'Poppins', sans-serif;
    width: 21.5rem;
    padding-top: 3.6rem;

    > h2 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.5rem;
      margin-bottom: 3px;
    }

    > p {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
  }

  @media (max-width: 399px) {
    justify-content: center;
    align-items: center;

    > picture > img {
      display: none;
    }
    > div {
      padding-top: 0;
    }
  }

  @media (min-width: 769px) {
    height: clamp(12rem, -6.657rem + 29.106vw, 26rem);
    justify-content: space-between; // 8.6
    margin-top: clamp(8.6rem, -8.3921rem + 22.0963vw, 16.4rem);
    > picture {
      position: static;
      overflow: hidden;
      margin-top: -13%;
      margin-left: -5%;
      width: 58%;
    }
    > div {
      width: 50%;
      padding-top: clamp(4.4rem, -1.4636rem + 9.1476vw, 8.8rem);
      > h2 {
        text-align: center;
        font-size: clamp(1.8rem, -1.1318rem + 4.5738vw, 4rem);
        margin-bottom: clamp(0.3rem, -0.3663rem + 1.0395vw, 0.8rem);
        line-height: clamp(2.5rem, -1.6312rem + 6.4449vw, 5.6rem);
      }

      > p {
        font-size: clamp(1.2rem, 0.6669rem + 0.8316vw, 1.6rem);
        line-height: 1.7rem;
        text-align: center;
      }
    }
  }
`;
