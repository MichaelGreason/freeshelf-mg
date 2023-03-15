import './App.css'
import bookData from './book-data.json'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesDown } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="section">
      <h1 className='freeshelf'>Freeshelf</h1>
      <div>
        {bookData.map(book => {
          return <BD book={book} />
        })}
      </div>
    </div>
  )
}


function BD({ book }) {
  const [expanded, setExpanded] = useState(false)
  const [showImage, setShowImage] = useState(true);
  const hideImg = (event) => {
    setShowImage(false);
  }

  return (
  <>
  <div className='all'>
    <div className='bigbox'>
      <h4 className='title'>{book.title}</h4>
        <p><strong>{book.author}</strong></p>
            <div className='shortD'>{book.shortDescription}</div>
      <FontAwesomeIcon className='arrow' icon={expanded ? faAnglesDown : faAnglesRight} onClick={() => setExpanded(!expanded)} />
      {
        expanded && 
        <div><p><strong>URL: </strong><a href={book.url}>{book.url}</a></p>
        {book.publisher ? <p><strong>Publisher: </strong>{book.publisher}</p> : ''}
        {book.publicationDate ? <p><strong>Publication Date: </strong>{book.publicationDate}</p> : ''}
        <p><strong>Full Description: </strong>{book.detailedDescription}</p>
    </div>
      }
      </div>
      <div className='imageBox'>
      <div className='image'>{showImage ? (<img src={book.coverImageUrl} alt="cover" width="80%" height="80%" onError={hideImg}/>) :  ''}</div>
      </div>
    </div>
      </>
  )
}

export default App