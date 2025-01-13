import React, { useState } from 'react';
import './MovieList.css'; // Ensure you create this CSS file for styling

const MovieList = () => {
    const movies = [
        { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
        { title: "Titanic", genre: "Romance", releaseYear: 1997 },
        { title: "The Exorcist", genre: "Horror", releaseYear: 1973},
        { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
        { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
        { title: "Frozen", genre: "Animation", releaseYear: 2013 }
    ];

    const [selectedGenre, setSelectedGenre] = useState("All Genres");

    const uniqueGenres = ["All Genres", ...new Set(movies.map(movie => movie.genre))];

    const filteredMovies = selectedGenre === "All Genres"
        ? movies
        : movies.filter(movie => movie.genre === selectedGenre);

    const handleMovieClick = (title) => {
        alert(`You clicked on movie title: ${title}`);
    };

    return (
        <div className="movie-list">
            <h1>Movie List App</h1>
            <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
                {uniqueGenres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>

            <div className="movie-cards">
                {filteredMovies.map((movie, index) => (
                    <div className="movie-card" key={index} onClick={() => handleMovieClick(movie.title)}>
                        <h2>{movie.title}</h2>
                        <p><strong>Genre:</strong> {movie.genre}</p>
                        <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
