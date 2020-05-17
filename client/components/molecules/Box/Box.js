<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Box({ children, className }) {
  const boxClasses = classNames({
    [className]: !!className,
    box: true,
  });

  return (
    <div className={boxClasses}>
      {children}
    </div>
  );
}

Box.defaultProps = {
  className: '',
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
};
=======
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Box({children, className}) {
  const boxClasses = classNames({
    [className]: !!className,
    box: true
  })

  return <div className={boxClasses}>{children}</div>
}

Box.defaultProps = {
  className: ''
}

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  className: PropTypes.string
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
