import axios from "axios";

class PostService {
    async getAll(limit = 10, page = 1) {
        const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {
            _limit: limit,
            _page: page
        }});
        return apiResponse;
    }
    async getPostById(id) {
        const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return apiResponse;
    }
    async getCommentsById(id) {
        const apiResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments` );
        return apiResponse;
    }
}

export default new PostService();