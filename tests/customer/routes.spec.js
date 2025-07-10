const express = require('express');
const request = require('supertest');


// Here we are mocking the controller for the customer routes, so that in a real test environment
// we don't need to rely on the actual database or business logic. Because this is an integration test,
// we want to ensure that the routes are correctly set up and that they call the controller as expected only.

// Mock controller
const mockListCustomers = jest.fn((req, res) => {
  res.json({ message: 'Mocked customers' });
});

// Import the router, injecting the mock controller
jest.mock('../../src/customer/controller', () => ({
  listCustomers: (req, res) => mockListCustomers(req, res),
}));

const customerRoutes = require('../../src/customer/routes');

const app = express();
app.use('/customers', customerRoutes);

describe('Customer Routes Integration', () => {
  it('GET /customers should call listCustomers controller', async () => {
    const response = await request(app).get('/customers');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Mocked customers' });
    expect(mockListCustomers).toHaveBeenCalled();
  });
});
