import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ImageLayout = css`
  width: 100%;
  height: 230px;
  flex-shrink: 0;

  border-radius: 16px;
`;

const WrapperLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: calc(100% - 138px);

  overflow-y: scroll;
`;

export const TabBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 14px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const TabButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`;

export const MiddleTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnderLine = styled.div`
  height: 2px;
  align-self: stretch;

  background: var(--Color-Styles-black-000, #151515);
`;

export const BoldText = styled.p`
  color: var(--Color-Styles-black-000, #151515);
  text-align: center;

  ${({ theme }) => theme.text.body1_bold};
`;

export const NormalText = styled.p`
  color: ${({ theme }) => theme.colors.gray[300]};
  text-align: center;

  ${({ theme }) => theme.text.body1_bold};
`;

export const TogetherWrapper = styled.div`
  ${WrapperLayout}

  padding: 16px 0 0 16px;

  overflow-x: hidden;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 105%;

  margin-left: 5%;
  margin-bottom: 16px;
`;

export const CategoryTitle = styled.p`
  color: #000 ${({ theme }) => theme.text.body3_bold};
`;

export const CategoryImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8px;
`;

export const CategoryImage = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;

  border-radius: 8px;

  object-fit: cover;
`;

export const InOrderWrapper = styled.div`
  ${WrapperLayout}

  padding: 23.5px 16px 0 16px;
  gap: 12px;
`;

export const ThumbnailWrapper = styled.div`
  ${ImageLayout}

  position: relative;
`;

export const ThumbnailImage = styled.img`
  ${ImageLayout}

  object-fit: cover;
`;

export const ThumbnailCover = styled.div`
  ${ImageLayout}

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(21, 21, 21, 0.5);

  padding: 20px 28px 0 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const ThumbnailTitle = styled.p`
  color: #fff;

  ${({ theme }) => theme.text.heading1};
`;

export const ThumbnailDate = styled.p`
  color: #fff;

  ${({ theme }) => theme.text.body2_bold};
`;
