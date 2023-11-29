// LetterNavbar.tsx

import React from 'react';
import './Navbar.scss';

interface LetterNavbarProps {
//   title: string;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

const LetterNavbar: React.FC<LetterNavbarProps> = ({ sectionRefs }) => {
  const handleScrollToSection = (letter: string) => {
    const sectionRef = sectionRefs[letter];
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 50, // Adjust the offset as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="letternavbar">
      {/* <div className="letternavbar__brand">{title}</div> */}
      <ul className="letternavbar__menu">
        {Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)).map((letter) => (
          <li key={letter} className="letternavbar__item" onClick={() => handleScrollToSection(letter)}>
            {letter}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LetterNavbar;
