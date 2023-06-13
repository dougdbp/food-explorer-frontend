import { useEffect, useState } from 'react';
import { FiSearch, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
import { Button } from '../Button';
import { Menu } from '../Menu';

import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import explorer from '../../assets/icons/explorer.svg';

import { Container } from './styles';
import { LinkText } from '../LinkText';

export function Header({ onChange, searchDisabled = true }) {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const { user, signOut, userRequests, userPurchases } = useAuth();

  const [purchasesPending, setPurchasesPending] = useState([]);

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  let scrollTop;
  let scrollLeft;
  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
      // if any scroll is attempted, set this to the previous value
      (window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      });
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  function handleModal() {
    setShowMenu((prevState) => !prevState);
  }

  useEffect(() => {
    setPurchasesPending(
      userPurchases.filter((purchase) => purchase.status === 'pending')
    );
  }, [userPurchases]);

  useEffect(() => {
    enableScroll();
    function handleResize() {
      if (window.innerWidth > 768) {
        setShowMenu(false);
        enableScroll();
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container isAdmin={user.isAdmin} searchDisabled={searchDisabled}>
      <header>
        <button id="menuBurgue">
          {!showMenu && (
            <img
              src={menu}
              alt="menu hambúrguer"
              onClick={() => {
                handleModal();
                disableScroll();
              }}
            />
          )}
          {showMenu && (
            <img
              src={close}
              alt="menu close"
              onClick={() => {
                handleModal();
                enableScroll();
              }}
            />
          )}
        </button>
        {!showMenu && (
          <>
            <Link id="logo" to="/">
              <img src={explorer} alt="Logo foodExplorer" />
              <h1>food explorer</h1>
              {user.isAdmin && <span>admin</span>}
            </Link>

            <div id="search">
              <FiSearch />
              <Input
                type="search"
                placeholder="Busque por pratos ou ingredientes"
                onChange={onChange}
                disabled={searchDisabled}
              />
            </div>

            {!user.isAdmin && (
              <div id="buttons">
                <LinkText
                  name="Histórico de pedidos"
                  to="/requests"
                  id="historic"
                />
                <LinkText name="Meus favoritos" to="/favorites" id="fav" />
              </div>
            )}
            {user.isAdmin && <LinkText name="Novo prato" to="/new" id="new" />}

            <Link
              to={user.isAdmin ? '/requests' : '/payment'}
              id="receiptDesktop"
            >
              <Button
                id="redBtn"
                title={
                  user.isAdmin
                    ? `Pedidos (${purchasesPending.length})`
                    : `(${userRequests.length})`
                }
                icon={user.isAdmin ? IoReceiptOutline : FiShoppingCart}
              />
            </Link>

            <FiLogOut id="logout" onClick={handleSignOut} />

            <Link to={user.isAdmin ? '/requests' : '/payment'}>
              <button id="receipt">
                {user.isAdmin ? <IoReceiptOutline /> : <FiShoppingCart />}

                <span>
                  {user.isAdmin ? purchasesPending.length : userRequests.length}
                </span>
              </button>
            </Link>
          </>
        )}

        {showMenu && <h2>Menu</h2>}
      </header>
      <Menu
        show={showMenu}
        onChange={onChange}
        searchDisabled={searchDisabled}
      />
    </Container>
  );
}
