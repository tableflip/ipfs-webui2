/** @jsx h */
import { h } from 'preact'
import { Link } from 'preact-router/match'

export default () => (
  <nav>
    <Link className='db pa1' activeClassName='active' href='/'>Status</Link>
    <Link className='db pa1' activeClassName='active' href='/files'>Files</Link>
    <Link className='db pa1' activeClassName='active' href='/ipld'>IPLD</Link>
    <Link className='db pa1' activeClassName='active' href='/peers'>Peers</Link>
    <Link className='db pa1' activeClassName='active' href='/settings'>Settings</Link>
  </nav>
)
