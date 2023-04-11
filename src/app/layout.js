import Navegacion from './components/Navegacion'
import '../styles/globals.css'
import { MyContextProvider } from './context/MyContext'



export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>PokeAlbum</title>
      </head>
      <body>
        <MyContextProvider>
          <Navegacion />
          {children}
        </MyContextProvider>



      </body>
    </html>
  )
};