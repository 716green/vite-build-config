import React, { useState, useEffect } from 'react';

export interface ArticleStructure {
  id: number;
  shitUnitCount: number;
  title: string;
  article: string;
}

function MainView(props: any) {
  const [shittyArticles, setShittyArticles] = useState([
    {
      id: 0,
      shitUnitCount: 0,
      title: '',
      article: '',
    },
  ]);

  useEffect(() => {
    setShittyArticles(props.initialShittyArticles);
  }, []);

  const addShitHandler = (articleIndex: number): any => {
    let newArticles = [...shittyArticles];
    let newShitUnitCount = newArticles[articleIndex]['shitUnitCount'] + 1;
    newArticles[articleIndex]['shitUnitCount'] = newShitUnitCount;
    setShittyArticles([...newArticles]);
  };

  const inputNumOutputShitEmoji = (shitNum: number): string[] | [] => {
    const shitArray = [];
    for (let i = 0; i < shitNum; i++) {
      shitArray.push('💩');
    }
    return shitArray;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>I'm a shitty video game journalist</h3>
        <p>I write garbage articles that idiots eat up all day</p>
      </header>
      {shittyArticles.map((article: ArticleStructure, i: number) => {
        return (
          <section
            key={article.id}
            style={{ maxWidth: '100vw', display: 'flex', margin: 'auto' }}>
            <div style={{ padding: '20px', margin: '20px 0' }}>
              <article style={{ width: '100vw' }}>
                <h3>{article.title}</h3>
                <p>{article.article}</p>
                <span style={{ fontSize: '2rem' }}>
                  <strong>{article.shitUnitCount}</strong>{' '}
                  {inputNumOutputShitEmoji(article.shitUnitCount).map(
                    (shit: string) => shit
                  )}
                </span>
                <br />
                <button onClick={() => addShitHandler(i)}>Deem Shitty</button>
              </article>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default MainView;
