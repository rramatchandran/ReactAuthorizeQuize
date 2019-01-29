import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

import { BrowserRouter ,Route} from 'react-router-dom';
import * as Redux from 'redux';



const authors = [
    {
      name: "Mark Twain",
      imageUrl: "../authors/marktwain.jpg",
      imageSource: "Wikimedia Commons",
      books: ["The Adventures of Huckleberry Finn"]
    },
    {
      name: "Joseph Conrad",
      imageUrl: "../authors/josephconrad.png",
      imageSource: "Wikimedia Commons",
      books: ["Heart of Darkness"]
    },
    {
      name: "J.K. Rowling",
      imageUrl: "../authors/jkrowling.jpg",
      imageSource: "Wikimedia Commons",
      imageAttribution: "Daniel Ogren",
      books: ["Harry Potter and the Sorcerers Stone"]
    },
    {
      name: "Stephen King",
      imageUrl: "../authors/stephenking.jpg",
      imageSource: "Wikimedia Commons",
      imageAttribution: "Pinguino",
      books: ["The Shining", "IT"]
    },
    {
      name: "Charles Dickens",
      imageUrl: "../authors/charlesdickens.jpg",
      imageSource: "Wikimedia Commons",
      books: ["David Copperfield", "A Tale of Two Cities"]
    },
    {
      name: "William Shakespeare",
      imageUrl: "../authors/williamshakespeare.jpg",
      imageSource: "Wikimedia Commons",
      books: ["Hamlet", "Macbeth", "Romeo and Juliet"]
    }
  ];


  function getTurnData(authors) {
    const allBooks = authors.reduce(function(p, c, i) {
      return p.concat(c.books);
    }, []);
    //using underscore library to shuffle list in random order
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);
  
    return {
      books: fourRandomBooks,
      //to find an author such that the author's books collection contains a books where the tiltle is equal to answer we choose
      author: authors.find(author => 
          author.books.some(title => 
          title === answer))
    };
  }

function onAnswerSelected(answer){
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.hightlight = isCorrect? 'correct':'wrong';
    render();
}



const state={
    turnData: getTurnData(authors),
    hightlight: 'correct'
    //turnData:{ author:authors[0], books:authors[0].books }
};

function render(){
    ReactDOM.render(<AuthorQuiz {...state}  onAnswerSelected={onAnswerSelected}/>, document.getElementById('root'));
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
