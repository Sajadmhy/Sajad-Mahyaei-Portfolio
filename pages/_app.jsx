import '../styles/globals.css'
import Theme from '../theme/Theme';

function MyApp({ Component, pageProps }) {
  return (
   <Theme>
    <Component {...pageProps} />
   </Theme> 
  ) 
}

export default MyApp
