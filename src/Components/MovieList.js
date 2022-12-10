import React from 'react';
import Movie from './Movie';


export default class MovieList extends React.Component {
    render() {
    return (
      <div className='movieList container'>
        <Movie {...
          {id: 1,
          key: 1,
          title: "Back To The Future",
          ratingImage: "PG",
          released: "1985",
          summary: "Marty McFly, a 17-year-old high school student, is accidentally sent \
                    30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
          image: 'https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY879_.jpg'}
        } />
        <Movie {...
          {id: 2,
          key: 2,
          title: 'Reservior Dogs',
          ratingImage: "R",
          summary: "They were perfect strangers, assembled to pull off the perfect crime. \
                    Then their simple robbery explodes into bloody ambush, and the ruthless killers realize one of them is a police informer. But which one??",
          released: "1992",
          image: 'https://m.media-amazon.com/images/I/81uqnFlWzRL._SY445_.jpg'}
        } />
        <Movie {...
          {id: 3,
          key: 3,
          title: 'The Dark Knight',
          ratingImage: "PG-13",
          summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, \
                    Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          release: "2008",
          image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/darkknight.building.24x36_500x749.jpg?v=1648745689'}
        } />
        <Movie {...
          {id: 4,
          key: 4,
          title: 'The Lord of The Rings: The Return of The King',
          ratingImage: "PG-13",
          summary: "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. \
          Frodo and Sam reach Mordor in their quest to destroy the One Ring, \
          while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
          released: "2003",
          image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c468809972e1fb4b7b0c56b07db68987_a25dc22c-c83a-479d-a241-10fa55e7b36b_480x.progressive.jpg?v=1573588780'}
        } />
        <Movie {...
          {id: 5,
          key: 5,
          title: 'How To Train Your Dragon',
          ratingImage: "G",
          summary: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, \
                    and learns there may be more to the creatures than he assumed.",
          released: "2010",
          image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/how-to-train-your-dragon_59411b04_480x.progressive.jpg?v=1631208791'}
        } />
      </div>
    );
  }
}