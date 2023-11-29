// DiscoverPage.tsx

import React, {useState} from 'react';

import SearchBar from './SearchBar';
import CardSection from './CardSection';

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


interface DiscoverPageProps {
  newBooks: Book[];
  onAddToMyBooks: (book: Book) => void; // Add the callback prop

} 

const DiscoverPage: React.FC<DiscoverPageProps> = ({ newBooks , onAddToMyBooks
  }) => {

    //----add and delete----
    const handleAddToMyBooks = (book: Book) => {
      onAddToMyBooks(book);
    };
    //----add and delete----



  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {};
  const [sortedBooks, setSortedBooks] = useState([...newBooks]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('title');


  const handleSearch = (query: string) => {
    console.log(`Search term is: ${query}`);
    // searching logic

  };

  const handleSort = (sortOption: string) => {
    let newSortedBooks = [...newBooks];

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

  const generateBookLink = (book: Book) => `/discover/book/${book.id}`;


  return (

    <div className='My-books-page'>
      <h2 className='App-header'>Discover</h2>
  
      <SearchBar onSearch={handleSearch} onSort={handleSort} />
  

      <CardSection //needs title of section and book list under it
                  title={"Based on your books..."}
                  books={newBooks}
                  sectionRef={(ref) => (sectionRefs['A'] = ref)}
                  generateBookLink={generateBookLink}
                  //----add and delete----
                  onAddToMyBooks={handleAddToMyBooks}
                />
      <CardSection //needs title of section and book list under it
                  title={"Top trending..."}
                  books={newBooks}
                  sectionRef={(ref) => (sectionRefs['A'] = ref)}
                  generateBookLink={generateBookLink}
                  //----add and delete----
                  onAddToMyBooks={handleAddToMyBooks}
                />

    </div>
   
  );
};

export default DiscoverPage;
