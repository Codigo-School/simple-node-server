// seria de la base de datos pero hacemos un mock
const products = [
  {
    id: 1,
    cost: 100,
    description: 'Bike',
  },
  {
    id: 2,
    cost: 150,
    description: 'Toy car',
  },
  {
    id: 3,
    cost: 10,
    description: 'Candy'
  },
];


const listProducts = (req, res) => {
  return res.json({ products });
}

module.exports = { listProducts };
