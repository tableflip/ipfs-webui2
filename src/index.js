/** @jsx h */
import 'babel-polyfill'
import { render, h } from 'preact'
import Router from 'preact-router'
import createHashHistory from 'history/createHashHistory'
import NavBar from './navigation/NavBar'
import StatusPage from './status/StatusPage'
import FilesPage from './files/FilesPage'
import IpldPage from './ipld/IpldPage'
import PeersPage from './peers/PeersPage'
import SettingsPage from './settings/SettingsPage'

const App = () => (
  <div className='sans-serif flex'>
    <div className='w-25'>
      <NavBar />
    </div>
    <div className='flex-auto'>
      <Router history={createHashHistory()}>
        <StatusPage path='/' />
        <FilesPage path='/files' />
        <IpldPage path='/ipld' />
        <PeersPage path='/peers' />
        <SettingsPage path='/settings' />
      </Router>
    </div>
  </div>
)

const root = document.getElementById('root')
render(<App />, root, root.firstChild)
