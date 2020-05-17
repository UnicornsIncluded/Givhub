<<<<<<< HEAD
import React from 'react';
import { useSelector } from 'react-redux';
import * as R from 'ramda';

import Todo from '_molecules/Todo';

export default function TodoList() {
  const { todos } = useSelector(R.pick(['todos']));
=======
import React from 'react'
import {useSelector} from 'react-redux'
import * as R from 'ramda'

import Todo from '../../molecules/Todo'

export default function TodoList() {
  const {todos} = useSelector(R.pick(['todos']))
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    <ul className="todo-list">
      {R.reverse(todos).map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
