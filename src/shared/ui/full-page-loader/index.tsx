import { Spinner, Flex } from '@chakra-ui/react';

export const FullPageLoader = () => {
    return (
        <Flex flexDir="column" w="100%" h="100%" flex={1} justify="center" align="center">
            <Spinner />
        </Flex>
    );
};
