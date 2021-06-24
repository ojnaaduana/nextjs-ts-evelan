import React from 'react';
import UsersList from './components/UsersList';
import { Container, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW='xl' centerContent>
      <Text fontSize='3xl' marginTop='2.5'>
        Users
      </Text>
      <UsersList pageLimit={2} />
    </Container>
  );
}
