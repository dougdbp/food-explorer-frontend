import { Container } from './styles';

export function Select({children, ...rest}) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}
