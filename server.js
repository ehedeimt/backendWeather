import express from 'express';
import cors from 'cors';

const app = express();

// ⚙️ CORS configurado para aceptar frontend
app.use(cors({
  origin: 'https://eimtcms.eimt.uoc.edu', // cambia esto a tu dominio si cambia
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Ruta POST para registrar usuarios
app.post('/api/usuarios', (req, res) => {
  const { nombre, email, password } = req.body;

  console.log(`Nuevo usuario: ${nombre}, ${email}`);

  // Aquí normalmente guardarías en la base de datos
  res.status(200).json({
    mensaje: '✅ Usuario registrado correctamente',
    usuario: { nombre, email }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend en http://localhost:${PORT}`);
});
