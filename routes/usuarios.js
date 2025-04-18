import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  res.status(201).json({
    mensaje: 'Usuario registrado correctamente',
    usuario: { nombre, email }
  });
});

export default router;

