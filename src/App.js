import './App.css'
import bookData from './book-data.json'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesDown } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="section">
      <h1 className='freeshelf'>Freeshelf</h1>
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
    <div className='bigbox'>
      <h4 className='title'>{book.title}</h4>
      <p><strong>{book.author}</strong></p>
      <div className='short-image'>
        <div className='shortD'>{book.shortDescription}</div>
      <div className='image'><img src={book.coverImageUrl} alt="coverImage" width="125" height="175"/></div>
      </div>
      <FontAwesomeIcon className='arrow' icon={expanded ? faAnglesDown : faAnglesRight} onClick={() => setExpanded(!expanded)} />
      {
        expanded && <div><p><strong>URL: </strong><a href={book.url}>{book.url}</a></p>
        <p><strong>Publisher: </strong>{book.publisher}</p>
        <p><strong>Publication Date: </strong>{book.publicationDate}</p>
        <p><strong>Full Description: </strong>{book.detailedDescription}</p>
    </div>
      }
      </div>
      </>

  )
}

export default App