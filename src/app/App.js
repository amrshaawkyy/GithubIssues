import React from 'react';
import GithubIssues from '../containers/GithubIssues/GithubIssues'
import Layout from '../hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Main from '../components/Main/Main';
function App() {
  return (
    <>
      <div className="App">
        <Layout>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path='/Issues/' exact component={GithubIssues} />
          </Switch>
        </Layout>
      </div>
    </>
  );
}

export default App;
