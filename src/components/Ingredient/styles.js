import styled from 'styled-components';

export const Container = styled.li`
  background-color: ${({ theme }) => theme.DARK[1000]};
  color: ${({ theme }) => theme.LIGHT[100]};

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;

  padding: 4px 0.8rem;
  min-width: 6rem;
  border-radius: 5px;

  list-style: none;
`;
