<<<<<<< HEAD
import * as R from 'ramda';

export const capitalize = string => R.concat(R.toUpper(R.head(string)), R.tail(string));
=======
import * as R from 'ramda'

export const capitalize = string =>
  R.concat(R.toUpper(R.head(string)), R.tail(string))
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
