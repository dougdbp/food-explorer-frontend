import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import foots100 from '../../assets/foots-100.svg';
import foots200 from '../../assets/foots-200.svg';

import { Container, Banner } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

export function Home() {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/?search=${search}`);
      setMeals(response.data.filter((dish) => dish.category === 'meal'));
      setDesserts(response.data.filter((dish) => dish.category === 'dessert'));
      setDrinks(response.data.filter((dish) => dish.category === 'drink'));
    }

    fetchDishes();
  }, [search]);
  return (
    <Container>
      <Header
        onChange={(e) => setSearch(e.target.value)}
        searchDisabled={false}
      />
      <Banner>
        <picture>
          <source media="(max-width: 768px)" srcSet={foots100} />
          <img src={foots200} alt="" />
        </picture>
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>
      <main>
        <Section
          title="Refeições"
          cards={meals.map((dish) => (
            <Card dish={dish} />
          ))}
        />

        <Section
          title="Sobremesas"
          cards={desserts.map((dish) => (
            <Card dish={dish} />
          ))}
        />

        <Section
          title="Bebidas"
          cards={drinks.map((dish) => (
            <Card dish={dish} />
          ))}
        />
      </main>
      <Footer />
    </Container>
  );
}
