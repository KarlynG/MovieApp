import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [useMovieState, setUseMovieState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {

        const NowPlayingPromise = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const PopularPromise = await movieDB.get<MovieDBMoviesResponse>('/popular');
        const TopRatedPromise = await movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const UpcomingPromise = await movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const [ NowPlayingResp, PopularResp, TopRatedResp, UpcomingResp ] = await Promise.all([
            NowPlayingPromise,
            PopularPromise,
            TopRatedPromise,
            UpcomingPromise,
        ])

        setUseMovieState({
            nowPlaying: NowPlayingResp.data.results,
            popular: PopularResp.data.results,
            topRated: TopRatedResp.data.results,
            upcoming: UpcomingResp.data.results,           
        })

        setIsLoading(false);
    }

    useEffect(() => {
        //* Nowplaying, Populars, Top Rated, Upcoming  
        getMovies();
    }, [])

    return {
        ...useMovieState,
        isLoading,        
    }
}