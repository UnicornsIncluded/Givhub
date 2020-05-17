<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

export default function FormInput({
  className,
  onChange,
  value,
  placeholder,
  type,
  leftIcon,
<<<<<<< HEAD
  rightIcon,
}) {
  const fieldClasses = classNames({
    field: true,
    [className]: true,
  });
=======
  rightIcon
}) {
  const fieldClasses = classNames({
    field: true,
    [className]: true
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const controlClasses = classNames({
    control: true,
    'has-icons-left': !!leftIcon,
<<<<<<< HEAD
    'has-icons-right': !!rightIcon,
  });
=======
    'has-icons-right': !!rightIcon
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    <div className={fieldClasses}>
      <p className={controlClasses}>
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {leftIcon && (
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={leftIcon} />
          </span>
        )}
        {rightIcon && (
          <span className="icon is-small is-right">
            <FontAwesomeIcon icon={rightIcon} />
          </span>
        )}
      </p>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

FormInput.defaultProps = {
  className: '',
  leftIcon: undefined,
  rightIcon: undefined,
<<<<<<< HEAD
  type: 'text',
};
=======
  type: 'text'
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

FormInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
<<<<<<< HEAD
  type: PropTypes.string,
};
=======
  type: PropTypes.string
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
