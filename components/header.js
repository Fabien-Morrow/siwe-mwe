import { signOut, useSession } from "next-auth/react"
import styles from "./header.module.css"
import Menu from "./menu"
import Siwe from "./siwe"

function SignIn() {
  return (
    <div className={styles.statusContent}>
      <div>You are not signed in. Connect your wallet then sign-in.</div>
      <div className={styles.button}>
        <Siwe />
      </div>
    </div>
  )
}

function Status({ session }) {
  return (
    <div className={styles.statusContent}>
      {session.user.image && (
        <div
          style={{ backgroundImage: `url('${session.user.image}')` }}
          className={styles.avatar}
        />
      )}
      <div>
        <div>
          <small>Signed in as</small>
        </div>
        <div>
          <strong>{session.user.email ?? session.user.name}</strong>
        </div>
      </div>
      <div className={styles.button}>
        <button onClick={() => signOut()}>Sign-out</button>
      </div>
    </div>
  )
}

export default function Header() {
  const { data: session } = useSession()

  console.log("session", session)

  return (
    <header>
      <div className={styles.signedInStatus}>
        {!session && <SignIn />}
        {session?.user && <Status session={session} />}
      </div>
      <Menu />
    </header>
  )
}
