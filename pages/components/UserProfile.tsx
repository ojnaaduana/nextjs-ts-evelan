import React, { ReactElement } from 'react';
import { UserProps } from '../api/users';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

const UserProfile = (user: UserProps): ReactElement => {
    const { id, email, first_name, last_name, avatar } = user;
    return (
        <Box
            marginTop={2}
            marginBottom={2}
            boxShadow='md'
            p='6'
            rounded='md'
            bg='white'
        >
            <Flex alignItems='center'>
                <Image
                    borderRadius='full'
                    boxSize='80px'
                    src={avatar}
                    alt={`${first_name} ${last_name}`}
                />
                <Box marginLeft={2}>
                    <Text fontSize='xs'>
                        ID: <strong>{id} </strong>
                    </Text>
                    <Text fontSize='xs'>
                        Fullname: <strong>{`${first_name} ${last_name}`}</strong>{' '}
                    </Text>
                    <Text fontSize='xs'>
                        Email: <strong> {email} </strong>
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default UserProfile;
