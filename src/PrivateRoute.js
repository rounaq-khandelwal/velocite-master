import { Route, nav } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function PrivateRoute({ component: Component, ...rest }) {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}


export default PrivateRoute;