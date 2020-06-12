import PropTypes from 'prop-types';
import React from 'react';

import { FirebaseAuthContext, renderer } from '../core';

const IfFirebaseNotAuthed = React.memo(({ children }) => (
  <FirebaseAuthContext.Consumer>
    {state => {
      const { isSignedIn } = state;
      if (isSignedIn) return null;
      return renderer(children, state);
    }}
  </FirebaseAuthContext.Consumer>
));

IfFirebaseNotAuthed.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.elementType,
    PropTypes.func,
  ]).isRequired,
};

IfFirebaseNotAuthed.displayName = 'IfFirebaseNotAuthed';

export default IfFirebaseNotAuthed;
