var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    pict: 'http://placehold.it/150x300'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    pict: 'http://placehold.it/150x300'
  },
{ 
    id: 3,
    title: 'Shrek',
    desc: 'Film o ogrze',
    pict: 'http://placehold.it/150x300'
  },
  {
  id: 4,
  title: 'Pulp Ficktion',
  desc: 'Taki film',
  pict: 'http://placehold.it/150x300'
  },
  {
  id: 5,
  title: 'King Kong',
  desc: 'Film o dużej małpie',
  pict: 'http://placehold.it/150x300'
  }
];


var Movie = React.createClass({
  propTypes: {
      movie: React.PropTypes.object.isRequired,
  },
  render : function() {
      return (
      React.createElement('li', {},
      React.createElement(MovieTitle, {title: this.props.movie.title}),
      React.createElement(MovieDescription, {desc: this.props.movie.desc}),
      React.createElement(Moviepict, {img: this.props.movie.pict})
  )   
  )
  }
});



var MovieTitle = React.createClass({
  propTypes: {
     title: React.PropTypes.string.isRequired,
  },
  render: function() {
      return React.createElement('h2', {}, this.props.title)
  }
})
var MovieDescription = React.createClass({
  propTypes: {
      desc: React.PropTypes.string.isRequired,
  },
  render : function() {
      return React.createElement('p', {}, this.props.desc)
  }
})

var MovieList = React.createClass({
 
  render: function() {
      return (
          
          React.createElement('ul', {}, moviesElements)
      )
  }
  });
var moviesElements = movies.map(function(movie) {
  return (
      React.createElement(Movie, {key:movie.id, movie: movie})

  )
});
var Moviepict = React.createClass({
  propTypes: {
      img: React.PropTypes.string.isRequired,
  },
  render: function() {
      return React.createElement('img', {src: this.props.img})
  }
})




var element = React.createElement('div', {}, 
React.createElement('h1', {}, 'Lista filmów'),
React.createElement(MovieList, {})
);
      

ReactDOM.render(element, document.getElementById('app'));