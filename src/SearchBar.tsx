// SearchBar.tsx

import React, { useState } from 'react';
import './SearchBar.scss';
import {ReactComponent as Import_export_24px} from './Icons/import_export_24px.svg';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSort: (sortOption: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSort }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);


  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleSortOptionClick = (sortOption: string) => {
    onSort(sortOption);
    setShowDropdown(false);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-top">
        <button className="sort-button"
          onClick={() => setShowDropdown(!showDropdown)}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Sort
          <Import_export_24px className='sort-icon' />
          {showDropdown && (
            <div className='dropdown'>
              <div onClick={() => handleSortOptionClick('title')}>Title</div>
              <div onClick={() => handleSortOptionClick('author')}>Author</div>
              <div onClick={() => handleSortOptionClick('genre')}>Genre</div>
            </div>
          )}
        </button>
        <input
          type="text"
          placeholder="Search books, authors, genres... "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
