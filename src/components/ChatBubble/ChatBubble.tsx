import * as S from "./ChatBubble.styles";
import ChatIcon from "@assets/icons/chaticon.svg?react";
import { BubbleText } from "./ChatBubble.types";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import ChatLoad from "@assets/lotties/chatLoading.json";

export const UserChatBubble = ({ text }: BubbleText) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ChatLoad,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트가 unmount될 때 타이머정리
  }, []);

  return (
    <>
      {isLoading === true ? (
        <S.UserMessageWrapper>
          <Lottie options={defaultOptions} />
        </S.UserMessageWrapper>
      ) : (
        <S.UserMessageWrapper>{text}</S.UserMessageWrapper>
      )}
    </>
  );
};

export const BotChatBubble = ({ text }: BubbleText) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ChatLoad,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트가 unmount될 때 타이머정리
  }, []);
  return (
    <>
      <S.BotOuterWrapper>
        <ChatIcon />
        {isLoading === true ? (
          <S.BotMessageWrapper>
            <Lottie options={defaultOptions} />
          </S.BotMessageWrapper>
        ) : (
          <S.BotMessageWrapper>{text}</S.BotMessageWrapper>
        )}
      </S.BotOuterWrapper>
    </>
  );
};
