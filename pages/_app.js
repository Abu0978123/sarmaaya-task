import '@/styles/globals.css'
import Foot from './foot'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/components/Header'
 

export default function App({ Component, pageProps }) {
  return <>
          <Header/>
          <Component {...pageProps} />
          {/* <Foot/> */}
         </>
}  
