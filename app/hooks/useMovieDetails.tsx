import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieDetails } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

const useMovieDetails = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState<MovieDetails>();
    const [movieCast, setMovieCast] = useState<Cast[]>();

    const getMovieDetails = async () => {

        const respMovieDetails = await movieDB.get<MovieDetails>(`/${movieId}`);
        const respCast = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        setMovieDetails(respMovieDetails.data);
        setMovieCast(respCast.data.cast);
        setIsLoading(false);

    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return {
        isLoading,
        movieDetails,
        movieCast
    }
}

export default useMovieDetails;
