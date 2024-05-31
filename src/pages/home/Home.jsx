import { useAuth } from "@clerk/clerk-react";
import TabSection from "../../components/TabSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  return <div>{isSignedIn ? <TabSection /> : navigate("/sign-in")}</div>;
};
export default Home;
