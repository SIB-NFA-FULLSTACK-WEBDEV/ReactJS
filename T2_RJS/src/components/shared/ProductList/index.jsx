import { Link } from "react-router";

  const books = [
  { id: 1, title: "Book 1", description: "This is a wider card...", image: "https://picsum.photos/id/1011/300/225" },
  { id: 2, title: "Book 2", description: "This content is a little bit longer.", image: "https://picsum.photos/id/1012/300/225" },
  { id: 3, title: "Book 3", description: "A short description...", image: "https://picsum.photos/id/1013/300/225" },
  { id: 4, title: "Book 4", description: "This is a wider card...", image: "https://picsum.photos/id/1014/300/225" },
  { id: 5, title: "Book 5", description: "This content is a little bit longer.", image: "https://picsum.photos/id/1015/300/225" },
  { id: 6, title: "Book 6", description: "A short description...", image: "https://picsum.photos/id/1016/300/225" }
];


export default function ProductList() {
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
              <Link to="#" className="btn btn-primary my-2 m-2">
                Views
              </Link>
              <Link to="#" className="btn btn-secondary my-2">
                Other Book
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  <div className="p-3">
                    <h5 className="card-title text-center">{book.title}</h5>
                  </div>
                  <img
                    className="card-img-top"
                    src={book.image}
                    alt={`Thumbnail for ${book.title}`}
                    style={{
                      width: "100%",
                      height: "225px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.25rem",
                      borderTopRightRadius: "0.25rem"
                    }}
                  />

                  <div className="card-body">
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
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
