import { Container } from './styles';

export function Input({ id, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </Container>
  );
}
