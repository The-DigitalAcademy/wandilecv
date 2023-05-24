import profiles from './images/profiles-svg.svg'
import about from './images/abouts.svg'
import work from './images/intern-img.jpg'
import './App.css';
import wandile from './images/wandile.jpeg'

function App() {
  return (
    <>
    <body className="bg-image">
      <div className="d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-4">
            <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                <a className="nav-link active" href="#about">About</a>
                <a className="nav-link active" href="#portfolio">Portfolio</a>
                <a className="nav-link active" href="#learnernship">Learnership/Experience</a>
                <a className="nav-link active" href="#profiles">Skills</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <div className="container">
        <section id="home" className="home py-2">
          <div className="d-flex justify-content-center">
          <img src={wandile} className="dp-pic" alt="dp" />
          </div>
          <br/>
          <h1 className="text-center text-light fw-bold">
            Hi! I'm Wandile Maluleke
          </h1>
          <br />
          <h4 className="text-center text-light">
            I'm a Front end Developer and a Web Developer Programmer
          </h4>
          <br />
          <br />
          <br />
        </section>
      </div>
      <section id="about" className="about bg-light">
        <img src={about} style={{float: "right", maxWidth: "100%", width: "450px", marginTop: "50px"}} alt="purple-img" />
        <div className="container-fluid">
          <h2 className="text-dark py-5 p-4 fw-bold">
            About Me
          </h2>
          <p className="text-dark fs-5 p-4 py-0" style={{marginTop: '-35px'}}>
            I am front end web developer from South Africa, who also likes to do competitive programming and programming in React. I'm impaired hearing, personality and just love to do work hard be positive in
                        myself to focus for do what i love with my skilled hands and good capable of what i'm doing as i
                        can handle to help company through growth to smell a successful.
          </p>
          <p className="text-dark fs-5 py-0 p-4">
            I also like to use GitHub, I use GitHub for Saving my code, Contributing to other open source projects, Hosting a Website and many more things. Also, I have <b style={{letterSpacing: '1px'}}>189+ Contributions </b>, <b style={{letterSpacing: '1px'}}>103+ Commits </b>, <b style={{letterSpacing: '1px'}}>17+ Repositories </b><b style={{letterSpacing: '1px'}}>11+ Pull Requests </b> on GitHub.
          </p>
          <br />
          <h2 className="text-dark fw-bold py-0 p-4">
            Languages
          </h2>
          <br />
          <p className="text-dark fs-5 py-0 p-4" style={{marginTop: '-5px'}}>
            English(Read, Write, Speak) and Sign Languages
          </p>
          <br />
          <br />
          <ul class="about-profiles-ul">
          <li><a href="https://web.whatsapp.com/" className="text-dark"><i className="fa fa-whatsapp text-dark"></i></a></li>
          <li><a href="https://www.linkedin.com/in/badri-vishal-mani-tripathi-721a8421a/" className="text-dark"><i className="fa fa-linkedin text-dark"></i></a></li>
          <li><a href="https://github.com/wandileo" className="text-dark"><i className="fa fa-github text-dark"></i></a></li>
          <li><a href="https://wandilemaluleke@gmail.com" className="text-dark"><i className="fa fa-envelope text-dark"></i></a></li>
          </ul>
          <br />
          <br />
        </div>
      </section>
      <section id="portfolio" className="portfolio bg-dark">
        <div className="container-fluid">
          <h2 className="fw-bold text-center text-light py-5">
            Things I Created / Projects
          </h2>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row row-1" style={{marginTop: '-30px'}}>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://wandileo.github.io/cv/" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                  Wandileo-cv
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                Wandile's Personal CV Website. Built with HTML CSS Boostrap CSS and JS
                </h5>
              </div>
            </div>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://github.com/The-DigitalAcademy/wandile-hotelbooking" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                  Wandile-hotelbooking
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                Wandile's hotel booking Built with React JS CSS Components and firebase
                </h5>
              </div>
            </div>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
                <a href="https://wandileo.github.io/website/" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                  Digital Academy's website
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                I (Wandile) created a digital academy website Built with HTML CSS Boostrap CSS and JS
                </h5>
              </div>
            </div>
          </div>
          {/* <div className="row row-1" style={{marginTop: '20px'}}>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://github.com/MrBlueBird2/to-do-list-flask" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                  to-do-list-flask
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                iTodo, To do list Web Application, Built with Flask, Database, HTML, Bootstrap, and Jinja
                </h5>
              </div>
            </div>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://github.com/MrBlueBird2/credio-home-page" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                  credio-home-page
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                A New Homepage for Crediometer Company. Built with Bootstrap HTML CSS and JS.
                </h5>
              </div>
            </div>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
                <a href="https://github.com/MrBlueBird2/jarvis-in-python" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                  jarvis-in-python
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                Jarvis can perform tasks like Talking, Opening Windows, and many more, but, My Jarvis is totally different...
                </h5>
              </div>
            </div>
          </div> */}
          <br />
          <br />
          </div>
      </section>
      <section id="learnernship" className="internship bg-light">
        <div className="container-fluid py-5">
          <img src={work} className="intern-img" alt="office" style={{marginTop: '-45px'}} />
          <h2 className="py-2 p-5 fw-bold">
            Learnership
          </h2>
          <h5 className="py-2 p-5" style={{maxWidth: '100%', width: '700px', lineHeight: '34px'}}>
            Here is a list of all the Learnerships in I have done between the year 2019 - 2023
          </h5>
          <h5 className="text-muted py-0 p-5 fw-bold" style={{maxWidth: '100%', width: '600px', lineHeight: '34px'}}>
          <h4>Code College</h4> Learnership <br/> 08 June 2019 - 11 May 2020
          </h5>
          <h5 className="text-muted py-0 p-5 fw-bold" style={{maxWidth: '100%', width: '600px', lineHeight: '34px'}}>
          <h4>Digital Academy</h4> Learnership <br/> 08 June 2021 - 11 May 2023
          </h5>
          <h3 className="py-2 p-5 fw-bold">
            Work Experience
          </h3>
          <h5 className="text-muted py-0 p-5 fw-bold" style={{maxWidth: '100%', width: '600px', lineHeight: '34px'}}>
          <h4>Office Assistant</h4> Conradie & Associates <br/> 08 June 2013 - 11 November 2013
          </h5>

          <h5 className="text-muted py-0 p-5 fw-bold" style={{maxWidth: '100%', width: '600px', lineHeight: '34px'}}>
          <h4>Data Capturer</h4> Aurum Insititue - Prison Hospital <br/> 01 January 2016 - 11 March 2016
          </h5>

          <h5 className="text-muted py-0 p-5 fw-bold" style={{maxWidth: '100%', width: '600px', lineHeight: '34px'}}>
          <h4>HR Trainee</h4> Crowne Plaza(Hotel&Resort) <br/> 01 January 2016 - 11 March 2016
          </h5>
        </div>
      <br/>
      </section>
      <section id="profiles" className="profiles bg-dark">
        <div className="profiles-img-d">
          <img src={profiles} className="profiles-img" alt="profiles-img" />
        </div>
        <h2 class="text-light py-4 p-5 fw-bold" style={{position: 'relative', top: '10px'}}>
          HTML
        </h2>
        {/* <h5 className="text-muted py-0 p-5" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. ... HTML elements are the building blocks of HTML pages.
        </h5> */}
        <h3 class="text-light fw-bold py-3 p-5">
        CSS
        </h3>
        {/* <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents.
        </h5> */}
        <h3 class="text-light fw-bold py-3 p-5">
          JS
        </h3>
        {/* <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions
        </h5> */}
        <h3 class="text-light fw-bold py-3 p-5">
          GIT and GITHUB
        </h3>
        {/* <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        Git is a document database and can be installed locally or hosted in the cloud. SQL vs Document Databases.
        </h5> */}
        <h3 class="text-light fw-bold py-3 p-5">
          REACT JS
        </h3>
        {/* <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        React JS is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
        </h5> */}
        <h3 class="text-light fw-bold py-3 p-5">
          EXPRESS
        </h3>
        {/* <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        Express is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
        </h5> */}
        <h3 class="text-light fw-bold py-3 p-5">
          NODE JS
        </h3>
        {/* <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
        </h5> */}
        <h3 class="text-light fw-bold py-3 p-5">
          MONGODB
        </h3>
        {/* <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        MongoDB is a document database and can be installed locally or hosted in the cloud. SQL vs Document Databases.
        </h5> */}
        <br/>
      </section>
    </body>
    </>
  );
}

export default App;
