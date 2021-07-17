const DB_NAME = 'cards';

export function getCards() {
  return JSON.parse(localStorage.getItem(DB_NAME));
}

export function getCard(id) {
  const cards = getCards();
  return cards.find((card) => card.id === id);
}

export function findCards(query) {
  const cards = getCards();
  let foundCard = [];
  foundCard.push(
    ...cards.filter((card) =>
      card.id.toString().toLowerCase().startsWith(query),
    ),
  );
  foundCard.push(
    ...cards.filter((card) => card.nome.toLowerCase().startsWith(query)),
  );
  foundCard.push(
    ...cards.filter((card) => card.classe.toLowerCase().startsWith(query)),
  );
  const ids = [];
  foundCard = foundCard.reduce((acumulator, card) => {
    let duplicado = false;
    ids.forEach((id) => {
      if (id === card.id) {
        duplicado = true;
      }
    });
    if (duplicado) return acumulator;
    acumulator.push(card);
    ids.push(card.id);
    return acumulator;
  }, []);
  return foundCard;
}

function generateId() {
  const cards = getCards() || [];
  let id = 1;
  cards.forEach((card) => {
    id = card.id >= id && card.id + 1;
  });
  return id;
}

export function addCard(card) {
  const cards = getCards() || [];
  cards.push({
    id: generateId(),
    ...card,
  });
  localStorage.setItem(DB_NAME, JSON.stringify(cards));
}

export function updateCard(id, updatedCard) {
  let cards = getCards() || [];
  cards = cards.map((card) => (card.id === id ? updatedCard : card));
  localStorage.setItem(DB_NAME, JSON.stringify(cards));
}

export function deleteCard(id) {
  const cards = getCards() || [];
  const savedCards = [];
  cards.forEach((card) => card.id !== id && savedCards.push(card));
  localStorage.setItem(DB_NAME, JSON.stringify(savedCards));
}
