const express = require('express');
const customerRoutes = require('./customer/routes');
const productRoutes = require('./product/routes');

const app = express();
const PORT = 3008;

const htmlInformingUserOfRoutes = `
  <html>
    <body>
      <h1>Welcome to the API</h1>
      <ul>
        <li><a href="/customer">Load Customers</a></li>
        <li><a href="/product">Load Products</a></li>
      </ul>
    </body>
  </html>
`;

app.get('/', (req, res) => {
  res.send(htmlInformingUserOfRoutes);
});

app.use('/customer', customerRoutes);
app.use('/product', productRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${server.address().port}`);
});
