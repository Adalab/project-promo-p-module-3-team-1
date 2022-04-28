import CardPreview from './CardPreview';
import logo from '../images/logo.svg';

const Card = (props) => {
  return (
    <>
      <header className="header">
        <a href="#">
          <img
            className="header_img"
            src={logo}
            alt="Logo Awesome Profile Cards"
          />
        </a>
      </header>

      <main className="main2">
        <section className={`preview palette-${props.dataForm.palette}`}>
          <div>
            <button
              className="preview__reset js__btnreset"
              type="button"
              onClick={handleReset}
            >
              <i className="fa-regular fa-trash-can"></i>
              <span className="cards__reset--text">Reset</span>
            </button>
            {/*<CardPreview data={dataForm} />*/}
          </div>
        </section>

        <form className="main2__form js__resetform js-formshare" action="#">
          <fieldset className="form">
            <legend
              id="id-design"
              onClick={handleCollapse}
              className="form__legend js__legend"
            >
              <div className="form__legend__1">
                <i className="fa-regular fa-object-ungroup form__legend__icon1"></i>
                <span className="form__legend__text">DISEÑA</span>
              </div>
              <i className="fa-solid fa-angle-down form__legend__icon2"></i>
            </legend>

            <div
              className={`form__content js__context ${props.collapseDesign}`}
            >
              <div className="form__label">
                <label htmlFor="palette">COLORES</label>
              </div>

              <div className="js__formradios">
                <div className="form__radios">
                  <input
                    className="form__radio js_radio-1"
                    type="radio"
                    name="palette"
                    value="1"
                    checked={props.dataForm.palette === '1'}
                    onChange={handleChange}
                  />
                  <div className="form__values">
                    <div className="form__color form__color--1"></div>
                    <div className="form__color form__color--2"></div>
                    <div className="form__color form__color--3"></div>
                  </div>
                </div>

                <div className="form__radios">
                  <input
                    className="form__radio js_radio-2"
                    type="radio"
                    name="palette"
                    value="2"
                    checked={props.dataForm.palette === '2'}
                    onChange={handleChange}
                  />
                  <div className="form__values">
                    <div className="form__color form__color--4"></div>
                    <div className="form__color form__color--5"></div>
                    <div className="form__color form__color--6"></div>
                  </div>
                </div>

                <div className="form__radios">
                  <input
                    className="form__radio js_radio-3"
                    type="radio"
                    name="palette"
                    value="3"
                    checked={props.dataForm.palette === '3'}
                    onChange={handleChange}
                  />
                  <div className="form__values">
                    <div className="form__color form__color--7"></div>
                    <div className="form__color form__color--8"></div>
                    <div className="form__color form__color--9"></div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="form">
            <legend
              id="id-fill"
              onClick={handleCollapse}
              className="form__legend js__fill"
            >
              <div className="form__legend__1">
                <i className="fa-regular fa-keyboard form__legend__icon1"></i>
                <span className="form__legend__text">RELLENA</span>
              </div>
              <i className="fa-solid fa-angle-down form__legend__icon2"></i>
            </legend>

            <div className={`js__form js__allInputs ${props.collapseFill}`}>
              <div className="form__items">
                <label htmlFor="Nombre Completo">Nombre completo</label>
                <input
                  className="form__items__box js__profile-name"
                  placeholder="Ej: Sally Jill"
                  type="text"
                  name="name"
                  id="Nombre completo"
                  value={props.dataForm.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form__items">
                <label htmlFor="Puesto">Puesto</label>
                <input
                  className="form__items__box js__profile-job"
                  placeholder="Ej: Front-end unicorn"
                  type="text"
                  name="job"
                  id="Puesto"
                  value={props.dataForm.job}
                  onChange={handleChange}
                />
              </div>
              <div className="form__items">
                <label htmlFor="title">Imagen de perfil</label>
                <div className="form__items-image">
                  <div className="action">
                    <label
                      className="action__upload-btn"
                      htmlFor="img-selector"
                    >
                      Añadir imagen
                    </label>
                    <input
                      type="file"
                      name=""
                      id="img-selector"
                      className="action__hiddenField js__profile-upload-btn"
                    />
                  </div>
                  <div className="profile">
                    <div className="profile__image js__profile-image"></div>
                  </div>
                </div>
              </div>
              <div className="form__items">
                <label htmlFor="Email">Email</label>
                <input
                  className="form__items__box js__profile-email"
                  placeholder="Ej: salyy-hill@gmail.com"
                  type="email"
                  name="email"
                  id="email"
                  value={props.dataForm.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form__items">
                <label htmlFor="Teléfono">Teléfono</label>
                <input
                  className="form__items__box js__profile-phone"
                  placeholder="Ej: 55-55-55-55"
                  type="tel"
                  name="phone"
                  id="tel"
                  value={props.dataForm.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form__items">
                <label htmlFor="Linkedin">Linkedin</label>
                <input
                  className="form__items__box js__profile-linkedin"
                  placeholder="Ej: sally.hill"
                  type="text"
                  name="linkedin"
                  id="Linkedin"
                  value={props.dataForm.linkedin}
                  onChange={handleChange}
                />
              </div>
              <div className="form__items">
                <label htmlFor="Github">Github</label>
                <input
                  className="form__items__box js__profile-github"
                  placeholder="Ej: sally-hill"
                  type="text"
                  name="github"
                  id="Github"
                  value={props.dataForm.github}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="form">
            <legend
              id="id-share"
              onClick={handleCollapse}
              className="form__legend js__share"
            >
              <div className="form__legend__1">
                <i className="fa-solid fa-share-nodes form__legend__icon1"></i>
                <span className="form__legend__text">COMPARTE</span>
              </div>
              <i className="fa-solid fa-angle-down form__legend__icon2"></i>
            </legend>

            <div className={`js__contextshare ${props.collapseShare}`}>
              <div className="form__contextcreate">
                <button
                  onClick={handleClickCreate}
                  className="button_create js_create_button"
                >
                  <i className="fa-solid fa-address-card"></i>
                  <span className="btn_tex js-submitSpan">Crear tarjeta</span>
                </button>
              </div>
              <div className="error_create js__error"></div>

              <div>
                <label
                  className="card__new js__createcard"
                  htmlFor="tarjeta creada"
                >
                  La tarjeta ha sido creada:
                  {apiUrl.cardURL || ' url'}
                </label>
                <a className="card__share js-response" target="_blank">
                  {' '}
                </a>

                <a className="button_share js_twitterShare" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                  Compartir en twitter
                </a>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className="footer_adalab">
        <p className="footer_awesome">Awesome profile-cards @2022</p>
        <a target="_blank" href="https://adalab.es/" rel="noreferrer">
          <img className="footer_logo" src={logo} alt="Logo Adalab" />
        </a>
      </footer>
    </>
  );
};

export default Card;
