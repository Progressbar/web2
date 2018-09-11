import React from 'react';

import { withPermissions } from './withPermissions';

export function isAuthenticated(props) {
  return withPermissions([{ scope: 'authenticated' }], props.Allowed, props.NotAllowed);
}
