import express from 'express';
import cors from 'cors';

const app = express();

// ⚠️ CONFIGURA CORS PARA TU FRONTEND
app.use(cors({
  origin: 'https://eimtcms.eimt.uoc.edu', // permite ese dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Rutas
import usuarioRoutes from './routes/usuarios.js';
app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
