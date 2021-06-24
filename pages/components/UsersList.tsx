import React, { ReactElement } from 'react';
import { fetchUsers, UserProps } from '../api/users';
import { useInfiniteQuery } from 'react-query';
import UserProfile from './UserProfile';
import {
    Container,
    Button,
    Center,
    Alert,
    Stack,
    AlertIcon,
    Box,
} from '@chakra-ui/react';

export const UserLists = ({
    pageLimit,
}: {
    pageLimit: number;
}): ReactElement => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(
        'infiniteUsers',
        ({ pageParam }) => fetchUsers({ page: pageParam, perPage: pageLimit }),
        {
            getNextPageParam: (lastPage) => {
                const nextPage = lastPage.page + 1;
                if (nextPage > lastPage.total_pages) {
                    return undefined;
                }
                return nextPage;
            },
        }
    );

    let userList;
    if (data) {
        userList = data.pages.map((page, index) => (
            <React.Fragment key={index}>
                {page.data.map((user: UserProps, i: number) => (
                    <UserProfile {...user} key={i} />
                ))}
            </React.Fragment>
        ));
    }

    return (
        <Container width='400px' margin='5'>
            <Stack>
                {error && (
                    <Alert status='error'>
                        <AlertIcon /> An error occurred: {error.message}
                    </Alert>
                )}
                {isFetchingNextPage && (
                    <Alert status='info'>
                        <AlertIcon /> A Fetching Next Page...
                    </Alert>
                )}
            </Stack>
            {status === 'success' && userList}
            <Box marginTop='5'>
                <Center>
                    <Button
                        colorScheme='teal'
                        size='sm'
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                    >
                        Load More...
                    </Button>
                </Center>
            </Box>
        </Container>
    );
};

export default UserLists;
