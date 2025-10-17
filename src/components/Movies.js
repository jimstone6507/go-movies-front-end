import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect( () => {
        let moviesList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some Long Description here",
            },{
                id: 2,
                title: "Raiders of the Lost Ark",
                release_date: "1981-06-12",
                runtime: 115,
                mpaa_rating: "PG-13",
                description: "Some Long Description here",
            },{
                id: 3,
                title: "Jaws",
                release_date: "1975-06-012",
                runtime: 115,
                mpaa_rating: "PG",
                description: "Some Long Description here",
            },{
                id: 4,
                title: "Star Wars",
                release_date: "1979-07-13",
                runtime: 115,
                mpaa_rating: "PG",
                description: "Some Long Description here",
            }
        ];

        setMovies(moviesList);
    }, []);

    return(
    
        <div>
            <h2>Movies</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={'/movies/${m.id}'}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Movies;