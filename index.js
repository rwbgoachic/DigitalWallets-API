import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFile } from 'fs/promises';
import { parse } from 'yaml';
import { SecurityMiddleware } from '@paysurity/security';

const app = express();
const port = 3000;

// Initialize security middleware
app.use(SecurityMiddleware());

// Parse and serve the Swagger documentation
const swaggerDocument = parse(
  await readFile('./src/swagger.yml', 'utf8')
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
});