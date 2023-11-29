// CardSection.tsx

import React, { useRef } from 'react';
import Card from './Card';
import './Card.scss';
import './CardSection.scss';
import {ReactComponent as Up} from './Icons/Up.svg';
import { Link } from 'react-router-dom';


interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    rating: number;
    description: string;
  }

interface CardSectionProps {
    title: string;
    books: Book[];
    sectionRef: (ref: React.RefObject<HTMLDivElement>) => void;
    generateBookLink: (book: Book) => string; // callback
    //----add and delete----
    onAddToMyBooks?: (book: Book) => void;
    onDeleteFromMyBooks?: (book: Book) => void;

  }

const CardSection: React.FC<CardSectionProps> = ({ 
    title, 
    books , 
    sectionRef, 
    generateBookLink, 
  //----add and delete----
  onAddToMyBooks,
  onDeleteFromMyBooks,
  }) => {

    const sectionDivRef = useRef<HTMLDivElement>(null);

    const handleSlide = (direction: 'left' | 'right') => {
      const cardBookList = sectionDivRef.current;
  
      if (cardBookList) {
        const scrollAmount = direction === 'left' ? -200 : 200; // scroll amount dekho - have not tested this
        cardBookList.scrollLeft += scrollAmount;
      }
    };

    React.useEffect(() => {
        sectionRef(sectionDivRef);
      }, [sectionRef]);


    
  return (
    <div ref={sectionDivRef} className="card-section">
      <h5 className='section-letter'>{title}</h5>
      <div className="card-list">
        <Up className='left-arrow' onClick={() => handleSlide('left')}/>
        <div className="card-book-list" ref={sectionDivRef}>
        {books.map((book) => (
          <Link key={book.id} to={generateBookLink(book)}>
            <div key={book.id} className='card'>
              <img src={book.image} alt={book.title} />
              <div>
                <p className='h7'>{book.title}</p>
                <p>{book.author}</p>
                
                {/* ----add and delete---- */}
                {onAddToMyBooks && (
                  <button onClick={() => onAddToMyBooks(book)}>Add to My Books</button>
                )}
                {onDeleteFromMyBooks && (
                  <button onClick={() => onDeleteFromMyBooks(book)} className='delete-button'>
                    Delete from My Books
                  </button>
                )}
                {/* ----add and delete---- */}

              </div>
            </div>
          </Link>
        ))}
        </div>
        <Up  className='right-arrow' onClick={() => handleSlide('right')}/>
      </div>
    </div>
  );
};

export default CardSection;

