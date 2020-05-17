<<<<<<< HEAD
import React from 'react';
import AddTodo from '_molecules/AddTodo';
import TodoList from '_organisms/TodoList';
=======
import React from 'react'
import AddTodo from '../../molecules/AddTodo'
import TodoList from '../../organisms/TodoList'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

export default function TodoSection() {
  return (
    <div className="section todo-section">
<<<<<<< HEAD
      <h1 className="title is-1 has-text-centered">
        Todo List:
      </h1>
=======
      <h1 className="title is-1 has-text-centered">Todo List:</h1>
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
      <div className="columns">
        <div className="column is-8 is-offset-2 text-center">
          <AddTodo />
        </div>
      </div>
      <div className="columns">
        <div className="column is-8 is-offset-2 text-left">
          <TodoList />
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
