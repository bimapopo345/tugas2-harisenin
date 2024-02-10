import React, { useState, useEffect } from "react";

function Home() {
  const [query, setQuery] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProvinces();
    setRecommendations(provinces.slice(0, 3)); // Misalnya, hanya mengambil 3 rekomendasi pertama dari data
  }, []);

  const [recommendations, setRecommendations] = useState([]);

  const fetchProvinces = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
      );
      if (response.ok) {
        const data = await response.json();
        setProvinces(data);
      } else {
        throw new Error("Failed to fetch provinces");
      }
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredProvinces = provinces.filter((province) =>
    province.name.toLowerCase().startsWith(query.toLowerCase())
  );

  const handleProvinceClick = (selectedProvince) => {
    setQuery(selectedProvince + " "); // Menambahkan spasi di ujung
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Mendapatkan nilai dari input form
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const number = event.target.elements.number.value;
    const subject = event.target.elements.subject.value;
    const message = event.target.elements.message.value;

    sendEmail(name, email, number, subject, message);
  };

  const sendEmail = (name, email, number, subject, message) => {
    const emailBody = `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nSubject: ${subject}\nMessage: ${message}`;

    window.open(
      `mailto:bimapopo345@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(emailBody)}`
    );

    alert(`Terima kasih atas ${name} telah menghubungi kami!`);
  };
  return (
    <div>
      <header class="header">
        <a href="#" class="logo">
          {" "}
          <i class="fas fa-utensils"></i> Food Zone{" "}
        </a>

        <form action="" class="search-form">
          <input
            type="search"
            name=""
            placeholder="search here..."
            id="searchBox"
          />
          <label for="searchBox" class="fas fa-search"></label>
        </form>

        <div class="icons">
          <div class="fas fa-search" id="search-btn"></div>
          <div class="fas fa-share" id="theme-btn"></div>
          <div class="fas fa-user" id="login-btn"></div>
          <div class="fas fa-bars" id="menu-btn"></div>
        </div>

        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#packages">packages</a>
          <a href="#services">services</a>
          <a href="#pricing">pricing</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>
      </header>

      {/* header section ends */}

      {/* home section starts  */}

      <section class="home" id="home">
        <div class="image" data-aos="fade-down">
          <img
            src="https://cdn.vox-cdn.com/thumbor/8hZcUxUOBb4GV1JiDsz1USpT29w=/385x352:1561x1061/1200x800/filters:focal(831x620:1137x926)/cdn.vox-cdn.com/uploads/chorus_image/image/70609268/Burger_King_Plant_based_Double_Cheeezeburger.0.jpg"
            alt=""
          />
        </div>

        <div class="content" data-aos="fade-up">
          <h3>Most Tasty Burger For You</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            explicabo eius inventore reprehenderit alias eos facilis, ipsa est
            asperiores repellendus!
          </p>
          <a href="#" class="btn">
            explore now
          </a>
        </div>
      </section>

      {/* home section ends */}

      {/* filter form section starts  */}

      <section className="form-container" data-aos="zoom-in">
        <form action="">
          <div className="inputBox">
            <span>Where</span>
            <input
              type="text"
              placeholder="Cari provinsi..."
              value={query}
              onChange={handleInputChange}
              className="searchInput" // tambahkan class searchInput
            />
            {query && !loading && filteredProvinces.length > 0 && (
              <ul className="provinceList">
                {filteredProvinces.map((province) => (
                  <li
                    key={province.id}
                    onClick={() => handleProvinceClick(province.name)}
                  >
                    {province.name}
                  </li>
                ))}
              </ul>
            )}

            {!query && recommendations.length > 0 && (
              <ul className="provinceList">
                {recommendations.map((recommendation) => (
                  <li
                    key={recommendation.id}
                    onClick={() => handleProvinceClick(recommendation.name)}
                  >
                    {recommendation.name} (Rekomendasi)
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="inputBox">
            <span>When</span>
            <input type="date" />
          </div>

          <div className="inputBox">
            <span>Time</span>
            <input type="time" />
          </div>

          <input type="submit" value="Book Now" className="btn" />
        </form>
      </section>

      {/* filter form section ends */}

      {/* packages section starts  */}

      <section class="packages" id="packages">
        <h1 class="heading">
          our <span>Foods</span>
        </h1>

        <div class="box-container">
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/blog-1.jpg" alt="" />
              <h3>
                <i class="fas fa-utensils"></i> Burger
              </h3>
            </div>
            <div class="content">
              <div class="price">
                290.99 <span>350.99</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                vitae.
              </p>
              <a href="#" class="btn">
                {" "}
                Order now
              </a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/blog-2.jpg" alt="" />
              <h3>
                <i class="fas fa-utensils"></i> Burger
              </h3>
            </div>
            <div class="content">
              <div class="price">
                290.99 <span>350.99</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                vitae.
              </p>
              <a href="#" class="btn">
                {" "}
                Order now
              </a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/blog-3.jpg" alt="" />
              <h3>
                <i class="fas fa-utensils"></i> Burger
              </h3>
            </div>
            <div class="content">
              <div class="price">
                290.99 <span>350.99</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                vitae.
              </p>
              <a href="#" class="btn">
                {" "}
                Order now
              </a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/blog-4.jpg" alt="" />
              <h3>
                <i class="fas fa-utensils"></i> Burger
              </h3>
            </div>
            <div class="content">
              <div class="price">
                290.99 <span>350.99</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                vitae.
              </p>
              <a href="#" class="btn">
                {" "}
                Order now
              </a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/blog-5.jpg" alt="" />
              <h3>
                <i class="fas fa-utensils"></i> Burger
              </h3>
            </div>
            <div class="content">
              <div class="price">
                290.99 <span>350.99</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                vitae.
              </p>
              <a href="#" class="btn">
                {" "}
                Order now
              </a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/blog-6.jpg" alt="" />
              <h3>
                <i class="fas fa-utensils"></i> Burger
              </h3>
            </div>
            <div class="content">
              <div class="price">
                290.99 <span>350.99</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                vitae.
              </p>
              <a href="#" class="btn">
                {" "}
                Order now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* packages section ends */}

      {/* pricing section starts  */}

      <section class="pricing" id="pricing">
        <h1 class="heading">
          our <span>pricing</span>
        </h1>

        <div class="box-container">
          <div class="box" data-aos="zoom-in-up">
            <h3>basic plan</h3>
            <div class="price">
              <span>$</span>
              <span class="amount">30</span>
              <span>/mo</span>
            </div>
            <ul>
              <li>10 days</li>
              <li>food and drinks</li>
              <li>safty guide</li>
              <li>insurance</li>
              <li>luxury hotel</li>
            </ul>
            <a href="#" class="btn">
              choose plan
            </a>
          </div>

          <div class="box" data-aos="zoom-in-up">
            <h3>standard plan</h3>
            <div class="price">
              <span>$</span>
              <span class="amount">50</span>
              <span>/mo</span>
            </div>
            <ul>
              <li>20 days</li>
              <li>food and drinks</li>
              <li>safty guide</li>
              <li>insurance</li>
              <li>luxury hotel</li>
            </ul>
            <a href="#" class="btn">
              choose plan
            </a>
          </div>

          <div class="box" data-aos="zoom-in-up">
            <h3>premium plan</h3>
            <div class="price">
              <span>$</span>
              <span class="amount">90</span>
              <span>/mo</span>
            </div>
            <ul>
              <li>30 days</li>
              <li>food and drinks</li>
              <li>safty guide</li>
              <li>insurance</li>
              <li>luxury hotel</li>
            </ul>
            <a href="#" class="btn">
              choose plan
            </a>
          </div>
        </div>
      </section>

      {/* pricing section ends */}

      {/* review section starts  */}

      <section class="review" id="review">
        <h1 class="heading">
          client's <span>review</span>
        </h1>

        <div class="swiper-container review-slider" data-aos="zoom-in">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide">
              <img src="./assets/images/pic-1.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil
                perferendis, incidunt maxime aspernatur exercitationem
                laboriosam odio dolores magnam ratione atque, quasi odit. Hic!
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div class="swiper-slide slide">
              <img src="./assets/images/pic-2.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil
                perferendis, incidunt maxime aspernatur exercitationem
                laboriosam odio dolores magnam ratione atque, quasi odit. Hic!
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div class="swiper-slide slide">
              <img src="./assets/images/pic-3.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil
                perferendis, incidunt maxime aspernatur exercitationem
                laboriosam odio dolores magnam ratione atque, quasi odit. Hic!
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div class="swiper-slide slide">
              <img src="./assets/images/pic-4.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil
                perferendis, incidunt maxime aspernatur exercitationem
                laboriosam odio dolores magnam ratione atque, quasi odit. Hic!
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* review section ends */}

      {/* contact section starts  */}

      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <form onSubmit={handleSubmit} data-aos="zoom">
          <div className="inputBox">
            <input
              type="text"
              name="name"
              placeholder="name"
              data-aos="fade-up"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              data-aos="fade-up"
            />
          </div>

          <div className="inputBox">
            <input
              type="number"
              name="number"
              placeholder="number"
              data-aos="fade-up"
            />
            <input
              type="text"
              name="subject"
              placeholder="subject"
              data-aos="fade-up"
            />
          </div>

          <textarea
            name="message"
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
            data-aos="fade-up"
          ></textarea>

          <input type="submit" value="send message" className="btn" />
        </form>
      </section>

      {/* contact section ends */}

      {/* blog section starts  */}

      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/img1.jpg" alt="" />
            </div>
            <div class="content">
              <h3>What is bombay and hyderabadi biryani?</h3>
              <a href="#" class="btn">
                read more
              </a>
              <div class="icons">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st jan, 2024{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/img2.jpg" alt="" />
            </div>
            <div class="content">
              <h3>How many types of burger are there?</h3>
              <a href="#" class="btn">
                read more
              </a>
              <div class="icons">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st jan, 2024{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="./assets/images/img3.jpg" alt="" />
            </div>
            <div class="content">
              <h3>Did you know some facts about pizza?</h3>
              <a href="#" class="btn">
                read more
              </a>
              <div class="icons">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st jan, 2024{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blog section ends */}

      {/* footer section starts  */}

      <section class="footer">
        <div class="box-container">
          <div class="box" data-aos="fade-up">
            <h3>our branches</h3>
            <a href="#">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Malaysia{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Singapore{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-map-marker-alt"></i> japan{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Korea{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Bangladesh{" "}
            </a>
          </div>

          <div class="box" data-aos="fade-up">
            <h3>quick links</h3>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> home{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> packages{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> services{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> pricing{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> review{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> contact{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> blogs{" "}
            </a>
          </div>

          <div class="box" data-aos="fade-up">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i class="fas fa-phone"></i> +62 82275637656{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-phone"></i> +62 82275637656{" "}
            </a>
            <a href="#">
              <i class="fas fa-envelope"></i> bimapopo345@gmail.com
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Bogor, 17128{" "}
            </a>
          </div>

          <div class="box" data-aos="fade-up">
            <h3>follow us</h3>
            <a href="#">
              {" "}
              <i class="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-linkedin"></i> linkedin{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-pinterest"></i> pinterest{" "}
            </a>
          </div>
        </div>

        <div class="credit">
          created by <span>Bima Prawang Saputra</span> | all rights reserved
        </div>
      </section>

      {/* footer section ends */}
    </div>
  );
}

export default Home;
