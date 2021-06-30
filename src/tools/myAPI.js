//Declaramos nuestro array que vamos a consumir para poder mostrar los objetos dentro del mismo en nuetro ItemListContainer e ItemDetailContainer
const myApi = [
  {
    id: "0",
    title: "Ryzen 5 3400G",
    price: "$65.000",
    stock: 10,
    init: 0,
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_958097-MLA32779890054_112019-O.jpg",
  },
  {
    id: "1",
    title: "Rtx 3060 Ultra Oc White",
    price: "$165.000",
    stock: 5,
    init: 0,
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_725662-MLA45229819318_032021-O.webp",
  },
  {
    id: "2",
    title: "Z490 Aorus Xtreme",
    price: "$120.000",
    stock: 5,
    init: 0,
    pictureURL:
      "https://static.gigabyte.com/StaticFile/Image/Global/d4c68f1a8658448d5df671ba132a5386/Product/25004/png/500",
  },
  {
    id: "3",
    title: "AeroCool Hive",
    price: "$6.500",
    stock: 20,
    init: 0,
    pictureURL:
      "https://aerocool.io/wp-content/uploads/2020/06/Hive-Infographic700x700px-001.png",
  },
  {
    id: "4",
    title:
      "Memoria Team DDR4 16GB (2x8GB) 3600MHz T-Force XTREEM ARGB Mirror CL14",
    price: "$35.000",
    stock: 15,
    init: 0,
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_648015-MLA45018931317_022021-W.jpg",
  },
  {
    id: "5",
    title: "Fuente Be Quiet! 700W U9 80 Plus Bronze",
    price: "$11.100",
    stock: 12,
    init: 0,
    pictureURL:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23731_Fuente_Be_Quiet__700W_U9_80_Plus_Bronze_06c10bd9-grn.jpg",
  },
];

//Y declaramos dos pequeñas funciones una que nos va a retornar todo nuestro array, mientras que la otra nos retorna un objeto dependiendo
//el id que le pasemos por parámetro
function returnAll() {
  return myApi;
}

function returnByID(id) {
  return myApi.find((item) => {
    return item.id === id;
  });
}

export { returnByID, returnAll };
