import { SignUp } from "@clerk/clerk-react"

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp path="/sign-up" />
    </div>
  );
}