// import React from 'react';

import { withSession } from './withSession';

export interface Props {
  Allowed: JSX.Element
  NotAllowed: JSX.Element
}

export function IsAuthenticated(props: Props) {
  return withSession(props.Allowed, props.NotAllowed);
}
