import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import logo from '../images/logo.svg';

const Card = (props) => {
  // console.log('PROPS: ', props);
  const handleChangeReset = (ev) => {
    ev.preventDefault();
    props.handleReset();
  };

  const handleChangeCollapse = (ev) => {
    ev.preventDefault();
    const legendId = ev.currentTarget.id;
    props.handleCollapse(legendId);
  };

  const handleChangeOriginal = (ev) => {
    const inputValueOriginal = ev.target.value;
    const inputNameOriginal = ev.target.name;
    props.handleChange(inputValueOriginal, inputNameOriginal);
  };

  return (
    <>
      {/* COMPONENTE */}
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
        <section className={`preview palette-${props.dataForm.palette}`}>
          <div>
            <button
              className='preview__reset js__btnreset'
              type='button'
              onClick={handleChangeReset}
            >
              <i className='fa-regular fa-trash-can'></i>
              <span className='cards__reset--text'>Reset</span>
            </button>
            {/* COMPONENTE */}
            <CardPreview data={props.dataForm} />
          </div>
        </section>

        <form className='main2__form js__resetform js-formshare' action='#'>
          {/* COMPONENTE */}
          <Design
            handleChangeCollapse={handleChangeCollapse}
            handleChangeOriginal={handleChangeOriginal}
            dataForm={props.dataForm}
          />
          {/* COMPONENTE */}
          <Fill
            handleChangeCollapse={handleChangeCollapse}
            handleChangeOriginal={handleChangeOriginal}
            dataForm={props.dataForm}
          />

          {/* COMPONENTE */}
          <Share
            handleChangeCollapse={handleChangeCollapse}
            handleClickCreate={props.handleClickCreate}
            apiUrl={props.apiUrl}
          />
        </form>
      </main>

      {/* COMPONENTE */}
      <footer className='footer_adalab'>
        <p className='footer_awesome'>Awesome profile-cards @2022</p>
        <a target='_blank' href='https://adalab.es/' rel='noreferrer'>
          <img className='footer_logo' src={logo} alt='Logo Adalab' />
        </a>
      </footer>
    </>
  );
};

export default Card;
