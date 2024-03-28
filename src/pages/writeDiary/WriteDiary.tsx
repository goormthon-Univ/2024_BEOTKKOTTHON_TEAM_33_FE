import { useEffect, useRef, useState } from "react";
import * as S from "./WriteDiary.styles";
import { BotChatBubble } from "@components/ChatBubble/ChatBubble";
import BaseBottomSheetContent from "@components/BaseBottomSheetContent/BaseBottomSheetContent";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import ImagePagination from "@components/ImagePagination/ImagePagination";
import RecordBottomSheetContent from "@components/RecordBottomSheetContent/RecordBottomSheetContent";
import EmotionChoice from "@components/EmotionChoice/EmotionChoice";
import * as T from "./WriteDiary.types";
import { photoURLState } from "@stores/photoURLStore";
import { useRecoilState } from "recoil";

const WriteDiary = () => {
  const [images] = useRecoilState(photoURLState);

  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const chatListRef = useRef<HTMLDivElement>(null);
  const [isPressed, setIsPressed] = useState(false);
  // const [isEmotionVisible, setIsEmotionVisible] = useState(true); //나중에 false로 바꾸고 필요할때 set으로 쓰면됨

  // 터치 이벤트 핸들러
  const handleTouchStart = () => {
    setIsPressed(true); // 버튼이 터치되었음을 설정
  };

  const handleTouchEnd = () => {
    setIsPressed(false); // 버튼이 터치 해제됨을 설정
  };

  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  }, [isRecording]);
  const handleStartRecord = () => {
    setIsRecording(true);
    console.log(isRecording);
  };
  return (
    <>
      <S.ChatWrapper ref={chatListRef} isRecording={isRecording}>
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <BotChatBubble text={"이야기를 남기고 싶은\n사진을 선택해 주세요."} num={2} />
        <BottomSheet isVisible={isVisible} setIsVisible={setIsVisible}>
          <BaseBottomSheetContent />
        </BottomSheet>
        {images ? (
          <>
            <BotChatBubble text="이 사진에 어떤 추억이 있는지 알려주세요~!"></BotChatBubble>
            <BotChatBubble text={T.recommend} num={2}></BotChatBubble>
            <S.PaginationWrapper>
              <ImagePagination images={images as string[]} isLogin={false} />
              <S.TalkStartButton
                onClick={handleStartRecord}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                isPressed={isPressed}
              >
                추억 얘기하기
              </S.TalkStartButton>
            </S.PaginationWrapper>
          </>
        ) : null}
        <EmotionChoice />
      </S.ChatWrapper>
      {isRecording && <div style={{ height: "500px" }}></div>}
      <BottomSheet isVisible={isRecording} setIsVisible={setIsRecording}>
        <RecordBottomSheetContent setIsVisible={setIsRecording} />
      </BottomSheet>
    </>
  );
};

export default WriteDiary;
