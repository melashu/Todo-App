import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import style from '../css/About.module.css';
import SideBar from '../compontes/SideBar';

const About = () => {
  const [isShow, setShow] = useState(false);
  function showMenu() {
    setShow((prev) => !prev);
  }

  return (
    <div className={style.container}>
      <HiMenu className="menu" onClick={showMenu} />
      <SideBar isShow={isShow} onClick={showMenu} />
      <h1 className={style['about-title']}>Welcome to Our page</h1>
      <p
        style={{
          width: '60%',
          margin: '0 auto',
          letterSpacing: '0.03',
          lineHeight: '1.5',
          textAlign: 'justify',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        repellendus rerum voluptas veniam corporis fugiat aspernatur placeat
        enim totam impedit sapiente molestiae, magnam iure mollitia error. Iste
        eius modi esse hic nihil excepturi recusandae nam vel expedita
        blanditiis eligendi enim, rerum soluta, omnis consequuntur fugiat quae.
        Modi doloremque perferendis deserunt?
      </p>

      <Outlet />
    </div>
  );
};

export default About;
