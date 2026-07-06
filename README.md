# Express.js REST API Playground 🚀

Playground ini dibuat sesuai materi mengenai Express.js, Middleware, dan REST API. Setiap baris kode sudah diberikan penjelasan agar kamu mudah memahaminya.

## 🛠 Instalasi dan Persiapan

1. Buka terminal dan pastikan kamu berada di folder project (`/Volumes/MINISANDISK/kada/backend-nodejs-express-2`).
2. Install semua dependensi menggunakan Node Package Manager (NPM):
   ```bash
   npm install
   ```

## 🚀 Cara Menjalankan Server

Jalankan perintah ini di terminal:
```bash
npm start
```
Server akan berjalan di `http://localhost:3000`.

## 🧪 Menggunakan API (Bisa menggunakan Postman / Thunder Client)

Berikut adalah daftar endpoint REST API yang sudah tersedia:

### 1. Mendapatkan Semua Notes (GET)
- **Method:** `GET`
- **URL:** `http://localhost:3000/notes`
- **Tujuan:** Menampilkan semua catatan.

### 2. Mendapatkan Detail Note (GET)
- **Method:** `GET`
- **URL:** `http://localhost:3000/notes/1`
- **Tujuan:** Menampilkan detail catatan dengan ID 1.

### 3. Menambah Catatan Baru (POST)
- **Method:** `POST`
- **URL:** `http://localhost:3000/notes`
- **Header:** `Content-Type: application/json`
- **Body (JSON):**
  ```json
  {
    "title": "Belajar Express",
    "content": "Hari ini saya belajar middleware dan REST API."
  }
  ```
- **Tujuan:** Membuat catatan baru.

### 4. Mengubah Catatan (PUT)
- **Method:** `PUT`
- **URL:** `http://localhost:3000/notes/1`
- **Header:** `Content-Type: application/json`
- **Body (JSON):**
  ```json
  {
    "title": "Judul Baru",
    "content": "Isi konten yang baru diperbarui."
  }
  ```
- **Tujuan:** Memperbarui data catatan yang memiliki ID 1.

### 5. Menghapus Catatan (DELETE)
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/notes/1`
- **Tujuan:** Menghapus data catatan dengan ID 1.

## 📚 Konsep yang di-cover dalam Playground ini:
- **Middleware**: 
  - Application Middleware
  - Router Middleware
  - Data Processing Middleware (`express.json()`)
  - Functional Middleware
  - Error Handling Middleware (404 & 500)
- **MVC (Model-View-Controller)**: 
  - Model: Pengelolaan data di memori (array) tanpa database nyata.
  - Controller: Diwakilkan oleh Route handler.
- **REST API**: Penggunaan HTTP method `GET`, `POST`, `PUT`, dan `DELETE`.
