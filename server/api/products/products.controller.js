/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/products              ->  index
 */

'use strict';

// Gets a list of Products
export function index(req, res) {
  res.json([{
    hotels: [
      {
        name: 'Hotel Emperador',
        description: 'El hotel de lujo en buenos aires para negocios y placer. Nuestro compromiso es brindar a cada uno de nuestros huéspedes un extraordinario nivel de servicio.',
        image: 'hotel-emperador.jpg',
        stars: '3',
        price: '1596'
      },
      {
        name: 'Petit Palace San Bernardo',
        description: 'El Hotel Petit Palace San Bernardo es un hotel junto a la Gran Vía de Madrid, con una cuidada atención personalizada y unos servicios pensados para todos.',
        image: 'hotel-petit.jpg',
        stars: '4',
        price: '2145'
      },
      {
        name: 'Hotel Nuevo Boston',
        description: 'Alójese en el Hotel Nuevo Boston, un hotel cerca del Aeropuerto Adolfo Suarez de Madrid-Barajas y cerca de IFEMA.',
        image: 'hotel-boston.jpg',
        stars: '2',
        price: '861'
      }
    ]
  }]);
}
