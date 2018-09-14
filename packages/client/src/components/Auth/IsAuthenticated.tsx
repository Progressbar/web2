import React from 'react';

import { withPermissions } from './withPermissions';

export function IsAuthenticated(props) {
  return withPermissions([{ scope: 'authenticated' }], props.Allowed, props.NotAllowed);
}
