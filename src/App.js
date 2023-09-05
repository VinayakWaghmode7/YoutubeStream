import './App.css';
import Head from './Compoents/Head';
import Body from './Compoents/Body';
import { Provider } from 'react-redux';
import store from './Compoents/Utils/Store';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import MainContainer from './Compoents/MainContainer';
import WatchPage  from './Compoents/WatchPage';
import Sidebar from './Compoents/Sidebar';

function App() {

  const appRouter = createBrowserRouter([{

      path: '/',
      element:<Body/>,
      children: [
        {
          path: '/',
          element:<MainContainer/>,
        },
        
        {
          path: '/watch',
          element:<WatchPage/>,
        },
      ],
  },
  ])

  return (
    <Provider store={store}>
    <>
      <Head/>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </>
    </Provider>
  );
}

export default App;
