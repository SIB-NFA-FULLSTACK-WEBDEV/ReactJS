import React, { useState } from "react";
import booksData from "../../../Utils/books"; // pastikan nama file & path benar

export default function ProductList() {
  const [books, setBooks] = useState(booksData);

  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Tambahan",
      author: "Penulis Baru",
      year: 2025,
      description: "Ini adalah buku yang ditambahkan secara dinamis.",
      image: "https://via.placeholder.com/300x225.png?text=Buku+Baru"
    };

    setBooks([...books, newBook]);
  };

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">
                Views
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Other Book
              </a>
            </p>
            {/* Tombol Tambah Buku */}
            <button onClick={handleAddBook} className="btn btn-success mt-3">
              Tambah Buku
            </button>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div key={book.id} className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={book.image}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "225px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.25rem",
                      borderTopRightRadius: "0.25rem"
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
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