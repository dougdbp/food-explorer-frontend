import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function createPurchases() {
    await api.post('purchases');
    const purchases = await api.get('/purchases');
    localStorage.setItem(
      '@foodexplorer:purchases',
      JSON.stringify(purchases.data)
    );

   setData((prevState) => ({
     ...prevState,
     purchases: JSON.parse(localStorage.getItem('@foodexplorer:purchases')),
   }));
    await updateRequests();
  }

  async function updateStatusPurchase({ purchase_id, status }) {
    await api.patch(`purchases/${purchase_id}`, { status });

    const purchases = await api.get('/purchases');
    localStorage.setItem(
      '@foodexplorer:purchases',
      JSON.stringify(purchases.data)
    );

    setData((prevState) => ({
      ...prevState,
      purchases: JSON.parse(localStorage.getItem('@foodexplorer:purchases')),
    }));
  }

  async function createRequests({ quantity, dish_id }) {
    await api.post('/requests', { quantity, dish_id });

    await updateRequests();
  }

  async function updateRequests() {
    const requests = await api.get('/requests');

    localStorage.setItem(
      '@foodexplorer:requests',
      JSON.stringify(requests.data)
    );

    setData((prevState) => ({
      ...prevState,
      requests: JSON.parse(localStorage.getItem('@foodexplorer:requests')),
    }));
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      user.isAdmin = user.isAdmin === 1;

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const requests = await api.get('/requests');
      localStorage.setItem(
        '@foodexplorer:requests',
        JSON.stringify(requests.data)
      );

      const purchases = await api.get('/purchases');
      localStorage.setItem(
        '@foodexplorer:purchases',
        JSON.stringify(purchases.data)
      );

      setData({
        user,
        token,
        requests: JSON.parse(localStorage.getItem('@foodexplorer:requests')),
        purchases: JSON.parse(localStorage.getItem('@foodexplorer:purchases')),
      });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Não foi possível entrar');
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user');
    localStorage.removeItem('@foodexplorer:token');

    setData({});
  }

  useEffect(() => {
    async function update() {
      const user = localStorage.getItem('@foodexplorer:user');
      const token = localStorage.getItem('@foodexplorer:token');

      if (user && token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
          const response = await api.get('/requests');
          localStorage.setItem(
            '@foodexplorer:requests',
            JSON.stringify(response.data)
          );

          const purchases = await api.get('/purchases');
          localStorage.setItem(
            '@foodexplorer:purchases',
            JSON.stringify(purchases.data)
          );
        } catch (error) {
          return;
        }
        setData({
          user: JSON.parse(user),
          token,
          requests: JSON.parse(localStorage.getItem('@foodexplorer:requests')),
          purchases: JSON.parse(
            localStorage.getItem('@foodexplorer:purchases')
          ),
        });
      }
    }

    update();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        userRequests: data.requests,
        userPurchases: data.purchases,
        createRequests,
        updateRequests,
        createPurchases,
        updateStatusPurchase,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
