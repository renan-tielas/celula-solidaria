import Head from 'next/head'
import clientPromise from '../../lib/mongodb'
import Cabeca from '../components/Cabeca'
import {Box, Flex} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/provider'
import styled from 'styled-components'
import {Link} from 'styled-components';

const Button = styled.a`
  // display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: blue;
  color: white;
  padding: 8px 14px;
  border: 2px solid grey;
  
`

export default function Home({ isConnected }) {
  return (
  <ChakraProvider>
    <div>
       {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Cabeca/>
      <Button as={Link} href="/docs">
      Documentation
    </Button>
    <Box >
     <Flex align='center' justify='center'>
<Box width={800}
borderWidth={1}
borderRadius={8}
boxShadow='lg'
p={20}
mt='25'></Box>
     </Flex>
     
    

      


  

    </Box>
    </div>
    </ChakraProvider>

  )
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
