import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.unsplash.com',
  headers: {
    type: 'CORS',
    Authorization: 'Client-ID UrJ_3ZNEMk03gpkl2p0d2JHhUU0MTiVnBn8WSJzbnWM'
  }
});
