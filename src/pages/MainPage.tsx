import styled from '@emotion/styled';

// import { Carousel } from 'react-bootstrap';
import { AboutUs } from '@/components/AboutUs';
import { Contact } from '@/components/Contact';
import { MainText } from '@/components/MainText';
import { OurService } from '@/components/OurService';
import { SuccessStory } from '@/components/SuccessStory';

export default function MainPage() {
  return (
    <MainWrapper>
      <Space />
      {/* <Carousel /> */}
      <MainText />
      <Space />
      <AboutUs />
      <OurService />
      <SuccessStory />
      <Contact />
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const Space = styled.div`
  height: 60px;
  max-width: 1440px;
`;
