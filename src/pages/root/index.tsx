import { Suspense } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { use100vh } from 'react-div-100vh';
import { Outlet } from 'react-router-dom';
import { FullPageLoader } from '../../shared';

export const Root = () => {
    const height = use100vh();
    return (
        <Flex h={height} bg={useColorModeValue('gray.50', 'gray.800')} flexDir="column">
            <Suspense fallback={<FullPageLoader />}>
                <Outlet />
            </Suspense>
        </Flex>
    );
};
