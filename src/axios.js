import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-project-34fb8.cloudfunctions.net/api',
});

export default instance;
