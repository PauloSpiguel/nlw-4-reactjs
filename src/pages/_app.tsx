import React, { useContext } from "react"
import { AppProps } from "next/app"

import AppProvider from "../contexts"

import GlobalStyle from "../styles/globalStyles"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  )
}

export default MyApp
