import { Suspense } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { FullPageLoader } from '../../shared';

export const Root = () => {
    return (
        <Flex minH={'100vh'} minW={'100vw'} bg={useColorModeValue('gray.50', 'gray.800')} flexDir="column">
            <Suspense fallback={<FullPageLoader />}>
                <Outlet />
            </Suspense>
        </Flex>
    );
};
