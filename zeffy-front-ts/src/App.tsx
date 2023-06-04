import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css'

import { HomeScreen } from './routes/HomeScreen';
import { DonationsScreen } from './routes/DonationsScreen';
import { DonationsInfiniteScreen } from './routes/DonationsInfiniteScreen';

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
