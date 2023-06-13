import { FiSearch } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { LinkText } from '../LinkText';
import { Input } from '../Input';
import { Footer } from '../Footer';

import { Container } from './styles';

export function Menu({ show, onChange, searchDisabled = true }) {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container className={`menu ${show ? 'show' : ''}`}>
      <div className="menu-content">
        <div id="search">
          <FiSearch />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
            disabled={searchDisabled}
          />
        </div>

        <ul>
          {user.isAdmin && (
            <li>
              <LinkText name="Novo prato" to="/new" />
            </li>
          )}
          {!user.isAdmin && (
            <li>
              <LinkText name="Histórico de pedidos" to="/requests" />
            </li>
          )}
          {!user.isAdmin && (
            <li>
              <LinkText name="Meus favoritos" to="/favorites" />
            </li>
          )}

          <li>
            <LinkText name="Sair" to={'/'} onClick={handleSignOut} />
          </li>
        </ul>
      </div>
      <Footer />
    </Container>
  );
}
