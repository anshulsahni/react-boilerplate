import request from '../utils/request';

const apiBaseUrl = 'https://randomuser.me/api';

export const getRandomUser = () => request.get(apiBaseUrl);
