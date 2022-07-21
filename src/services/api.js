import axios from "axios";
const apikey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjQ0ZjUzNmFmODYzODQ1OTEyNmY4ZGI1ZjFmZWZhOCIsInN1YiI6IjYyZDcxOGRlMWQ3OGYyMDA1N2I4YjdmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jRF0v-jH7bpSUU-FKvwihA4oIeNYsmmgWS95UtcUPF8';
const url = 'https://api.themoviedb.org/3';

export default axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${apikey}`
    }
})

