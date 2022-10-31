import { ConnectButton } from "@rainbow-me/rainbowkit"
import { getCsrfToken, signIn } from "next-auth/react"
import { SiweMessage } from "siwe"
import { useAccount, useNetwork, useSignMessage } from "wagmi"

export default function Siwe() {
  const { signMessageAsync } = useSignMessage()
  const { chain } = useNetwork()
  const { address } = useAccount()

  const handleLogin = async () => {
    try {
      const callbackUrl = "/protected"
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Please log in this siwe boilerplate",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      })
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })
      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      })
    } catch (error) {
      window.alert(error)
    }
  }

  return (
    <div>
      {address ? (
        // Once connected, then sign-in
        <button onClick={() => handleLogin()}>Sign-in</button>
      ) : (
        // If there is no address, connect to the account.
        <ConnectButton />
      )}
    </div>
  )
}
