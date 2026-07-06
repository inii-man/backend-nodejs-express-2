// Mengimpor Router dari express
const { Router } = require('express');

// Mengimpor Model Note yang sudah dibuat
const Note = require('../models/note');

// Membuat instance router
const router = Router();

// --- 1. GET (Read / Mengambil data) ---
// Route Handler: GET /
// Digunakan untuk mengambil daftar semua catatan
router.get('/', (req, res, next) => {
  // Memanggil fungsi list() dari model Note
  const notes = Note.list();
  
  // Mengirim balasan berupa format JSON ke client
  res.json(notes);
});

// Route Handler: GET /:id
// Digunakan untuk mengambil detail satu catatan berdasarkan id
router.get('/:id', (req, res, next) => {
  // Mengambil nilai 'id' dari Path Variable (URL) dan mengubahnya jadi angka
  const id = Number(req.params.id);
  
  try {
    // Mencoba mengambil detail catatan
    const note = Note.get(id);
    res.json(note);
  } catch (e) {
    // Jika terjadi error (misal data tidak ditemukan), lempar ke Error Handling Middleware (di app.js)
    next(e);
  }
});

// --- 2. POST (Create / Membuat data baru) ---
// Route Handler: POST /
router.post('/', (req, res, next) => {
  // Mengambil nilai 'title' dan 'content' dari request body (hanya bisa diambil jika pakai express.json())
  const { title, content } = req.body;
  
  // Memanggil fungsi create() pada model Note
  const note = Note.create(title, content);
  
  // Mengembalikan data catatan yang baru dibuat
  res.json(note);
});

// --- 3. PUT (Update / Mengubah data) ---
// Route Handler: PUT /:id
router.put('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;
  
  try {
    // Memanggil fungsi update() pada model Note
    const note = Note.update(id, title, content);
    res.json(note);
  } catch (e) {
    next(e);
  }
});

// --- 4. DELETE (Delete / Menghapus data) ---
// Route Handler: DELETE /:id
router.delete('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  
  try {
    // Memanggil fungsi delete() pada model Note
    Note.delete(id);
    
    // Mengembalikan status sukses jika berhasil dihapus
    res.json({ result: 'success' });
  } catch (e) {
    next(e);
  }
});

// Mengekspor router agar bisa digunakan di app.js
module.exports = router;
