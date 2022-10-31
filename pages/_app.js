import { SessionProvider } from "next-auth/react"
import { WagmiConfig, createClient, configureChains, chain } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import "./styles.css"

import Layout from "../components/layout"

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: process.env.GOERLI_RPC_KEY })]
)

const { connectors } = getDefaultWallets({
  appName: "Siwe boilerplate",
  chains,
})

const wagmiClient = createClient({
  // autoConnect: true,
  provider,
  connectors,
})

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
