import './App.css';

function App() {

  const closeModal = (id) => {
    document.getElementById(id).classList.remove('show')
    document.getElementById(id).classList.add('hide')

  }

  const modalContents = [
    <div>Контент1</div>,
    <div>Контент2</div>
  ]


  return (
    <div className="App">

      <div className='modal hide' id='modal0'>
        <div className='header'>
          <div>Модалка1</div>
          <button className='header-button' onClick={() => closeModal('modal0')}>✗</button>
        </div>
        
        {/* Картинки */}
        <img
  class="picture1"
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
  alt="Текст если не вывелась картинка" />
        
      </div>

      <div className='modal hide' id='modal1'>
        <div>Модалка2</div>
        <div></div>
        {/* Картинки */}
        <img></img>
        <button onClick={() => closeModal('modal1')}>Крест</button>
      </div>
      
    </div>
  );
}

export default App;
