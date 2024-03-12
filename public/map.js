ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.8519, 60.6122],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        })

        const coordinats = [[56.8519, 60.6122],[56.9, 60.61]]

        coordinats?.forEach((coord, i) => {
            const myPlacemark = new ymaps.Placemark(coord, {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/myIcon.gif',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            })

            function addElement(e) {
                const modal = document.getElementById(`modal${i}`);
                modal.classList.remove('hide')
                modal.classList.add('show')
              }

            //Событие на клик по отметке
            myPlacemark.events.add([
                'balloonopen'], (e) =>addElement(e));

                //Рендерим метку на карту
                myMap.geoObjects
    .add(myPlacemark);
    
        })


        // myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
        //     hintContent: 'Собственный значок метки',
        //     balloonContent: 'Это красивая метка'
        // }, {
        //     // Опции.
        //     // Необходимо указать данный тип макета.
        //     iconLayout: 'default#image',
        //     // Своё изображение иконки метки.
        //     iconImageHref: 'images/myIcon.gif',
        //     // Размеры метки.
        //     iconImageSize: [30, 42],
        //     // Смещение левого верхнего угла иконки относительно
        //     // её "ножки" (точки привязки).
        //     iconImageOffset: [-5, -38]
        // })

        // function addElement(e) {
        //     const modal1 = document.getElementById("modal1");
        //     modal1.classList.remove('hide')
        //     modal1.classList.add('show')
        //   }

        // // Добавляем действие на клик по метке
        // myPlacemark1.events.add([
        //     'balloonopen'], (e) =>addElement(e));

    // myMap.geoObjects
    //     .add(myPlacemark1);
});