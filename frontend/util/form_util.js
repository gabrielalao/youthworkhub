import React from 'react';

export const validatePassword = (password, passCheck) => (
  passCheck.length > 5 && password === passCheck
);

export const errorsList = ({ errors }) => {
  return (
    <ul className="error-list">
      {errors.map((er) => <li key={er}>{er}</li>)}
    </ul>
  );
};

export const largeModalStyles = {
  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex            : 200
  },
  content : {
    height                     : 'auto',
    position                   : 'absolute',
    top                        : '10%',
    left                       : '10%',
    right                      : '10%',
    bottom                     : '10%',
    border                     : 'none',
    background                 : 'rgba(0,0,0,0)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};
export const smallModalStyles = {
  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex            : 200
  },
  content : {
    height                     : 'auto',
    position                   : 'absolute',
    top                        : '25%',
    left                       : '10%',
    right                      : '10%',
    bottom                     : 'auto',
    border                     : 'none',
    background                 : 'rgba(0,0,0,0)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};
