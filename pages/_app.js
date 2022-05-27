import { SWRConfig } from 'swr'
import SWRConfigObj from '../utils/SWRConfigObj'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
    // return <Component {...pageProps} />

    return (
        <SWRConfig value={SWRConfigObj}>
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp
