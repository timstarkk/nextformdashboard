import type { FC } from 'react';
import tw from 'twin.macro';

const StyledButton = tw.button`
bg-red-500
hover:bg-red-700
text-white
font-bold
py-2
px-4
border
border-black
rounded
`;

const StyledEmotionButton: FC = () => {
  return <StyledButton>This is my button component</StyledButton>;
};

export default StyledEmotionButton;
