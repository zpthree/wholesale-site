export default date => {
  const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  };
  const newDate = new Date(date);

  return newDate.toLocaleDateString('en-US', options);
};
