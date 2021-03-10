const dateFormater = (dateFromDb) => {
  const date = new Date(dateFromDb);
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options)
}


export { dateFormater };