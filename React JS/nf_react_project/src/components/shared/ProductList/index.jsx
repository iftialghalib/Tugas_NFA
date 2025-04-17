import { useState } from "react";
import books from "../../../utils/books";


export default function ProductList(){

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [bookList, setBookList] = useState(books);
  
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

    return(
        <>
    <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Album example</h1>
        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2">Main call to action</a>
          <a href="#" className="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>

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

  <div className="album py-5 bg-body-tertiary">
    <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {bookList.map((book) => (

            

            <div key={book.id} className="col ">
                <div className="card shadow-sm h-100">
                <img 
                    className="bd-placeholder-img card-img-top" 
                    src={book.image}
                    alt="Thumbnail placeholder" 
                    width="100%" 
                    height="225" 
                    style={{ objectFit: "cover" }} 
                    />
                <div className="card-body">
                    <h4 className="card-title">{book.title}</h4>
                <p className="card-text">{book.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <p>{book.author}</p>
                    </div>
                    <small className="text-body-secondary">{book.year}</small>
                </div>
                </div>
            </div>
            </div>
            ))}

        </div>
    </div>
  </div>
        </>
    );
}