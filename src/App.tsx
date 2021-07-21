import React from 'react';
import MainView from './MainView';
import './App.css';
import { ArticleStructure } from './MainView';

const initialShittyArticles: ArticleStructure[] = [
  {
    id: 1,
    shitUnitCount: 6,
    title: "Can't beat Cuphead",
    article:
      "As a writer at Kotaku, I learly have some really bad taste when it comes to video games. It's probably because I'm a horrible shitty journalist.",
  },
  {
    id: 2,
    shitUnitCount: 4,
    title: 'Lorem 2',
    article:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde debitis dolorem ad quas odit magnam eos nam ea, ut, distinctio quam laborum eius amet enim voluptates mollitia pariatur fuga labore consectetur qui, aspernatur deleniti. Consectetur officia in nisi expedita assumenda!',
  },
  {
    id: 3,
    shitUnitCount: 9,
    title: 'Lorem 3',
    article:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquam, commodi maxime similique minus sit minima blanditiis quo architecto corrupti quasi cum amet sint expedita.',
  },
];

function App() {
  return (
    <div>
      <header className="title App-header">
        <h1>💩 Kocoku 💩</h1>
      </header>
      <MainView initialShittyArticles={initialShittyArticles} />
    </div>
  );
}

export default App;
