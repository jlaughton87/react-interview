import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class Summary extends React.Component {
  render() {
    return (
      <p className={cx('is-family-monospace	')}>
          {
            /* TODO: Show the summary of the Article by cutting it at the maxLength. We recommend to use the Truncate Function from lodash*/
            'Article summary'
          }
      </p>
    );
  }
}

Summary.propTypes = {
  text: PropTypes.string,
  maxLength: PropTypes.number
};

export default Summary