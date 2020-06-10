import http from '@/api';
import {
  USER
} from '@/api/routes';

export const getUsers = () => {
  return http.get(USER.USERS);
};