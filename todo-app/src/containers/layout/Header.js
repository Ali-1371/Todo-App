import { NavLink } from 'react-router-dom';
import { viewLinks } from '../../configs/links';

const navLinks = [
  { title: 'Todo list', path: viewLinks.todoList },
  { title: 'Add a task', path: viewLinks.todoAdd },
];

const Header = () => {
  return (
    <header className='header mb-5'>
      <h1 className='me-auto'>Task management</h1>
      <nav className='header_nav'>
        <ul className='d-flex m-0 p-0'>
          {navLinks.map((navLink) => (
            <li key={navLink.path}>
              <NavLink to={navLink.path} exact activeClassName='active'>
                {navLink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
