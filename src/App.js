import './App.css'
import bookData from './book-data.json'
import { useState } from 'react'

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
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <h4>{book.title}</h4>
      <p><strong>{book.author}</strong></p>
      <div>{book.shortDescription}</div>
      <button onClick={() => setExpanded(!expanded)}></button>
      {
        expanded && <div><p><strong>URL: </strong><a>{book.url}</a></p>
        <p><strong>Publisher: </strong>{book.publisher}</p>
        <p><strong>Publication Date: </strong>{book.publicationDate}</p>
        <p><strong>Full Description: </strong>{book.detailedDescription}</p>
    </div>
      }
      </>
  )
}

export default App
