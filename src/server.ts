import { app } from './app';
import { env } from './env';

const PORT = env.PORT || 3000;

app
  .listen({
    port: PORT,
    host: '0.0.0.0', // Adicione esta linha
  })
  .then(() => {
    console.log(`HTTP Server Running on port ${PORT}!`);
  })
  .catch(err => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
