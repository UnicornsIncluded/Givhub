<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button(props) {
  const {
    className, onClick, label, style, type, size, outlined,
    inverted, rounded, hovered, focused, active, loading, disabled,
  } = props;
=======
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Button(props) {
  const {
    className,
    onClick,
    label,
    style,
    type,
    size,
    outlined,
    inverted,
    rounded,
    hovered,
    focused,
    active,
    loading,
    disabled
  } = props
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const typeMap = {
    info: 'is-info',
    primary: 'is-primary',
    success: 'is-success',
    warning: 'is-warning',
<<<<<<< HEAD
    danger: 'is-danger',
  };
=======
    danger: 'is-danger'
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const sizeMap = {
    small: 'is-small',
    normal: '',
    medium: 'is-medium',
<<<<<<< HEAD
    large: 'is-large',
  };

  const isType = typeMap[type] || 'is-info';
  const isSize = sizeMap[size] || '';
=======
    large: 'is-large'
  }

  const isType = typeMap[type] || 'is-info'
  const isSize = sizeMap[size] || ''
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  const buttonClasses = classNames({
    [className]: !!className,
    button: true,
    [isType]: true,
    [isSize]: true,
    'is-outlined': outlined,
    'is-inverted': inverted,
    'is-rounded': rounded,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
    'is-loading': loading,
<<<<<<< HEAD
    'is-static': props.static,
  });
=======
    'is-static': props.static
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    <button
      style={style}
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  static: PropTypes.bool,
<<<<<<< HEAD
  disabled: PropTypes.bool,
};
=======
  disabled: PropTypes.bool
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

Button.defaultProps = {
  className: '',
  style: {},
  label: '',
  type: 'info',
  size: 'normal',
  onClick: () => {},
  outlined: false,
  inverted: false,
  rounded: false,
  hovered: false,
  focused: false,
  active: false,
  loading: false,
  static: false,
<<<<<<< HEAD
  disabled: false,
};
=======
  disabled: false
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
