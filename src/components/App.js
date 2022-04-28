import '../styles/main.scss';

import { useState } from 'react';
import dataApi from '../services/api';
import Card from './Card';


function App() {
  const [collapseDesign, setCollapseDesign] = useState('');
  const [collapseFill, setCollapseFill] = useState('collapsed');
  const [collapseShare, setCollapseShare] = useState('collapsed');
  const [dataForm, setDataForm] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: 'data:image/png;base64,2342ba...',
  });
  const [apiUrl, setApiUrl] = useState({});

  const handleClickCreate = (event) => {
    event.preventDefault();
    console.log('está entrando');
    dataApi(dataForm).then((info) => {
      setApiUrl(info);
      console.log(info);
    });
  };

  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    const inputChange = ev.target.name;
    setDataForm({
      ...dataForm,
      [inputChange]: inputValue,
    });
  };

  const handleCollapse = (event) => {
    const idCollapse = event.currentTarget.id;
    if (idCollapse === 'id-design') {
      if (collapseDesign === 'collapsed') {
        setCollapseDesign('');
        setCollapseFill('collapsed');
        setCollapseShare('collapsed');
      } else {
        setCollapseDesign('collapsed');
      }
    }
    if (idCollapse === 'id-fill') {
      if (collapseFill === 'collapsed') {
        setCollapseFill('');
        setCollapseDesign('collapsed');
        setCollapseShare('collapsed');
      } else {
        setCollapseFill('collapsed');
      }
    }
    if (idCollapse === 'id-share') {
      if (collapseShare === 'collapsed') {
        setCollapseShare('');
        setCollapseFill('collapsed');
        setCollapseDesign('collapsed');
      } else {
        setCollapseShare('collapsed');
      }
    }
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setDataForm({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
    });
  };

  // RETURN DE APP
  return (
    <Card dataForm = {dataForm}/>
  );
}

export default App;
