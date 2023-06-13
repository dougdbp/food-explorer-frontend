import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { AddIngredients } from '../../components/AddIngredients';

import { Container, Form, Textarea } from './styles';

export function New() {
  const [photoFile, setPhotoFile] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('meal');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  const navigate = useNavigate();

  async function newDish() {
    const notANumber = isNaN(price) || price === '';

    if (!name || price < 0 || notANumber) {
      return;
    }

    if (newIngredient != '') {
      return toast.warn(
        `Clique no + para adicionar o ingrediente tag: ${newIngredient}. ou limpe o campo!`
      );
    }

    if (ingredients.length === 0) {
      return toast.warn('Informe ao menos o ingrediente principal do prato!');
    }

    const response = await api.post('/dishes', {
      name,
      category,
      price,
      description,
      ingredients,
    });
    const id = response.data.id;

    if (photoFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append('photo', photoFile);

      await api.patch(`dishes/photo/${id}`, fileUploadForm);
    }
    toast.success('Prato adicionado!')
    navigate('/');
    setName('');
    setIngredients([]);
    setPrice('');
    setDescription('');
  }

  function handleNewIngredient() {
    if (newIngredient) {
      const isNewIngredient = !ingredients.includes(newIngredient);
      if (isNewIngredient) {
        setIngredients((prevState) => [...prevState, newIngredient]);
      } else {
        toast.warn('Ingredient já Adicionado!');
      }
    }

    setNewIngredient('');
    document.getElementById('add').focus();
  }
  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientDeleted)
    );
  }

  function handleUploadPhoto(event) {
    const file = event.target.files[0];
    setPhotoFile(file);
  }

  return (
    <Container>
      <Header />

      <div className="wrapper">
        <LinkText name="voltar" icon={FiChevronLeft} to={-1} />
      </div>

      <main>
        <Form onSubmit={(e) => e.preventDefault()}>
          <h1>Novo prato</h1>

          <div id="threeColumns">
            <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <div>
                <span>
                  <FiUpload />{' '}
                  {photoFile ? photoFile.name : 'Selecione a imagem'}
                </span>
                <Input
                  id="image"
                  accept="image/png, image/jpeg"
                  type="file"
                  style={{ cursor: 'pointer' }}
                  onChange={handleUploadPhoto}
                />
              </div>
            </div>

            <Input
              id="name"
              label="Nome"
              placeholder="Salada Ceasar"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div>
              <label htmlFor="category">Categoria</label>
              <Select
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="meal">Refeição</option>
                <option value="dessert">Sobremesa</option>
                <option value="drink">Bebida</option>
              </Select>
            </div>
          </div>

          <div id="twoColumns">
            <div>
              <label htmlFor="add">Ingredientes</label>
              <div>
                {ingredients.map((ingredient, index) => (
                  <AddIngredients
                    key={String(index)}
                    value={ingredient}
                    onClick={(e) => handleRemoveIngredient(ingredient)}
                    size={String(ingredient.length)}
                  />
                ))}

                <AddIngredients
                  id="add"
                  isNew
                  size="6"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleNewIngredient}
                />
              </div>
            </div>

            <Input
              id="price"
              type="number"
              label="Preço"
              placeholder="R$ 00,00"
              min="0"
              step="0.010"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div id="textarea">
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button id="buttonAdd" title="Adicionar" onClick={newDish} />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
