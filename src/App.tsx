import './styles/index.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {DashboardRootLazyPage} from "./pages/dashboard/lazy";
import {AuthRootLazyPage} from "./pages/auth/lazy";
import {Root} from "./pages/root";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
          {
              path: '/dashboard',
              element: <DashboardRootLazyPage/>
          },
          {
              path: '/auth',
              element: <AuthRootLazyPage />
          }
      ]
    },
])

const App = () => {
    return <RouterProvider router={router}/>
}

export default App;
