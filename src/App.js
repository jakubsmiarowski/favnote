import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import './index.css';

const initialStateItems = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg",
      name: "Dan Abramov",
      description: "The creator of React",
      twitterLink: "https://twitter.com/dan_abramov"
    }
  ];

class App extends React.Component {
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
            <div>
                <ListWrapper 
                    items={this.state.items}
                />
                <Form submitFn={this.addItem} />
            </div>
        )
    }
        
}

export default App;
