import { OtherDiaryCard } from "@components/OtherDiaryCard/OtherDiaryCard";
import * as S from "./OtherCollection.styles";
import { useState, useEffect } from "react";
import DownButton from "@assets/icons/ion_chevron-down.svg?react";
import BottomModal from "./BottomModal";

const OtherCollection = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsHeaderSticky(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <S.HeaderWrapper isSticky={isHeaderSticky}>
        <S.InnerWrapper>
          <S.MonthText>3월 일기</S.MonthText>
          <div onClick={handleModalToggle}>
            <DownButton />
          </div>
          <BottomModal isOpen={isModalOpen} onClose={handleModalToggle} />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.ChooseText>최신순 | </S.ChooseText>
          <S.ChooseText>인기순</S.ChooseText>
        </S.InnerWrapper>
      </S.HeaderWrapper>
      <S.CollectionWrapper>
        <OtherDiaryCard
          title="즐거운 산책"
          userName="해봄이"
          likeNumber={24}
          photoUrl="https://i.namu.wiki/i/OiIp--wKjKDDsrLs70IZ4klY273o52P-Heye0p7U1dpG1olGOdy04EBazHvEt7LJNPM0fvNfKjWzAZz1YJHxjq8sVGJ74qnozC80UywP-Z3UXYyDh6whpN_vOBQwCy2u4LmopyxbacyTXN6f6J0PaQ.webp"
        />
        <OtherDiaryCard
          title="이탈리아 여행"
          userName="미르미"
          likeNumber={20}
          photoUrl="../src/assets/icons/diaryImageTest1.jpg"
        />
        <OtherDiaryCard
          title="쿠키와의 산책"
          userName="김구름"
          likeNumber={13}
          photoUrl="https://cdn.imweb.me/thumbnail/20221027/1ea95c9ccc1c0.jpg"
        />
        <OtherDiaryCard
          title="카페에서 열공"
          userName="카공족"
          likeNumber={7}
          photoUrl="https://lh3.googleusercontent.com/proxy/REI0aZFETu1l9pQ3PMVuQ-_oqZ-RGZUUeyj0pEI0GLPOoF5geJziMwe3daKzncbZhlyMegTC8rJs5-CjfWp88tpF1ybQW8ZbIudDFBn5ge0o0CyNH3KKdpDwNugBFpk6ApTC7qV8GM1UXmbxLlmNy0rBSRfb_QS0xVerx1Bi-huVWxPDio6N2_vYyXyQZKVqc61VtZ9n2H1CuneIHv5r7RV5oTLPhJS9aghPcxbGmcpRaouN0rcKuSvFhGV7gTRzMiKgcF1vaR9nfXcqRL8"
        />
      </S.CollectionWrapper>
    </>
  );
};

export default OtherCollection;
