import { Container } from 'unstated';
export default class UserStore extends Container {
  state = {
    id: null,
    name: null,
  };
  isAuthenticated = () => {
    return false;
  };
}
