import { NavLink } from 'react-router-dom';
import { viewLinks } from '../../configs/links';
import { commonTranslation } from '../../resources/translations';
import { headerTranslation } from '../../resources/translations';

const navLinks = [
  { title: commonTranslation.todoList, path: viewLinks.todoList },
  { title: commonTranslation.addTask, path: viewLinks.todoAdd },
];

const Header = () => {
  return (
    <header className='header mb-5'>
      <h1 className='me-auto'>{headerTranslation.taskManagement}</h1>
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
