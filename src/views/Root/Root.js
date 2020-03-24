import React from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';

const initialStateItems = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg",
      name: "Dan Abramov",
      description: "The creator of React",
      twitterLink: "https://twitter.com/dan_abramov"
    }
  ];

class Root extends React.Component {
    state = {
        items:[...initialStateItems],
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));

        e.target.reset();
    }

    render() {
        return (
            <BrowserRouter>
                <>
                <h1>Hello world</h1>
                <Route path="/" component={TwittersView}/>
                <Route path="/articles" component={ArticlesView}/>
                <Route path="/notes" component={NotesView}/>
                </>
            </BrowserRouter>
        )
    }
        
}

export default Root;
