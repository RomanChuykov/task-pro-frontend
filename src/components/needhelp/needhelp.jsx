import React from 'react';
// import sprite from '../../images/icons.svg';
import { HelpContainer, HelpImage, HelpButton, HelpText, ButtonText, IconContainer, TaskProLink} from './needhelp.styled';
import flowerImage from './../../images/flower.png';
import { CiCircleQuestion } from "react-icons/ci";

export const NeedHelp = ({ openModal }) => {
  return (
    <HelpContainer>
      <HelpImage src={flowerImage} alt="flower" />
      <HelpText>
        If you need help with <TaskProLink href="#">TaskPro</TaskProLink>, check out our support resources or reach out to our customer support team.
      </HelpText>
      <HelpButton onClick={openModal}>
      <IconContainer>
          <CiCircleQuestion/>
        </IconContainer>
      </HelpButton>
     
      <ButtonText onClick={openModal}>Need help?</ButtonText>
    </HelpContainer>
  );
}; 
// icon-help-circle

/**
 begin
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  ********************************************
  return
    <div>
      <NeedHelp openModal={openModal} />
      {isModalOpen && <NeedHelpModal onClose={closeModal} />}
    </div>
 */