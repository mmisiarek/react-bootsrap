import React from 'react';
import style from './style.scss';
import jarImg from '../../../assets/img/jar.png';

const About = () => (
  <div className={style.root}>
    <p>Whisky in the</p>
    <img src={jarImg} alt="Jar" />
  </div>
);

export default About;
