import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFile } from 'fs/promises';
import { parse } from 'yaml';
import { SecurityMiddleware } from '@paysurity/security';
import rateLimit from 'express-rate-limit';

const app = express();
const port = 3000;

// Initialize security middleware
app.use(SecurityMiddleware());

// Add rate limiting to payment processing
app.use('/process-payment', rateLimit({ 
  windowMs: 60000, // 1 minute
  max: 100 // limit each IP to 100 requests per minute
}));

// Parse and serve the Swagger documentation
const swaggerDocument = parse(
  await readFile('./src/swagger.yml', 'utf8')
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
});