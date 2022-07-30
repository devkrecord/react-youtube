import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function SearchHeader() {
  const navigator = useNavigate();
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigator(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header>
      <Link to={'/'}>
        <BsYoutube />
        <h1>YOUTUBE</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={`Search`}
          vlaue={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
