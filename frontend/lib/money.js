const calcTotalPrice = cart =>
  cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);

const calcAveragePrice = cart =>
  cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    return (
      (tally + cartItem.quantity * cartItem.item.price) / cartItem.quantity
    );
  }, 0);

const formatMoney = amount => {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  // if its a whole dollar amount, leave off the .00
  // if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
};

export { calcTotalPrice, calcAveragePrice, formatMoney };
