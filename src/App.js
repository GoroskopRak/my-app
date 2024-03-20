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
          <div className='title'>Театр юного зрителя</div>
          <button className='header-button' onClick={() => closeModal('modal0')}>X</button>
        </div>
        <img
          class="picture0"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Yekaterinburg_Youth_Theatre_-_8.jpeg"
          alt="Текст если не вывелась картинка" />

        <div className='article'>Адрес: ул. Карла Либнехта 48</div>
        <div className='article'>Театр был основан в 1930 году.  Актёр и режиссёр Юрий Корицкий стал первым художественным руководителем. Он поставил спектакль «Лягавый» по пьесе Людмилы Веприцкой. 30 марта 1930г. об этом написали в газете «Уральский рабочий. Теперь эта дата является днем рождения театра.
          В театре множество постановок на основе произведений входящих в школьную программу, такие как «Герой нашего времени», «Собачье сердце», «Три толстяка» и др.
          В основном билеты стоят от 500 до 700 рублей (можно приобрести с помощью пушкинской карты).</div>
        <div className='article'>Официальный сайт:
          <a href='https://uraltuz.ru/affiche' target="_blank">https://uraltuz.ru/affiche</a>
        </div>
      </div>

      <div className='modal hide' id='modal1'>
        <div className='header'>
          <div className='title'>Камерный театр</div>
          <button className='header-button' onClick={() => closeModal('modal1')}>X</button>
        </div>
        <img
          class="picture0"
          src="https://i.ekmap.ru/1/7/2/0/4/thumbs/700_470_fix.jpg"
          alt="Текст если не вывелась картинка" />

        <div className='article'>Адрес: ул. Пролетарская 18</div>
        <div className='article'>Открылся в декабре 1998 года. Театр строился под руководством директора «Объединенного музея писателей Урала» Лидии Худяковой и режиссера Вячеслава Анисимова(в будущем художественный руководитель театра). 
          В театре ставятся спектакли различных жанров и по множествам произведений русских писателей. В постановка приглашают играть актеров со всех театров Екатеринбурга.
          Цена билета от 500 до 900 рублей(действует пушкинская карта).</div>
        <div className='article'>Официальный сайт:
          <a href='https://uraldrama.ru/?ref=xranks' target="_blank">https://uraldrama.ru/?ref=xranks</a>
        </div>
      </div>

    </div>
  );
}

export default App;
