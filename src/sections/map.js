import './map.scss'

import ymaps from 'ymaps'
import placemarkSvg from '/assets/icons/placemark.svg'

const apiKey = '2c4efe61-9267-4a45-b586-af566638dd31'

ymaps
  .load(`https://api-maps.yandex.ru/2.1.79/?apikey=${apiKey}&lang=en_US`)
  .then((maps) => {
    const isDesktop = window.innerWidth > 1024
    const center = isDesktop
      ? [56.326158, 30.516062] // Координаты для десктопа
      : [56.326158, 30.518762]
    const map = new maps.Map('map', {
      center: center,
      zoom: 16,
      // Убираем все элементы управления по умолчанию
      controls: [],
    })

    // Добавляем только нужные элементы: зум и кнопку геолокации
    map.controls.add('zoomControl', {
      position: { top: 140, right: 20 },
    })

    map.controls.add('geolocationControl', {
      position: { top: 100, right: 20 },
    })

    // Добавляем кастомный маркер
    const placemark = new maps.Placemark(
      [56.326158, 30.518762],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: placemarkSvg,
        iconImageSize: [64, 84],
        iconImageOffset: [-32, -44],
      }
    )

    map.geoObjects.add(placemark)
  })
  .catch((error) => console.log('Failed to load Yandex Maps', error))
