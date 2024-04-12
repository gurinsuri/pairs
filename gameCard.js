export const createGameCard = (defaultIcon, flippedCardIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('span');
    const flippedCardI = document.createElement('span');

    notFlippedCardI.classList.add(defaultIcon);
    flippedCardI.classList.add(flippedCardIcon);

    card.append(flippedCardI, notFlippedCardI);

    return card;
}