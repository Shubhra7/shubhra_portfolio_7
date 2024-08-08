AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "SQL - The Complete Developer's Guide (MySQL, PostgreSQL)",
    cardImage: "assets/images/experience-page/sql_certi.png",
    place: "Udemy",
    time: "(March, 2024 - present)",
    desp: "<li>From data definition to manipulation (CRUD, relations, JOIN)</li><li> Learn SQL for MySQL, Postgresql & more from the ground up.</li>",
  }
  , {
    title: "MERN Industrial training & Internship",
    cardImage: "assets/images/experience-page/MERN_certi.png",
    place: "Ardent computech pvt ltd",
    time: "(Jan to Feb - 2024)",
    desp: "<li>Implement Tour Travel Project. </li><li>Implement Car Showroom Project.</li>",
  },
  {
    title: "Python Developer",
    cardImage: "assets/images/experience-page/python_certi.png",
    place: "Udemy",
    time: "(Jan - 2024)",
    desp: "<li> Python from SCRATCH and automate Excel, Databases, Testing, Networking and Data Analysis.</li><li>Full Python apps inside!</li>",
  },
  {
    title: "Python for Data Science",
    cardImage: "assets/images/experience-page/IBM_certi.png",
    place: "IBM",
    time: "(Dec - 2023)",
    desp: "<li> I have completed the Python for Data science powered by IBM Developer Skills Network.</li><li> It was a phenomenal experience and highly charged to do next level.</li>",
  },  {
    title: "Powerbi Internship",
    cardImage: "assets/images/experience-page/power_bi.png",
    place: "Ardent computech pvt ltd",
    time: "(Jun to Jul - 2023)",
    desp: "<li> E-Commerce Analytics</li><li>Database Schema builder explore.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");


const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);




const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
