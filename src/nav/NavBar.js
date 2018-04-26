/** @jsx h */
import { h } from 'preact'
import { Link } from 'preact-router/match'

export default () => (
  <nav>
    <Link activeClassName='active' href='/'>Status</Link>
    <Link activeClassName='active' href='/files'>Files</Link>
    <Link activeClassName='active' href='/ipld'>IPLD</Link>
    <Link activeClassName='active' href='/peers'>Peers</Link>
    <Link activeClassName='active' href='/settings'>Settings</Link>
  </nav>
)
