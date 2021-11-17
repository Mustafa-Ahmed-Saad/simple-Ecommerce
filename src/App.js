import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './pages/home-page';
import ProuductPage from './pages/Product-page';
import CartPage from './pages/cart-page';
import LoginPage from './pages/login-page';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import Error404 from './pages/erroe404';
import UserProfilePage from './pages/user-profile-page';
import UserProfileUpdatePage from './pages/user-profile-update-page';

const App = () => {
  const { loginInfo } = useSelector(({ user }) => user);
  const { email } = loginInfo;

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products/:id" component={ProuductPage} />
        <Route exact path="/cart" component={CartPage} />
        {/* redirect solution 1 */}
        <Route exact path="/login" render={() => (email ? <Redirect to="/" /> : <LoginPage />)} />
        {/* redirect solution 2 */}
        {/* {email ? <Redirect to="/" /> : <Route path="/login" component={LoginPage} />} */}
        <Route exact path="/user/profile" render={() => (!email ? <Redirect to="/" /> : <UserProfilePage />)} />
        <Route
          exact
          path="/user/profile/update"
          render={() => (!email ? <Redirect to="/" /> : <UserProfileUpdatePage loginInfo={loginInfo} />)}
        />
        <Route component={Error404} />
      </Switch>
    </div>
  );
};

export default App;
