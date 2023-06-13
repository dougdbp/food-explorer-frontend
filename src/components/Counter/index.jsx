import { Container } from './styles';
import { FiPlus, FiMinus } from 'react-icons/fi';

export function Counter({quantity, setQuantity}) {

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity((prevState) => --prevState);
    }
  }

  function handleIncrement() {
    if (quantity < 99) {
      setQuantity((prevState) => ++prevState);
    }
  }

  return (
    <Container>
      <button onClick={handleDecrement}>
        <FiMinus />
      </button>
      {String(quantity).padStart(2, '0')}

      <button onClick={handleIncrement}>
        <FiPlus />
      </button>
    </Container>
  );
}
