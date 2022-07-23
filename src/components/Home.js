import '../styles/HomeStyle.css';
import React, { useState } from 'react';

const SidebarMenuEffects = () => {

  const [unhideMenu, setUnhideMenu] = useState(true);
  const [opacityValue, setOpacityValue] = useState('13.5%');

  function toggleMenu(){
    if(unhideMenu) {
      setUnhideMenu(false);
      setOpacityValue('3%');
    } else {
      setUnhideMenu(true);
      setOpacityValue('13.5%');
    }
  }

  return (/*
      <>
        <head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet"/>
          <link rel='stylesheet' href='https://fonts.google.com/icons?selected=Material%20Icons%3Apets%3A'/>

          <script src="https://kit.fontawesome.com/60a077b17a.js" crossorigin="anonymous"></script>

        </head>                    
        <body>
          <div className="page-wrapper">
            <nav data-testid="header-full" className="page-header">
              <a className="page-logo" href="/">
                <span className="material-icons logo-img" viewBox="0 0 256 256">account_circle</span>
              </a>
              <h1 className="title">Perros en Adopción</h1>
              <ul data-testid="widgets-list" className="page-widgets-list"></ul>
              <div className="page-user">
                <p className="username" title="username">TriniM024</p>
                <a href="/" className="page-logout" title="Exit">
                  <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="icon">
                    <g>
                    <path d="m16.8 32.1q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-2.6 0-4.5-1.9t-1.9-4.5v-15.8q0-2.6 1.9-4.5t4.5-1.9h7.2q0.3 0 0.5 0.2t0.2 0.5q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-1.4 0-2.5 1t-1 2.5v15.8q0 1.4 1 2.5t2.5 1h7l0.2 0.1 0.3 0 0.2 0.1 0.1 0.2 0.1 0.3z m20.7-12.1q0 0.6-0.4 1l-12.2 12.1q-0.4 0.5-1 0.5t-1-0.5-0.4-1v-6.4h-10q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h10v-6.4q0-0.6 0.4-1t1-0.5 1 0.5l12.2 12.1q0.4 0.4 0.4 1z"/>
                    </g>
                  </svg>
                </a>
              </div>

            </nav>

            <nav className="page-app">
              
            </nav>
          </div>
        </body>
      </>
  */
 <>
 <div className="page-wrapper">
      <nav data-testid="header-full" className="page-header">
        <a className="page-logo" href="/">
          <span className="material-icons logo-img" viewBox="0 0 256 256">account_circle</span>
        </a>
        <h1 className="title">Perros en Adopción</h1>
        <ul data-testid="widgets-list" className="page-widgets-list"></ul>
        <div className="page-user">
          <p className="username" title="username">TriniM024</p>
          <a href="/" className="page-logout" title="Exit">
            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="icon">
              <g>
              <path d="m16.8 32.1q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-2.6 0-4.5-1.9t-1.9-4.5v-15.8q0-2.6 1.9-4.5t4.5-1.9h7.2q0.3 0 0.5 0.2t0.2 0.5q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-1.4 0-2.5 1t-1 2.5v15.8q0 1.4 1 2.5t2.5 1h7l0.2 0.1 0.3 0 0.2 0.1 0.1 0.2 0.1 0.3z m20.7-12.1q0 0.6-0.4 1l-12.2 12.1q-0.4 0.5-1 0.5t-1-0.5-0.4-1v-6.4h-10q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h10v-6.4q0-0.6 0.4-1t1-0.5 1 0.5l12.2 12.1q0.4 0.4 0.4 1z"/>
              </g>
            </svg>
          </a>
        </div>
        </nav>
        </div>
 <div id="container">
             <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

             <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet"/>

  <div id="menu" ></div>
  <div id="lgMenu" className={unhideMenu ? 'enter' : ''} style={{width: opacityValue}}>
    <span id="exit" className={!unhideMenu ? 'hide-menu' : ''} onClick={toggleMenu}>&times;</span>
    <ul className="page-menu">
    
          <li className="menu-item menu-symbol" >
                  <div className='menu-icon'>
                    <table>
                      <tr>
                        <span className={ unhideMenu ? 'hide-menu' : '' + 'material-symbols-outlined ' } onClick={toggleMenu}>menu</span>
                      </tr>
                      <tr>
                        <a href="" className='menu-text'>Menu</a>
                      </tr>
                    </table>
                  </div>
                </li>

                <li className="menu-item" >
                  <div className='menu-icon'>
                    <table>
                      <tr>
                        <span className="material-symbols-outlined" >pets</span>
                      </tr>
                      <tr>
                        <a href="" className='menu-text'>Adopta</a>
                      </tr>
                    </table>
                  </div>
                </li>
                
                <li className="menu-item">
                  <div className='menu-icon'>
                  <table>
                      <tr>
                        <span className="material-symbols-outlined">favorite</span>
                      </tr>
                      <tr>
                        <a href="" className='menu-text'>Favoritos</a>
                      </tr>
                    </table>
                  </div>
                </li>
                  
                <li className="menu-item">
                  <div className='menu-icon'>
                  <table>
                      <tr>
                        <span className="material-symbols-outlined">heart_plus</span>
                      </tr>
                      <tr>
                        <a href="" className='menu-text'>Mis postulaciones</a>
                      </tr>
                    </table>
                  </div>
                </li>
                  
                <li className="menu-item">
                  <div className='menu-icon'>
                  <table>
                      <tr>
                        <span className="material-symbols-outlined">volunteer_activism</span>
                      </tr>
                      <tr>
                        <a href="" className='menu-text'>Mis mascotas</a>
                      </tr>
                    </table>
                  </div>
                </li>

                <li className="menu-item">
                  <div className='menu-icon'>
                    <table>
                      <tr>
                        <span className="material-symbols-outlined">cloud_upload</span>
                      </tr>
                      <tr>
                        <a href="" className='menu-text'>Subir</a>
                      </tr>
                    </table>
                  </div>
                </li>

                <li className="menu-item settings">
                  <div className='menu-icon'>
                  <table>
                      <tr>
                        <span className="material-symbols-outlined">settings</span>
                      </tr>
                      <tr style={{width: opacityValue}}>
                        <a href="" className='menu-text'>Ajustes</a>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
    </div>
 </div>
 </>
      

 
  )
    
}

export default SidebarMenuEffects;
