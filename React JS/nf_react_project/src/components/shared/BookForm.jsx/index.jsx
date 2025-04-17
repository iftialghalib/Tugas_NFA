import React, { useState } from "react";
import books from "../../../utils/books"; // Impor data buku dari folder luar

export default  function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [bookList, setBookList] = useState(books); // Menggunakan data dari books.js

  const handleAddBook = (e) => {
    e.preventDefault();
    const newId = bookList.length > 0 ? bookList[bookList.length - 1].id + 1 : 1;
    const newBook = { id: newId, title, author, year, description, image };
    setBookList([...bookList, newBook]);

    // Reset form input
    setTitle("");
    setAuthor("");
    setYear("");
    setDescription("");
    setImage("");
  };

  return (
    <div>
      <h2>Tambah Buku</h2>
       {/* Form Input Buku */}
       <form onSubmit={handleAddBook} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Judul Buku</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Masukkan Judul Buku"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="author" className="form-label">Penulis</label>
          <input
            type="text"
            id="author"
            className="form-control"
            placeholder="Masukkan Nama Penulis"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="year" className="form-label">Tahun Terbit</label>
          <input
            type="number"
            id="year"
            className="form-control"
            placeholder="Masukkan Tahun Terbit"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="image" className="form-label">URL Gambar</label>
          <input
            type="text"
            id="image"
            className="form-control"
            placeholder="Masukkan URL Gambar"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="description" className="form-label">Deskripsi Buku</label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Masukkan Deskripsi Buku"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Tambah Buku</button>
        </div>
      </form>

      <h3 className="mt-5">Daftar Buku</h3>
      <ul className="list-group">
        {bookList.map((book) => (
          <li key={book.id} className="list-group-item">
            <h4>{book.title}</h4>
            <p><strong>Penulis:</strong> {book.author}</p>
            <p><strong>Tahun Terbit:</strong> {book.year}</p>
            <p><strong>Deskripsi:</strong> {book.description}</p>
            <img src={book.image} alt={book.title} className="img-fluid" width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}


