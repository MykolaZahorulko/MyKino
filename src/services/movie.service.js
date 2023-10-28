import axios from 'axios';

export const MovieService = {
    async getMovies() {
        try {
            const response = await axios.get('https://yts.mx/api/v2/list_movies.json');

            if (response.status === 200) {
                return response.data.data.movies;
            } else {
                throw new Error('Error fetching films');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    async getMovie(id) {
        try {
            const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            return response.data.data.movie;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};
