import React, { Fragment } from 'react';

const Output = (input) => {
  return (
    <Fragment>
      This is your weatherbox template code:
      {input.values}
    </Fragment>
  )
};

export default Output;
