import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hai, Aku Ovelius.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Seorang Frontend Developer.',
                    1000,
                    'Seorang Game Designer',
                    1000,
                    'Emm... Orang Keren Mungkin?',
                    1000,
                    "Ok...",
                    1000,
                    "Ok...  Aku Kehabisan Ide...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... Sekarang kamu bisa scrol kebawah untuk melihat projectku...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Projectku sangat menarik, Lihatlah mereka sekarang!!",
                    1000,
                    "apakah kamu...",
                    1000,
                    "apakah... kamu masih disini??",
                    1000,
                    "Ok, ini terasa menyenangkan, aku akan restart loop ini sekarang...",
                    1000,
                    "Terimakasih! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/img/Profile2.png"
                alt="Ovelius"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
