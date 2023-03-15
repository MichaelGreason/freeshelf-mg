import './App.css'
import bookData from './book-data.json'

function App() {
  return (
    <div className="section">
      <h1>Freeshelf</h1>
      <ul>
        {bookData.map(book => {
          return <BD book={book} />
        })}
      </ul>
    </div>
  )
}


function BD({ book }) {
  return (
    <>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <div>{book.shortDescription}</div>
    </>
  )
}

export default App
