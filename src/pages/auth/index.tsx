import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';

const AuthRootPage = () => {
    return (
        <Flex align={'center'} justify={'center'} flexDir="column" flex={1}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Войдите в ваш аккаунт</Heading>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Логин</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Пароль</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Link color={'blue.400'}>Забыли пароль?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                            >
                                Войти
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default AuthRootPage;
