// BookDetailsPage.tsx

import React, {useEffect} from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import './BookDetailsPage.scss';
import {ReactComponent as Star} from './Icons/Star.svg';
import {ReactComponent as Arrow_left_24px} from './Icons/arrow_left_24px.svg';

interface Book {
    id: number;
    title: string;
    author: string;
    image: string; 
    rating: number;
    description: string;
    reviews?: string[][];
    notes?: string[][];
  }

interface BookDetailsPageProps {
    myBooks: Book[];
    //----add and delete----
    onAddToMyBooks?: (book: Book) => void;
    onDeleteFromMyBooks?: (book: Book) => void;
  }
  
const BookDetailsPage: React.FC<BookDetailsPageProps> = ({ 
  myBooks,
  onAddToMyBooks,
  onDeleteFromMyBooks, 
}) => {

  const { id } = useParams<{ id: string }>();
  const location = useLocation();

// n every render
useEffect(() => {
  console.log('--------------------------------Current pathname:', location.pathname);
});

  const book: Book | undefined = myBooks.find((b) => b.id.toString() === id); //book info found using ID


  if (!book) {
    return <div>Book not found</div>;
  }

  const roundedRating = Math.floor(book.rating);

  const stars = [];
  for (let i = 0; i < roundedRating; i++) {
    stars.push(<Star/>);
  }


  return (
    <div className='BookDetails'>


      <div className='navigate-back'>
        
            {location.pathname.includes('/discover') ? (
                  <div>
                    <Link to="/discover">
                      <Arrow_left_24px className='arrow-left-24px'/>
                      Back to Discover</Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/">
                      <Arrow_left_24px className='arrow-left-24px'/>
                      Back to My books</Link>
                  </div>
            )}
      </div>
      
      <div className='book-details-tophalf'>
        <div className='book-details-left-image'>
          <img src={book.image} alt={book.title}/> 
        </div>
        <div className='book-details-right-description'>
          <h3>{book.title}</h3>
          <h4>by {book.author}</h4>
          <div className='rating-section'>
            <p>{book.rating} 
                <div className='rating-stars'>{stars} </div>
            </p>
          </div>
          <p>{book.description}</p>
            {/* Display buttons based on the source page (My Books or Discover) */}
            {location.pathname.includes('/discover') ? (
                <div>
                  <button>Read Sample </button>  
                  <button className='add-to-my-books-button'
                    onClick={() => onAddToMyBooks && onAddToMyBooks(book)}
                    >Add to My Books</button>

                        {/* {onAddToMyBooks && (
                          <button onClick={() => onAddToMyBooks(book)} className='add-to-my-books-button'>Add add to My Books</button>
                        )}
                         */}

                </div>
              ) : (
                <div>
                  <button>Read Now</button>
                  <button className='delete-button'
                    onClick={() => onDeleteFromMyBooks && onDeleteFromMyBooks(book)}
                    >Delete</button>

                        {/* {onDeleteFromMyBooks && (
                        <button onClick={() => onDeleteFromMyBooks(book)} className='delete-button'>
                          Delete from My Books
                        </button>
                        )} */}

                </div>
            )}
        </div>
      </div>


      <div className='book-details-bottomhalf'>
      {location.pathname.includes('/discover') ? (
            <div>
            {book.reviews && (
              <div>
                <h5>Reviews</h5>
                <button>New</button>
                <ul>
                  {book.reviews.map((review, index) => (
                    <li key={index}>
                          <div className='review-pair'>
                             <div className='reviews-page'>{review[0]}</div>
                             <div className='reviews-stars'>{review[1]}</div>
                             <div className='reviews-text'>{review[2]}</div>
                             <div className='reviews-author'>{review[3]}</div>
                             
                           </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
          ) : (
            <div>
            {book.notes && (
                <div>
                  <h5>Notes</h5>
                  <button>New</button>
                  <ul>
                    {book.notes.map((note, index) => (
                       <li key={index}>
                           <div className='note-pair'>
                             <div className='notes-page'>{note[0]}</div>
                             <div className='notes-text'>{note[1]}</div>
                             <div className='delete-button-container'>
                               <button className='delete-button'>Delete</button>
                             </div>
                           </div>

                       </li>
                     ))}
                  </ul>
                </div>
              )}
            </div>
          )}
      </div>
      


    </div>
  );
};

export default BookDetailsPage;
