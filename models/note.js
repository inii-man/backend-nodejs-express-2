// Model bertanggung jawab untuk mengelola data (MVC Pattern)
// Di sini kita tidak menggunakan database beneran, tapi menggunakan array (Memory)

// Data dummy awal berupa array of object
let notes = [
  {
    id: 1,
    title: 'first note',
    content: 'My first note is here.'
  }
];

// Mengekspor fungsi untuk mendapatkan semua catatan
exports.list = () => {
  // Mengembalikan array 'notes' yang berisi id dan title saja
  return notes.map(({ id, title }) => ({
    id,
    title,
  }));
};

// Mengekspor fungsi untuk mendapatkan detail satu catatan berdasarkan id
exports.get = (id) => {
  // Mencari data yang id-nya sama dengan id yang diminta
  const note = notes.find((note) => note.id === id);
  
  // Jika tidak ditemukan, lemparkan error
  if (!note) {
    throw new Error('Note not found');
  }
  
  // Kembalikan data catatan jika ada
  return note;
};

// Mengekspor fungsi untuk membuat catatan baru
exports.create = (title, content) => {
  // Mengambil id dari data terakhir, jika array kosong maka lastId = 0
  const lastId = notes.length > 0 ? notes[notes.length - 1].id : 0;
  
  // Membuat object catatan baru
  const newNote = {
    id: lastId + 1, // ID auto-increment
    title,          // title: title
    content,        // content: content
  };
  
  // Memasukkan catatan baru ke dalam array notes
  notes.push(newNote);
  
  // Mengembalikan catatan yang baru dibuat
  return newNote;
};

// Mengekspor fungsi untuk mengupdate (mengubah) catatan yang sudah ada
exports.update = (id, title, content) => {
  // Mencari index / posisi catatan di dalam array
  const index = notes.findIndex((note) => note.id === id);
  
  // Jika index < 0 (berarti tidak ketemu)
  if (index < 0) {
    throw new Error('Note not found for update');
  }
  
  // Mengambil catatan yang ada
  const note = notes[index];
  
  // Memperbarui properti title dan content
  note.title = title;
  note.content = content;
  
  // Menyimpan kembali data yang sudah di-update ke dalam array
  notes[index] = note;
  
  // Mengembalikan data terbaru
  return note;
};

// Mengekspor fungsi untuk menghapus catatan
exports.delete = (id) => {
  // Mengecek apakah data dengan id tersebut ada
  if (!notes.some((note) => note.id === id)) {
    // Jika tidak ada, lemparkan error
    throw new Error('Note not found for delete');
  }
  
  // Memfilter array: menyisakan semua data yang id-nya TIDAK SAMA dengan id yang mau dihapus
  notes = notes.filter((note) => note.id !== id);
  
  // Tidak perlu mengembalikan apa-apa (return undefined)
  return;
};
