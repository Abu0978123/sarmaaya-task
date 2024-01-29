import '@/styles/globals.css'
import '@/styles/font.css'
import Header from '@/components/Header'
import { Provider } from "react-redux";
import store from "@/store/store";
 

export default function App({ Component, pageProps }) {
  return <>
          <Provider store={store}>
          <Header/>
          <Component {...pageProps} />
          {/* <Foot/> */}
          </Provider>
         </>
}  
