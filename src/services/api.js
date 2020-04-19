import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:2020',
});

api.defaults.headers.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU4NjUzMTY1NiwiZXhwIjoxNTg2OTYzNjU2fQ.ECJ8AvWHA9tvG9Tu_8h48Zi0RGH_Mf6YXZGGQLXWjtA';

export default api;
