import { Link } from 'react-router-dom';
import useAuth from '../../hooks';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import Avatar from './Avatar';

const Navbar = () => {
  const [user] = useAuth();
  const sayHello = async () => {
    try {
      const message = await fetch('/api/v1/sayhello');
      console.log(message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-main-color h-20 flex items-center">
      <nav className="container flex justify-between items-center">
        <Link
          to={`${Object.values(user).some((e) => e === null) ? '/' : '/home'}`}
          className="text-[white] text-xl font-medium"
        >
          Upost
        </Link>
        <div>
          {Object.values(user).some((e) => e !== null) ? (
            <button className="border border-[white] py-2 px-5">
              <Link to={'/login'} className="text-[white] flex items-center gap-2">
                <FaArrowRightToBracket />
                Login
              </Link>
            </button>
          ) : (
            <div>
              <div>
                <Avatar bgColor="white" onClick={sayHello} />
                {/* <div>
                  <ul>
                    <li>
                      <Link to={`/u/${user.username}`}>Profile</Link>
                    </li>
                    <li onClick={sayHello}>Logout</li>
                  </ul>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
