import '../styles/HomeStyle.css';

const Home = () => {

    return (
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
              <span class="material-icons logo-img" viewBox="0 0 256 256">account_circle</span>
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
          <section className="page-app">
            <input type="checkbox" className="menu-handler"/>
            <aside className="page-menu">
              <label id="menu-drawer" for="menu-handler">
                <span class="material-icons" viewBox="0 0 256 256">menu</span>
              </label>
              <label id="adopt-paw" for="adopt-paw" >
                <div className='menu-icon'>
                  <span class="material-symbols-outlined" >pets</span>
                </div>
              </label>
              <label id="fav-pets" for="fav-pets" >
                <div className='menu-icon'>
                  <span class="material-symbols-outlined">pets</span>
                </div>
              </label>
            </aside>
          </section>
        </div>

          
      </body>
      </>

    )
}

export default Home;