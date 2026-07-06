// Mengimpor modul express yang sudah diinstal
const express = require('express');

// Membuat instance aplikasi express
const app = express();

// Menentukan port server
const PORT = 3000;

// Mengimpor router untuk 'notes' dari folder routes
const notesRouter = require('./routes/notes');

// --- 1. APPLICATION MIDDLEWARE ---
// Middleware ini akan dijalankan pada setiap request yang masuk
app.use((req, res, next) => {
  // Menampilkan log metode HTTP dan path URL dari request
  console.log(`[LOG] Request diterima: ${req.method} ${req.path}`);
  
  // Memanggil next() wajib dilakukan agar request diteruskan ke middleware/router selanjutnya.
  // Jika tidak dipanggil, proses akan berhenti di sini.
  next(); 
});

// --- 2. DATA PROCESSING MIDDLEWARE (UNTUK JSON) ---
// Secara default, Express tidak mengenali data JSON di body HTTP.
// Middleware ini berfungsi untuk mem-parsing data JSON yang dikirim client.
app.use(express.json());

// --- 3. FUNCTIONAL MIDDLEWARE (Contoh) ---
// Middleware yang dapat menerima konfigurasi (parameter)
const checkAuth = (role) => {
  return (req, res, next) => {
    // Misalnya kita mensimulasikan cek role
    // Pada praktiknya ini mengecek token/session
    console.log(`[AUTH] Mengecek apakah user memiliki role: ${role}`);
    next();
  };
};

// --- ROUTING MIDDLEWARE ---
// Menggunakan notesRouter untuk semua path yang diawali dengan '/notes'
// Kita juga menyisipkan functional middleware checkAuth di sini sebagai contoh
app.use('/notes', checkAuth('user'), notesRouter);

// Routing dasar untuk homepage
app.get('/', (req, res) => {
  // Mengirim balasan teks sederhana
  res.send('Selamat datang di Playground Express.js & REST API!');
});

// --- 4. ERROR HANDLING MIDDLEWARE: 404 (Tidak Ditemukan) ---
// Middleware ini dijalankan jika URL tidak cocok dengan routing mana pun di atas
app.use((req, res, next) => {
  // Mengatur status HTTP menjadi 404 (Not Found)
  res.status(404);
  
  // Mengirim response berupa JSON yang berisi informasi error
  res.json({
    result: 'fail',
    error: `Halaman tidak ditemukan: ${req.path}`
  });
});

// --- 5. ERROR HANDLING MIDDLEWARE: UMUM (500) ---
// Middleware dengan 4 parameter (err, req, res, next) otomatis dikenali sebagai error handler
app.use((err, req, res, next) => {
  // Mengatur status HTTP menjadi 500 (Internal Server Error)
  res.status(500);
  
  // Mengirim pesan error yang tertangkap
  res.json({
    result: 'fail',
    error: err.message
  });
});

// Menjalankan server agar mendengarkan pada port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
