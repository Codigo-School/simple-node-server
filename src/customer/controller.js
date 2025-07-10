// seria de la base de datos pero hacemos un mock
const customers = [
  {
    name: 'test',
    age: 20,
    location: 'Atlanta',
  },
  {
    name: 'tester',
    age: 30,
    location: 'Houston',
  },
  {
    name: 'prueba',
    age: 40,
    location: 'Aguascalientes'
  }
]


const listCustomers = (req, res) => {
  return res.json({ customers });
}

module.exports = { listCustomers };
