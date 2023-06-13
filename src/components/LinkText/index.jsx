import { Container } from './styles';

export function LinkText({ name, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {name}
    </Container>
  );
}
