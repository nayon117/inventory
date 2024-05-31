import { SignIn } from "@clerk/clerk-react"

export default function SignInPage() {
  return (
  <div className="flex h-screen items-center justify-center">
    <SignIn  path="/sign-in" />;
  </div>
  )
}