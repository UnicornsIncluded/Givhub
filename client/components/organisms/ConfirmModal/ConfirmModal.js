<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ConfirmDeleteTodo from '_organisms/ConfirmDeleteTodo';

export default function ConfirmModal({ confirm, closeModal, deleteTodo }) {
  const modalClasses = classNames({
    modal: true,
    'confirm-modal': true,
    'is-active': confirm,
  });
=======
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ConfirmDeleteTodo from '../../organisms/ConfirmDeleteTodo'

export default function ConfirmModal({confirm, closeModal, deleteTodo}) {
  const modalClasses = classNames({
    modal: true,
    'confirm-modal': true,
    'is-active': confirm
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    <div className={modalClasses}>
      <div className="modal-background" />
      <div className="modal-content">
        <ConfirmDeleteTodo closeModal={closeModal} deleteTodo={deleteTodo} />
      </div>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      />
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

ConfirmModal.propTypes = {
  confirm: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
<<<<<<< HEAD
  deleteTodo: PropTypes.func.isRequired,
};
=======
  deleteTodo: PropTypes.func.isRequired
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
