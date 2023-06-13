import styled from 'styled-components';

export const Container = styled.select`
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
`;
