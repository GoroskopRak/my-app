ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.8519, 60.6122],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        })

        const coordinats = [[56.847306, 60.610967],[56.843619, 60.607006],[56.843678, 60.593369]]

        coordinats?.forEach((coord, i) => {
        
            const myPlacemark = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: coord
                },
                // Свойства.
                properties: {
                    // Контент метки.
                    // iconContent: 'Я тащусь',
                    // hintContent: 'Ну давай уже тащи'
                }
            }, {
                // Опции.
                // Иконка метки будет растягиваться под размер ее содержимого.
                preset: 'islands#blackStretchyIcon',
                // Метку можно перемещать.
                draggable: false
            })

            function addElement(e) {
                const modal = document.getElementById(`modal${i}`);
                modal.classList.remove('hide')
                modal.classList.add('show')
              }

            //Событие на клик по отметке
            myPlacemark.events.add([
                'click'], (e) =>addElement(e));

                //Рендерим метку на карту
                myMap.geoObjects
                    .add(myPlacemark);
    
        })
});