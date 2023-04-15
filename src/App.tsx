import './styles/index.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthRootLazyPage } from './pages/auth/lazy';
import { DashboardRootLazyPage } from './pages/dashboard/lazy';
import { MainLazyPage } from './pages/main/lazy';
import { Root } from './pages/root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <MainLazyPage />,
            },
            {
                path: '/dashboard',
                element: <DashboardRootLazyPage />,
            },
            {
                path: '/auth',
                element: <AuthRootLazyPage />,
            },
        ],
    },
]);

const App = () => {
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
};

export default App;
