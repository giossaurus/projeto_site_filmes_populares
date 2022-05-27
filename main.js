const moviesContainer = document.querySelector('movies')

const movies = [
    {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jp',
        title: 'Batman',
        rating: 9.8,
        year: 2022,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        isFavorited: false
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
        title: 'Doctor Strange',
        rating: 6.2,
        year: 2022,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: true
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
        title: 'Avengers',
        rating: 7.2,
        year: 2019,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: false
      },
]

window.onload = function() {
    movies.forEach(movie => renderMovie(movie))
}

function renderMovie(movie) {

    const { title, image, rating, year, description, isFavorited } = movie

    const movieElement = document.createElement('div')
    movieElement.classList.add('movie')
    moviesContainer.appendChild('movieElement')

    const movieInformations = document.createElement('div')
    movieInformations.classList.add('movie-informations')

    const movieImageContainer = document.createElement('div')
    movieImageContainer.classList.add('movie-image')
    const movieImage = document.createElement('img')
    movieImage.src = image
    movieImage.alt = `${title} Poster`
    movieImageContainer.appendChild(movieImage)
    movieInformations.appendChild(movieImageContainer)

    const informations = document.createElement('div')
    informations.classList.add('movie-informations')
    movieTextContainer.appendChild(informations)








}