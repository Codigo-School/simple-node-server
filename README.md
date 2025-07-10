# Node.js Express Application Structure

Structure of the app by domains, this makes it easy to manage and scale.

```text
|--src
  |--server.js
  |--customers
     |--controller.js
     |--routes.js
  |--products
     |--controller.js
     |--routes.js
```
```text

## Installation

### Install dependencies
```bash
npm install
```

### Start the application
```bash
npm start
```
## Tests
The tests follow a similar strcture to the application code, with each domain having its own test directory.
```text
|--tests
  |--customers
     |--controller.spec.js
     |--routes.spec.js
  |--products
     |--controller.spec.js
     |--routes.spec.js
```

### Run tests
```bash
npm test
```
