'use client'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'

const SignInBtn = ({ stylesBtn = '', stylesContainer=''}: { stylesBtn?: string , stylesContainer?: string}) => {
  const { data: session, status } = useSession()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  const handleSignIn = async () => {
    await signIn()
  }

  if (status === 'loading') {
    return <div>Loading....</div> // or return a loading spinner
  }

  return (
    <div className={`${stylesContainer}`}>
      {session ? (
        <Button onClick={handleSignOut} className={`${stylesBtn}`}>
          Sign Out
        </Button>
      ) : (
        <Button onClick={handleSignIn} className={`${stylesBtn}`}>
          Sign In
        </Button>
      )}
    </div>
  )
}

export default SignInBtn
