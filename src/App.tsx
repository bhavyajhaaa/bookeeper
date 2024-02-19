import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import "@fontsource/cormorant-garamond";
import Navbar from './Navbar';


import MyBooksPage from './MyBooksPage';
import DiscoverPage from './DiscoverPage';
import BookDetailsPage from './BookDetailsPage';
import Footer from './Footer';




interface Book {
  id: number;
  title: string;
  author: string;
  image: string; // the image is a URL
  rating: number;
  description: string;
  reviews?: string[][];
  notes?: string[][];
}


const App: React.FC = () => {

    const initialDiscoverBooks: Book[] = [
      { id: 6, title: 'The Bell Jar', author: 'Slyvia Plath', image: '/DesktopCovers/BellJar.png', rating: 4.4, description:'dessssccc' },
      { id: 14, title: 'Educated', author: 'Tara Westover', image: '/DesktopCovers/Educated.png', rating: 4.6, description:'Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara\'s older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University.', 
      reviews:[
          ['A Harrowing Journey of Triumph and Resentment','5','Tara Westover\'s "Educated: A Memoir" is a compelling and at times infuriating account of one woman\'s remarkable journey from a life of isolation and ignorance to one of education, enlightenment, and self-discovery. This memoir delves deep into the complexities of family, faith, and the pursuit of knowledge, leaving readers with a mix of emotions that range from anger and frustration to admiration.']
        ], 
      notes:[
          ['Page 185','Remember to look up the caterpillar!'],
          ['Page 62','OMG...rabbit want']] },      
      { id: 15, title: 'To Kill a Mockingbird', author: 'Harper Lee', image: '/DesktopCovers/KillMockingbird.png', rating: 4.6, description:'dessssccc' },
      { id: 16, title: 'The Kite Runner', author: 'Khaled Hosseini', image: '/DesktopCovers/KiteRunner.png', rating: 4.6, description:'dessssccc' },
      { id: 17, title: 'Moby Dick', author: 'Herman Melville', image: '/DesktopCovers/MobyDick.png', rating: 4.6, description:'dessssccc' },
      { id: 18, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', image: '/DesktopCovers/MonteCristo.png', rating: 4.6, description:'dessssccc' },
      { id: 19, title: 'Norwegian Wood', author: 'Haruki Murakami', image: '/DesktopCovers/Norwegian.png', rating: 4.6, description:'dessssccc' },
      { id: 20, title: 'The Road', author: 'Cormac McCarthy', image: '/DesktopCovers/Road.png', rating: 4.6, description:'dessssccc' },
      { id: 21, title: 'Sapiens', author: 'Yuval Noah Harari', image: '/DesktopCovers/Sapiens.png', rating: 4.6, description:'dessssccc' },
      { id: 22, title: '1984', author: 'George Orwell', image: '/DesktopCovers/1984.png', rating: 4.6, description:'dessssccc' },
    
    ];
    
    const initialMyBooks: Book[] = [
      { id: 1, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', image: './DesktopCovers/Alice.png', rating: 4.3, 
      description:'Alice\'s Adventures in Wonderland is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a girl named Alice falling through a rabbit hole into a fantasy world populated by peculiar, anthropomorphic creatures. The tale plays with logic, giving the story lasting popularity with adults as well as with children. It is considered to be one of the best examples of the literary nonsense genre. ', 
      reviews:[
          ['A Harrowing Journey of Triumph and Resentment','5','Tara Westover\'s "Educated: A Memoir" is a compelling and at times infuriating account of one woman\'s remarkable journey from a life of isolation and ignorance to one of education, enlightenment, and self-discovery. This memoir delves deep into the complexities of family, faith, and the pursuit of knowledge, leaving readers with a mix of emotions that range from anger and frustration to admiration.', 'Anonymous'],
          ['Wow just wow', '4', 'This is not something I would have picked for myself to read. I don\'t like memoirs or anything to do with religion. This was my book clubs read for the month of November. I have literal chills after finishing. This story just kept getting crazier and crazier. I just really don\'t even have words for how much I loved this book. The things she endured the life she fought for. And everything with her family after. I\'m so glad I read this in a time I really needed to in my life.', 'Anonymous'],
        ], 
      notes:[ 
          ['Page 185','Remember to look up the caterpillar!'], 
          ['Page 62','OMG...rabbit want'] ] 
      },      
      { id: 2, title: 'All the Light We Cannot See', author: ' Anthony Doerr', image: './../DesktopCovers/Allthelight.png', rating: 4.5, description:'egge' },
      { id: 3, title: 'The Alchemist', author: 'Paulo Coelho', image: 'public/DesktopCovers/Alchemist.png', rating: 4.6, description:'efsgs' },
      { id: 4, title: 'Angela\'s Ashes', author: 'Frank McCourt', image: './../public/DesktopCovers/Angelas.png', rating: 4.4, description:'dessssccc' },
      { id: 5, title: 'Animal Farm', author: 'George Orwell', image: '/DesktopCovers/Animal.png', rating: 4.7, description:'dessssccc' },
      { id: 7, title: 'Brave New World', author: 'Aldous Huxley', image: '/DesktopCovers/BNW.png', rating: 4.6, description:'dessssccc' },
      { id: 8, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', image: '/DesktopCovers/BrothersK.png', rating: 4.6, description:'dessssccc' },
      { id: 9, title: 'The Catcher in the Rye', author: 'J. D. Salinger', image: '/DesktopCovers/Catcher.png', rating: 4.6, description:'dessssccc' },
      { id: 10, title: 'Charlotte\'s Web', author: 'E. B. White', image: '/DesktopCovers/Charlotte.png', rating: 4.6, description:'dessssccc' },
      { id: 11, title: 'The Color Purple', author: 'Alice Walker', image: '/DesktopCovers/ColorPurple.png', rating: 4.6, description:'dessssccc' },
      { id: 12, title: 'Coraline', author: 'Neil Gaiman', image: '/DesktopCovers/Coraline.png', rating: 4.6, description:'dessssccc' },
      { id: 13, title: 'Picture of Dorian Gray', author: 'Oscar Wilde', image: '/DesktopCovers/DorianGray.png', rating: 4.4, description:'dessssccc' },
     
    ];

    const allBooks: Book[] = [...initialMyBooks, ...initialDiscoverBooks];

    //----add and delete----

    const [myBooks, setMyBooks] = useState<Book[]>(initialMyBooks);
    const [discoverBooks, setDiscoverBooks] = useState<Book[]>(initialDiscoverBooks);

    const handleAddToMyBooks = (book: Book) => {
      setMyBooks((prevMyBooks) => [...prevMyBooks, book]);
      setDiscoverBooks((prevDiscoverBooks) =>
        prevDiscoverBooks.filter((discoverBooks) => discoverBooks.id !== book.id)
      );
    };
  
    const handleDeleteFromMyBooks = (book: Book) => {
      setMyBooks((prevMyBooks) => prevMyBooks.filter((myBooks) => myBooks.id !== book.id));
      setDiscoverBooks((prevDiscoverBooks) => [...prevDiscoverBooks, book]);
    };
    //----add and delete----

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar title="BooKeeper"/>

        <Routes>
          <Route path='/'  
                  element={
                    <MyBooksPage 
                      myBooks={myBooks} 
                      onDeleteFromMyBooks={handleDeleteFromMyBooks}
                    />
                    } 
          />

          <Route path='/discover' 
                  element={ 
                    <DiscoverPage 
                      newBooks={discoverBooks} 
                        onAddToMyBooks={handleAddToMyBooks}
                    />
                    } 
          />
          <Route path='/book/:id' 
                  element={
                  <BookDetailsPage 
                    myBooks={allBooks} 
                    onAddToMyBooks={handleAddToMyBooks}
                    onDeleteFromMyBooks={handleDeleteFromMyBooks}
                  />} 
          />

          <Route path='/discover/book/:id' element={<BookDetailsPage myBooks={allBooks} />} />
          <Route path='/mybooks/book/:id' element={<BookDetailsPage myBooks={allBooks} />} />

        </Routes> 

      
        <Footer />
      </div>
    </Router>
  );
}

export default App;


