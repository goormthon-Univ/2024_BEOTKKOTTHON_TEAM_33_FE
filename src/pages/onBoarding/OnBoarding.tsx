import { OnBoradingWrapper } from "./OnBoarding.styles";
import FlowerIcon from "@assets/icons/OnBoardLogo.svg?react";
import WhiteLogo from "@assets/icons/온보딩기억해봄.svg?react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const OnBoarding = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("isFirstVisit", "false");
      navigate("/");
    }, 3000);
  }, []);
  return (
    <>
      <OnBoradingWrapper>
        <FlowerIcon />
        <WhiteLogo />
      </OnBoradingWrapper>
    </>
  );
};

export default OnBoarding;
