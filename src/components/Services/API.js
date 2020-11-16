export const rateShoe = shoe => {
  return fetch('https://salty-cliffs-60245.herokuapp.com/rateshoe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shoe)
  })
    .then(res => res.json());
};
export const getAllRatings = () => {
  return fetch('https://salty-cliffs-60245.herokuapp.com/')
  .then(res => res.json())
}
export const getAveShoeRating = (shoe_id) => {
  return fetch(`https://salty-cliffs-60245.herokuapp.com/avgrating/${shoe_id}`)
  .then(res => res.json())
}
export const getTopRecommendedShoes = () => {
  return fetch('https://salty-cliffs-60245.herokuapp.com/recshoes')
  .then(res => res.json())
  .then(json => json.map(shoe => ({
    id: shoe.id,
    avg_stars: shoe.avg_stars.toFixed(2),
    shoes_id: shoe.shoes_id,
    model: shoe.model,
    terrain: shoe.terrain,
    durable_miles: shoe.durable_miles
  })));
}
export const getAthleteRecommendedShoe = (athlete_id) => {
  return fetch(`https://salty-cliffs-60245.herokuapp.com/${athlete_id}`)
  .then(res => res.json())
};
