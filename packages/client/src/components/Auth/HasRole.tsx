import React from 'react';

import { withRole } from './withRole';
import { TUserRole } from '../../../../common/types/User';

export interface Props {
  roles: TUserRole[]
  Allowed: JSX.Element
  NotAllowed: JSX.Element
}

export function HasRole(props: Props) {
  return withRole(props.roles, props.Allowed, props.NotAllowed);
}
