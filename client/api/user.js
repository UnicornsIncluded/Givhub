import request from 'superagent'
import {handleSuccess, handleError} from '../utils/api'

export const putUserPassword = passwordInfo =>
  request
    .put('/api/user/password')
    .send(passwordInfo)
    .then(handleSuccess)
    .catch(handleError)
