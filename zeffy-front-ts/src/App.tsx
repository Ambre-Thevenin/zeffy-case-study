import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import { DonationsInfiniteScreen } from './routes/DonationsInfiniteScreen';
import { DonationsScreen } from './routes/DonationsScreen';
import { HomeScreen } from './routes/HomeScreen';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeScreen />,
    },
    { 
      path: '/donations',
      element: <DonationsScreen />,
    },
    { 
      path: '/donations-infinite',
      element: <DonationsInfiniteScreen />,
    },
  ]);

  
  return <RouterProvider router={router} />
}

export default App;
