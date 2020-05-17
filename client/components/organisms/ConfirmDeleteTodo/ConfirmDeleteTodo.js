<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

export default function ConfirmDeleteTodo({ closeModal, deleteTodo }) {
=======
import React from 'react'
import PropTypes from 'prop-types'

export default function ConfirmDeleteTodo({closeModal, deleteTodo}) {
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  return (
    <div className="card">
      <div className="card-content">
        <div className="content has-text-centered">
          Are you sure you wanted to delete this item?
        </div>
      </div>
      <footer className="card-footer">
<<<<<<< HEAD
        <a className="card-footer-item" onClick={closeModal} onKeyPress={closeModal}>
          Cancel
        </a>
        <a className="card-footer-item" onClick={deleteTodo} onKeyPress={deleteTodo}>
=======
        <a
          className="card-footer-item"
          onClick={closeModal}
          onKeyPress={closeModal}
        >
          Cancel
        </a>
        <a
          className="card-footer-item"
          onClick={deleteTodo}
          onKeyPress={deleteTodo}
        >
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
          Delete
        </a>
      </footer>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

ConfirmDeleteTodo.propTypes = {
  closeModal: PropTypes.func.isRequired,
<<<<<<< HEAD
  deleteTodo: PropTypes.func.isRequired,
};
=======
  deleteTodo: PropTypes.func.isRequired
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
