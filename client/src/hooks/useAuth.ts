import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: Number | null;
  fullName: String | null;
  email: String | null;
  username: String | null;
}

const useAuth = () => {
  const [user, setUser] = useState<User>({
    id: null,
    fullName: null,
    email: null,
    username: null,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decode = jwtDecode<User>(token);
        if (decode) {
          setUser({ ...decode });
        }
      } catch (err) {
        console.log('Invalid Token:', err);
      }
    }
    setLoading(false);
  }, []);
  return [user, loading] as const;
};

export default useAuth;
