import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DishItem } from '../../components/DishItem';

import { Container, Content } from './styles';
import photoPlaceholder from '../../assets/photoPlaceholder.png';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function removeFavorite(id) {
    await api.delete(`/favorites/${id}`);

    setFavorites(prevState => prevState.filter(favorite => favorite.id !== id))
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get('/favorites');
      setFavorites(response.data);
    }

    fetchFavorites();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <h1>Meus favoritos</h1>

          <ul>
            {favorites.map((favorite) => (
              <li key={String(favorite.id)}>
                <DishItem
                  img={
                    favorite.photo
                      ? `${api.defaults.baseURL}/files/${favorite.photo}`
                      : photoPlaceholder
                  }
                  name={favorite.name}
                  btnTitle="Remover dos Favoritos"
                  dishId={favorite.dish_id}
                  onClick={() => removeFavorite(favorite.id)}
                />
              </li>
            ))}
          </ul>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
