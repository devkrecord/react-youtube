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
    <header className="w-full flex p-4 text-2xl border-b boder-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="text-2xl font-bold ml-2 text-3">YOUTUBE</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-8/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder={`Search`}
          vlaue={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
