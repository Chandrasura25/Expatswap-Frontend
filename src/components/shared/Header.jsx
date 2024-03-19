import { Link, useLocation } from 'react-router-dom';
function Header() {
  const location = useLocation();
  return (
    <nav className="topbar">
      <Link to="/" className="flex items-center gap-4">
        <p className="text-heading1-semibold text-light-1 max-md:text-[14px]">
          Test 
        </p>
      </Link>

      <div className="flex items-center">
        <div className="block">
          <div className="flex cursor-pointer gap-3 text-light-1">
          <p className={location.pathname === '/' ? 'text-primary-500' : ''}>  <Link to="/">Create User</Link></p>
          <p className={location.pathname === '/users' ? 'text-primary-500' : ''}><Link to="/users">View Users</Link></p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header