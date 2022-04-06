import Head from 'next/head'
import clientPromise from '../../lib/mongodb'
import Cabeca from '../Arranjos/Cabeca'
import Conteudo from '../Arranjos/Conteudo'
import Rodape from '../Arranjos/Rodape'
import styles from '../styles/layout.module.css'



export default function Home({ isConnected }) {
  return (
    // <ChakraProvider>
        <main className={styles.corpo} >
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Cabeca />
      <Conteudo/>

      {/* <main> */}

        {/* <div className='flex1' align='center' justify='center'> */}

      
            <Rodape/>
          </main>

     

    // </ChakraProvider>

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



