import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { LinkText } from '../../components/LinkText';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from './styles';
import { useState } from 'react';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const { signIn } = useAuth();

  async function handleSignIn() {
    if (!email || !password) {
      return toast.warn('Preencha todos os campos!');
    }
    if (!email.includes('@')) {
      return toast.warn('Informe um e-mail válido!');
    }
    if (password.length < 6) {
      return toast.warn('Informe uma senha válida!');
    }
    setBtnDisabled(true);
    await signIn({ email, password }).then(() => {
      setBtnDisabled(false);
    });
  }

  return (
    <Container>
      <h1>
        <svg
          width="39"
          height="44"
          viewBox="0 0 39 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
            fill="#065E7C"
          />
        </svg>
        food explorer
      </h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h2>Faça login</h2>

        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="exemplo@exemplo.com.br"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          minLength="6"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} disabled={btnDisabled} />
        <LinkText name="Criar uma conta" to="/register" />
      </Form>
    </Container>
  );
}
