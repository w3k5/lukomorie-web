import { Suspense } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const Root = () => {
    return (
        <Flex minH={'100vh'} minW={'100vw'} bg={useColorModeValue('gray.50', 'gray.800')} flexDir="column">
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Flex>
    );
};
