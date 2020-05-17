<<<<<<< HEAD
import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const postCheckUsername = username =>
  request.post('/api/users/checkusername')
    .send({ username })
    .then(handleSuccess)
    .catch(handleError);

export const placeholder = () => {};
=======
import request from 'superagent'
import {handleSuccess, handleError} from '../utils/api'

export const postCheckUsername = username =>
  request
    .post('/api/users/checkusername')
    .send({username})
    .then(handleSuccess)
    .catch(handleError)

export const placeholder = () => {}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
