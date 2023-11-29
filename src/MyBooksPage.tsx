// MyBooksPage.tsx

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import CardSection from './CardSection';
import LetterNavbar from './LetterNavbar';
import SearchBar from './SearchBar';

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


interface MyBooksPageProps {
  myBooks: Book[];
  onDeleteFromMyBooks: (book: Book) => void; // Add the callback prop

}

const MyBooksPage: React.FC<MyBooksPageProps> = ({ myBooks , onDeleteFromMyBooks
  }) => {

    //----add and delete----
    const handleDeleteFromMyBooks = (book: Book) => {
      onDeleteFromMyBooks(book);
    };
    //----add and delete----

    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {};
    const [sortedBooks, setSortedBooks] = useState([...myBooks]);
    const [selectedSortOption, setSelectedSortOption] = useState<string>('title');


  const handleSearch = (query: string) => {
    console.log(`Search term is: ${query}`);
    // searching logic

  };

  const handleSort = (sortOption: string) => {
    let newSortedBooks = [...myBooks];

    switch (sortOption) {
      case 'title':
        newSortedBooks = newSortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'author':
        newSortedBooks = newSortedBooks.filter((book) => book.author).sort((a, b) => a.author.localeCompare(b.author));        
        break;
      case 'genre':
        //newSortedBooks = newSortedBooks.sort((a, b) => a.genre.localeCompare(b.genre));
        break;
      default:
        // Default to sorting by title
        newSortedBooks = newSortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    }

    setSortedBooks(newSortedBooks);
    setSelectedSortOption(sortOption);
  };

  const generateBookLink = (book: Book) => `/mybooks/book/${book.id}`;


  return (
    <div className='My-books-page'>
      <h2 className='App-header'>My books</h2>
  
      <SearchBar onSearch={handleSearch} onSort={handleSort} />
  
      <LetterNavbar sectionRefs={sectionRefs} />

      {Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)).map((letter) => {
        const filteredBooks =
          selectedSortOption === 'title'
            ? sortedBooks.filter((book) => book.title.startsWith(letter))
            : sortedBooks.filter((book) => book.author.startsWith(letter));

            return (
              <div key={letter}>
                <CardSection
                  title={letter}
                  books={filteredBooks}
                  sectionRef={(ref) => (sectionRefs[letter] = ref)}
                  generateBookLink={generateBookLink}
                  //----add and delete----
                  onDeleteFromMyBooks={handleDeleteFromMyBooks}
                />

              </div>
            );
          })}
          
    </div>
  );


};

export default MyBooksPage;
