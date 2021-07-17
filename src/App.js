import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';

import {
  Container,
  InputArea,
  SearchArea,
  CardContent,
  CardArea,
} from './styles';
import {
  addCard,
  getCard,
  getCards,
  updateCard,
  deleteCard,
  findCards,
} from './services';

function App() {
  const informationCard = Object.freeze({
    nome: '',
    descricao: '',
    ataque: 0,
    defesa: 0,
    tipo: '',
    classe: '',
  });
  const [card, setCard] = useState(informationCard);
  const [cards, setCards] = useState([{}]);

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const createCard = () => {
    addCard(card);
    setCard(informationCard);
    setCards(getCards());
  };

  const selectedCard = (id) => {
    setCard(getCard(id));
  };

  const updatedCard = (id) => {
    updateCard(id, card);
    setCards(getCards());
  };

  const deletedCard = (id) => {
    deleteCard(id);
    setCards(getCards());
  };

  const findCard = (query) => {
    setCards(findCards(query));
  };

  useEffect(() => {
    setCards(getCards());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <InputArea>
          <Row>
            <Col xs={12} md={4}>
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                value={card.nome}
                onChange={(event) => handleChange(event)}
              />
            </Col>
            <Col xs={12} md={4}>
              <label>Descrição:</label>
              <input
                type="text"
                name="descricao"
                value={card.descricao}
                onChange={(event) => handleChange(event)}
              />
            </Col>
            <Col xs={12} md={4}>
              <label>Ataque:</label>
              <input
                type="number"
                name="ataque"
                value={card.ataque}
                onChange={(event) => handleChange(event)}
              />
            </Col>
            <Col xs={12} md={4}>
              <label>Defesa:</label>
              <input
                type="number"
                name="defesa"
                value={card.defesa}
                onChange={(event) => handleChange(event)}
              />
            </Col>
            <Col xs={12} md={4}>
              <label>Tipo:</label>
              <input
                type="text"
                name="tipo"
                value={card.tipo}
                onChange={(event) => handleChange(event)}
              />
            </Col>
            <Col xs={12} md={4}>
              <label>Classe:</label>
              <input
                type="text"
                name="classe"
                value={card.classe}
                onChange={(event) => handleChange(event)}
              />
            </Col>
            <Col>
              <Button
                variant="secondary"
                onClick={() => createCard()}
                type="submit"
              >
                Incluir
              </Button>
            </Col>
          </Row>
        </InputArea>
        <SearchArea>
          <input
            type="text"
            placeholder="Pesquise aqui"
            onChange={(e) => findCard(e.target.value)}
          />
        </SearchArea>
        <CardContent>
          {cards &&
            cards.map((item) => (
              <CardArea key={item.id}>
                <p>ID: {item.id}</p>
                <p>Nome: {item.nome}</p>
                <p>Descricao: {item.descricao}</p>
                <p>Ataque: {item.ataque}</p>
                <p>Defesa: {item.defesa}</p>
                <p>Tipo: {item.tipo}</p>
                <p>Classe: {item.classe}</p>
                {/* <Button
                  className="mb-1"
                  variant="secondary"
                  type="submit"
                  onClick={() => selectedCard(item.id)}
                >
                  Editar
                </Button> */}
                {/* <Button
                  className="mb-1"
                  variant="secondary"
                  type="submit"
                  onClick={() => updatedCard(item.id)}
                >
                  Atualizar
                </Button> */}

                <Button
                  className="mb-1"
                  variant="secondary"
                  type="submit"
                  onClick={() => deletedCard(item.id)}
                >
                  Excluir
                </Button>
                <Button variant="secondary" onClick={handleShow}>
                  Modal
                </Button>
              </CardArea>
            ))}
        </CardContent>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <InputArea>
            <Row>
              <Col xs={12} md={4}>
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={card.nome}
                  onChange={(event) => handleChange(event)}
                />
              </Col>
              <Col xs={12} md={4}>
                <label>Descrição:</label>
                <input
                  type="text"
                  name="descricao"
                  value={card.descricao}
                  onChange={(event) => handleChange(event)}
                />
              </Col>
              <Col xs={12} md={4}>
                <label>Ataque:</label>
                <input
                  type="number"
                  name="ataque"
                  value={card.ataque}
                  onChange={(event) => handleChange(event)}
                />
              </Col>
              <Col xs={12} md={4}>
                <label>Defesa:</label>
                <input
                  type="number"
                  name="defesa"
                  value={card.defesa}
                  onChange={(event) => handleChange(event)}
                />
              </Col>
              <Col xs={12} md={4}>
                <label>Tipo:</label>
                <input
                  type="text"
                  name="tipo"
                  value={card.tipo}
                  onChange={(event) => handleChange(event)}
                />
              </Col>
              <Col xs={12} md={4}>
                <label>Classe:</label>
                <input
                  type="text"
                  name="classe"
                  value={card.classe}
                  onChange={(event) => handleChange(event)}
                />
              </Col>

              <div>
                {cards &&
                  cards.map((item) => (
                    <div key={item.id}>
                      <Button
                        style={{ marginRight: '5px' }}
                        className="ml-1"
                        variant="secondary"
                        type="submit"
                        onClick={() => selectedCard(item.id)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="secondary"
                        type="submit"
                        onClick={() => updatedCard(item.id)}
                      >
                        Atualizar
                      </Button>
                    </div>
                  ))}
              </div>
            </Row>
          </InputArea>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
