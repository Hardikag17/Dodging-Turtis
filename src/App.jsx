import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/styles/App.css';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';
import Store from './pages/Store';
import Personal from './pages/Personal';
import NftDetails from './pages/NftDetails';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/play' component={Main} />
          <Route path='/Store' component={Store} />
          <Route path='/game' component={Game} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/store' component={Store} />
          <Route path='/personal' component={Personal} />
          <Route path='/details/:id' component={NftDetails} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
