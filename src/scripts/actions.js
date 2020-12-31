const trade = (activePlayer, otherPlayer) => {
  for (let resource in activePlayer.trade.offer) {
    const resourceOfferAmount = activePlayer.trade.offer[resource];
    const otherPlayerResourceAmount = otherPlayer.resources[resource];
    if (resourceOfferAmount < otherPlayerResourceAmount) {
        return "not enough resources to trade";
    }
  }
  for (let resource in activePlayer.trade.offer) {
    const resourceOfferAmount = activePlayer.trade.offer[resource];
    const resourceForAmount = activePlayer.trade.for[resource];
    otherPlayer.resources[resource] += resourceOfferAmount;
    otherPlayer.resources[resource] -= resourceForAmount;
    activePlayer.resources[resource] -= resourceOfferAmount;
    activePlayer.resources[resource] += resourceForAmount;
  }
  return "trade success";
};
