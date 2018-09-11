export type TUserRole = 'ADMIN' | 'HOST' | 'MEMBER';

export type TUser = {
  name: string,
  role: TUserRole
};
