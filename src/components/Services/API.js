export const getRecommendedShoe = (athleteID) => {
  return fetch('/athleteID')
  .then(res => res.json())
  .then(json => json.map(shoe => ({
    id: shoe.id,
    model: shoe.model,
    terrain: shoe.terrain,
    mileage: shoe.mileage
  })));
};
export const getAveShoeRatings = () => {
  return fetch('')
  .then(res => res.json())
}