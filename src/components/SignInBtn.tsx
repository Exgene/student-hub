'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { signIn, signOut, useSession } from 'next-auth/react'

const SignInBtn = ({
  stylesBtn = '',
  stylesContainer = '',
}: {
  stylesBtn?: string
  stylesContainer?: string
}) => {
  const { data: session, status } = useSession()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  const handleSignIn = async () => {
    await signIn('google')
  }

  if (status === 'loading') {
    return (
      <div className={`${stylesContainer}`}>
        <Button disabled className={`${stylesBtn} text-black border`}>
          Loading..
        </Button>
      </div>
    ) // or return a loading spinner
  }

  return (
    <div className={`${stylesContainer}`}>
      {session ? (
        <Button
          onClick={handleSignOut}
          className={`${stylesBtn} border`}
        >
          Sign Out
        </Button>
      ) : (
        <Button
          onClick={handleSignIn}
          className={`${stylesBtn} border`}
          variant={'default'}
        >
          Sign In
        </Button>
      )}
    </div>
  )
}

export default SignInBtn
