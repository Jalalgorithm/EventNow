function Homepage() {
  return (
    <>
      <section className="banner-two bg-banner-two overlay-white-slant text-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Content Block */}
              <div className="block">
                <h1>Business</h1>
                <h2>Conference</h2>
                <h3>2017</h3>
                <h6>02-05 July 2017 California</h6>
                {/* Action Button */}
                <a href="#" className="btn btn-main-md">
                  get ticket now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 align-self-center">
              <div className="image-block two bg-about">
                <img
                  className="img-fluid"
                  src="images/speakers/featured-speaker-two.jpg"
                  alt
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 align-self-center ml-lg-auto">
              <div className="content-block">
                <h2>
                  About The <span className="alternate">Eventre</span>
                </h2>
                <div className="description-one">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusm tempor incididunt ut labore dolore magna aliqua
                    enim ad
                  </p>
                </div>
                <div className="description-two">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmtempor incididunt ut labore et dolore magna aliq
                    enim ad minim
                  </p>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-main-md">
                      Buy ticket
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-transparent-md">
                      Read more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
