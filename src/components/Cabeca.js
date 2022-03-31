import React from "react";
import { Heading, Flex } from '@chakra-ui/react'


const Cabeca = () => {
    return (
        <Flex as="nav" justify="space-between" align="center" wrap='wrap' bg='teal.500' color='white'>
            <Flex align="center" mr={5}>
                
            <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                Cadastro de Clientes
            </Heading>


            </Flex>
</Flex>
    )

}

export default Cabeca