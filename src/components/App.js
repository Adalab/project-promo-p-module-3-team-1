import '../styles/main.scss';
import logo from '../images/logo.svg';

function App() {
  return (
    <>
      <header className='header'>
        <a href='#'>
          <img
            className='header_img'
            src={logo}
            alt='Logo Awesome Profile Cards'
          />
        </a>
      </header>

      <main className='main2'>
        <section className='preview js_preview'>
          <div>
            <button className='preview__reset js__btnreset' type='button'>
              <i className='fa-regular fa-trash-can'></i>
              <span className='cards__reset--text'>Reset</span>
            </button>
            <article className='container__cards'>
              <div className='card__text'>
                <h2 className='cards__name js__preview_name'>
                  Nombre Apellido
                </h2>
                <p className='cards__job js__preview_job'>
                  Front-end developer
                </p>
                <div className='rectangle'></div>
              </div>

              <div className='cards__img js__profile-preview'></div>

              <div className='cards__logos'>
                <a
                  className='cards__logos--redes js__preview_phone'
                  href=''
                  target=''
                >
                  <i className='fa-solid fa-mobile-screen-button links'></i>
                </a>
                <a
                  className='cards__logos--redes js__preview_email'
                  href=''
                  target=''
                >
                  <i className='fa-regular fa-envelope links'></i>
                </a>
                <a
                  className='cards__logos--redes js__preview_linkedin'
                  href=''
                  target=''
                >
                  <i className='fa-brands fa-linkedin-in links'></i>
                </a>
                <a
                  className='cards__logos--redes js__preview_github'
                  href=''
                  target=''
                >
                  <i className='fa-brands fa-github-alt links'></i>
                </a>
              </div>
            </article>
          </div>
        </section>

        <form className='main2__form js__resetform js-formshare' action='#'>
          <fieldset className='form'>
            <legend className='form__legend js__legend'>
              <div className='form__legend__1'>
                <i className='fa-regular fa-object-ungroup form__legend__icon1'></i>
                <span className='form__legend__text'>DISEÑA</span>
              </div>
              <i className='fa-solid fa-angle-down form__legend__icon2'></i>
            </legend>

            <div className='form__content js__context collapsed'>
              <div className='form__label'>
                <label htmlFor='palette'>COLORES</label>
              </div>

              <div className='js__formradios'>
                <div className='form__radios'>
                  <input
                    className='form__radio js_radio-1'
                    type='radio'
                    name='palette'
                    value='1'
                    checked
                  />
                  <div className='form__values'>
                    <div className='form__color form__color--1'></div>
                    <div className='form__color form__color--2'></div>
                    <div className='form__color form__color--3'></div>
                  </div>
                </div>

                <div className='form__radios'>
                  <input
                    className='form__radio js_radio-2'
                    type='radio'
                    name='palette'
                    value='2'
                  />
                  <div className='form__values'>
                    <div className='form__color form__color--4'></div>
                    <div className='form__color form__color--5'></div>
                    <div className='form__color form__color--6'></div>
                  </div>
                </div>

                <div className='form__radios'>
                  <input
                    className='form__radio js_radio-3'
                    type='radio'
                    name='palette'
                    value='3'
                  />
                  <div className='form__values'>
                    <div className='form__color form__color--7'></div>
                    <div className='form__color form__color--8'></div>
                    <div className='form__color form__color--9'></div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className='form'>
            <legend className='form__legend js__fill'>
              <div className='form__legend__1'>
                <i className='fa-regular fa-keyboard form__legend__icon1'></i>
                <span className='form__legend__text'>RELLENA</span>
              </div>
              <i className='fa-solid fa-angle-down form__legend__icon2'></i>
            </legend>
            <div className='js__form collapsed js__allInputs'>
              <div className='form__items'>
                <label htmlFor='Nombre Completo'>Nombre completo</label>
                <input
                  className='form__items__box js__profile-name'
                  placeholder='Ej: Sally Jill'
                  type='text'
                  name='name'
                  id='Nombre completo'
                />
              </div>

              <div className='form__items'>
                <label htmlFor='Puesto'>Puesto</label>
                <input
                  className='form__items__box js__profile-job'
                  placeholder='Ej: Front-end unicorn'
                  type='text'
                  name='job'
                  id='Puesto'
                />
              </div>

              <div className='form__items'>
                <label htmlFor='title'>Imagen de perfil</label>
                <div className='form__items-image'>
                  <div className='action'>
                    <label
                      className='action__upload-btn'
                      htmlFor='img-selector'
                    >
                      Añadir imagen
                    </label>
                    <input
                      type='file'
                      name=''
                      id='img-selector'
                      className='action__hiddenField js__profile-upload-btn'
                    />
                  </div>
                  <div className='profile'>
                    <div className='profile__image js__profile-image'></div>
                  </div>
                </div>
              </div>

              <div className='form__items'>
                <label htmlFor='Email'>Email</label>
                <input
                  className='form__items__box js__profile-email'
                  placeholder='Ej: salyy-hill@gmail.com'
                  type='email'
                  name='email'
                  id='email'
                />
              </div>

              <div className='form__items'>
                <label htmlFor='Teléfono'>Teléfono</label>
                <input
                  className='form__items__box js__profile-phone'
                  placeholder='Ej: 55-55-55-55'
                  type='tel'
                  name='phone'
                  id='tel'
                />
              </div>

              <div className='form__items'>
                <label htmlFor='Linkedin'>Linkedin</label>
                <input
                  className='form__items__box js__profile-linkedin'
                  placeholder='Ej: sally.hill'
                  type='text'
                  name='linkedin'
                  id='Linkedin'
                />
              </div>

              <div className='form__items'>
                <label htmlFor='Github'>Github</label>
                <input
                  className='form__items__box js__profile-github'
                  placeholder='Ej: sally-hill'
                  type='text'
                  name='github'
                  id='Github'
                />
              </div>
            </div>
          </fieldset>

          <fieldset className='form'>
            <legend className='form__legend js__share'>
              <div className='form__legend__1'>
                <i className='fa-solid fa-share-nodes form__legend__icon1'></i>
                <span className='form__legend__text'>COMPARTE</span>
              </div>
              <i className='fa-solid fa-angle-down form__legend__icon2'></i>
            </legend>

            <div className='js__contextshare collapsed'>
              <div className='form__contextcreate'>
                <button className='button_create js_create_button'>
                  <i className='fa-solid fa-address-card'></i>
                  <span className='btn_tex js-submitSpan'>Crear tarjeta</span>
                </button>
              </div>
              <div className='error_create js__error'></div>

              <div className='js__card'>
                <label
                  className='card__new js__createcard'
                  htmlFor='tarjeta creada'
                >
                  La tarjeta ha sido creada:
                </label>
                <a className='card__share js-response' target='_blank'>
                  {' '}
                </a>

                <a className='button_share js_twitterShare' target='_blank'>
                  <i className='fa-brands fa-twitter'></i>
                  Compartir en twitter
                </a>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className='footer_adalab'>
        <p className='footer_awesome'>Awesome profile-cards @2022</p>
        <a target='_blank' href='https://adalab.es/'>
          <img className='footer_logo' src={logo} alt='Logo Adalab' />
        </a>
      </footer>
    </>
  );
}

export default App;
