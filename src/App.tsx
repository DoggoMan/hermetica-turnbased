import React, { FC, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const Settings = lazy(() => import('./components/Todo'))
const Games = lazy(() => import('./components/Todo'))

const App: FC = () => {
  console.log(`Loaded app`)
  // TODO: determine user from login data
  const user = { name: 'Bob' }

  return <div>This is a test. You have passed.</div>

  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <div>
                <h1>{`Hello ${user?.name || 'User'}!`}</h1>
                <ul>
                  <li>
                    <Link to="/games/create">Create Game</Link>
                  </li>
                  <li>
                    <Link to="/games">List Games</Link>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
                </ul>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
