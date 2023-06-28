import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/img/Profile2.png"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Halo! Namaku <strong> Ovelius Herdiansyah Prasetyo</strong>.Saya berasal dari kota Sidoarjo yang sekarang menetap tinggal di Pasuruan. Saya remaja berusia 16 tahun. Saya tertarik dan mencoba hal baru sekaligus mendalami hal tersebut. Saya juga memiliki sifat periang, rajin dan suka belajar hal baru.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
              Perjalanan masuk kedalam dunia teknologi dimulai dari ketertarikan terhadap Smartphone dan rasa ingin tahu yang tinggi terhadap seberapa besar pengaruh teknologi modern, yang kemudian mengarah kepada program teknologi sistem komputer. 
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Bekerja secara kolaboratif dalam tim menuju tujuan bersama telah menjadi pengalaman yang sangat berharga dan unik bagi saya. Saya ingin terus mengeksplorasi proyek menarik di masa mendatang, dengan minat khusus pada pengembangan web dan pengembangan Game.
              <div className="tagline2">
              Saya menjadi percaya diri menggunakan teknologi berikut:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
