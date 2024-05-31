import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Theme from "./Theme";
import { Text } from "@chakra-ui/react";

const Navber = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
      <nav className="flex items-center justify-between py-2">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
          <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'fontSize="2xl"
  fontWeight="bold" >Inventory</Text>
        </div>
        <div className="flex items-center justify-between gap-5">
        <div className="flex justify-end items-center ">
        <Theme />
      </div>
        <div className="">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <Link to="/sign-in">Sign In</Link>
        </SignedOut>
      </div>
        </div>
      </nav>
    </div>
  );
};
export default Navber;
