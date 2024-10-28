const productos = [
  {
    id: 1,
    nombre: "Dog Chow Perro Adulto Raza Mediana y Grande",
    precio: 100.0,
    descripcion:
      "Dog Chow ofrece una alimentación completa para tu mascota, promoviendo un corazón saludable, músculos y huesos fuertes, y óptima salud dental. Encuentra la presentación de 22 kg.",
    categoria: "comida",
    tipo: "perro",
    imagen:
      "https://dojiw2m9tvv09.cloudfront.net/2905/product/dog-chow-adulto-mediano-grande-carne-pollo5628.jpg?1097",
  },
  {
    id: 2,
    nombre: "Rascador Circular para Gato",
    precio: 150.0,
    descripcion:
      "Rascador circular para gatos, ideal para mantener sus uñas saludables y reducir el estrés. Compacto y resistente, perfecto para el juego y descanso de tu felino.",
    categoria: "juguetes",
    tipo: "gato",
    imagen:
      "https://songatos.com/wp-content/uploads/2023/01/rascadores-de-gatos-1-songatos.com_.jpg",
  },
  {
    id: 3,
    nombre: "Correa resistente para perros",
    precio: 120.0,
    descripcion:
      "Correa de alta resistencia en color azul, ideal para paseos seguros y cómodos. Cuenta con un gancho de metal duradero y un asa acolchada para mayor comodidad al sujetar.",
    categoria: "accesorios",
    tipo: "perro",
    imagen:
      "https://cdnebasnet.com/data/cache/opt_jpg/eshop/sumascota/images/products/i/1/8/2/7/p1827/0000-5060086561579-1059594910-1400x1400.jpg",
  },
  {
    id: 4,
    nombre: "Paté Ricocat para gatos",
    precio: 200.0,
    descripcion:
      "Delicioso paté para gatos adultos, sabor atún y pescado. Ideal para una alimentación completa y balanceada, brindando los nutrientes esenciales que tu gato necesita.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://plazavea.vteximg.com.br/arquivos/ids/305523-1000-1000/20192844.jpg?v=637194668119730000",
  },
  {
    id: 5,
    nombre: "Cama para perros con cojín extra",
    precio: 180.0,
    descripcion:
      "Cama acolchada para perros en tonos rojo y negro, con cojín extra decorativo en forma de hueso. Diseño cómodo y elegante, ideal para el descanso de tu mascota.",
    categoria: "accesorios",
    tipo: "perro",
    imagen:
      "https://i.pinimg.com/originals/93/a0/31/93a031be4ebbce85c6b3ec8fb9ffd480.jpg",
  },
  {
    id: 6,
    nombre: "Juguete mordedor para perros en forma de cocodrilo",
    precio: 220.0,
    descripcion:
      "Mordedor resistente con diseño de cocodrilo, ideal para limpiar los dientes y entretener a tu perro. Incluye un cepillo para facilitar su limpieza. Perfecto para mantener la salud dental mientras juega.",
    categoria: "juguetes",
    tipo: "perro",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/I/71IdSpUXaZL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    nombre: "Alimento Whiskas para gatos adulto",
    precio: 130.0,
    descripcion:
      "Alimento seco Whiskas sabor carne, ideal para gatos mayores de un año. Fórmula completa y balanceada que contribuye al bienestar continuo y promueve una piel y pelo saludables. Presentación de 1.5 kg.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://th.bing.com/th/id/R.55f00c781eb1f310ebf81798ca9c1958?rik=mFP2s1L5gcPPKg&pid=ImgRaw&r=0",
  },
  {
    id: 8,
    nombre: "Correa de paseo para perro con resorte amortiguador",
    precio: 175.0,
    descripcion:
      "Correa roja para perro, diseñada con resorte amortiguador para reducir tirones y brindar mayor comodidad. Fabricada en material resistente y equipada con un gancho de metal seguro. Ideal para paseos controlados y seguros.",
    categoria: "accesorios",
    tipo: "perro",
    imagen:
      "https://4.bp.blogspot.com/-mSqhWBZAK3I/UVNlWPgQaDI/AAAAAAAAAOE/ZKvdC8ba8bE/s1600/tirador.jpg",
  },
  {
    id: 9,
    nombre: "Alimento húmedo Whiskas Junior para gatitos",
    precio: 300.0,
    descripcion:
      "Pack de alimento húmedo Whiskas para gatitos de 2 a 12 meses, sabor selección de carnes en salsa. Fórmula diseñada para un crecimiento sano y desarrollo adecuado. Incluye 4 sobres de 100 g cada uno.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://a0.soysuper.com/1636d5e7d57ea2cedb42bb680311134a.1024.0.0.0.wmark.be4f8d2e.jpg",
  },
  {
    id: 10,
    nombre: "Juguete dispensador de premios KONG para perros",
    precio: 350.0,
    descripcion:
      "Juguete KONG de goma duradera, diseñado para rellenar con premios o comida. Ideal para mantener a tu perro entretenido y estimular su mente mientras busca los premios. Perfecto para masticar y reducir el estrés.",
    categoria: "juguetes",
    tipo: "perro",
    imagen: "https://cat-oh.com/wp-content/uploads/2020/05/KXL_1.jpg",
  },
  {
    id: 11,
    nombre: "Arco cepillo masajeador para gatos",
    precio: 90.0,
    descripcion:
      "Arco de cepillo diseñado para el auto-masaje de gatos, ideal para mantener el pelaje limpio y reducir el estrés. Su base antideslizante permite que el gato se cepille y se rasque cómodamente.",
    categoria: "accesorios",
    tipo: "gato",
    imagen:
      "https://dojiw2m9tvv09.cloudfront.net/10212/product/L_rascador-cubre-piso-y-arco-masajeador-para-gatos-d_nq_np_985905-mlc25108918622_102016-f9541.jpg?55",
  },
  {
    id: 12,
    nombre: "Equilíbrio Veterinary CA Cardiac para perros",
    precio: 400.0,
    descripcion:
      "Alimento especializado Equilíbrio Veterinary para perros con problemas cardíacos. Formulado con L-carnitina, taurina y omegas 3 y 6 para apoyar la salud del corazón y brindar una nutrición balanceada. Ideal para perros con necesidades veterinarias específicas.",
    categoria: "comida",
    tipo: "perro",
    imagen:
      "https://promart.vteximg.com.br/arquivos/ids/8248564-444-444/imageUrl_1.jpg?v=638651399280770000",
  },
  {
    id: 13,
    nombre: "Juguete láser automático para gatos",
    precio: 125.0,
    descripcion:
      "Juguete láser interactivo para gatos, que emite un punto de luz en movimiento para estimular el instinto de caza y mantener a tu gato activo. Funciona de manera automática, proporcionando entretenimiento sin esfuerzo para ti y diversión para tu mascota.",
    categoria: "juguetes",
    tipo: "gato",
    imagen:
      "https://cdn.shopify.com/s/files/1/0185/9786/products/pty00-14244_e1_1_1400x.jpg?v=1544160375",
  },
  {
    id: 14,
    nombre: "Purina Dog Chow en lata para perros adultos-Cordero y arroz",
    precio: 215.0,
    descripcion:
      "Alimento húmedo Dog Chow para perros adultos, sabor cordero y arroz. Fórmula 100% completa y balanceada, diseñada para apoyar una vida sana y llena de energía en tu mascota.",
    categoria: "comida",
    tipo: "perro",
    imagen: "https://www.lagranbodega.com.pe/public/images/products/160000.jpg",
  },
  {
    id: 15,
    nombre: "Transportadora de viaje para gatos",
    precio: 170.0,
    descripcion:
      "Transportadora espaciosa y cómoda para gatos, con diseño resistente y múltiples bolsillos para almacenamiento. Ideal para viajes, con ventilación adecuada y fácil acceso para la seguridad y comodidad de tu mascota.",
    categoria: "accesorios",
    tipo: "gato",
    imagen: "https://m.media-amazon.com/images/I/716KI03lspS._AC_SL1500_.jpg",
  },
  {
    id: 16,
    nombre: "Pelotas de juego para perros",
    precio: 260.0,
    descripcion:
      "Set de pelotas coloridas para perros, perfectas para jugar a lanzar y recoger. Diseño resistente con huellas estampadas, ideales para mantener a tu mascota activa y entretenida.",
    categoria: "juguetes",
    tipo: "perro",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/I/71bS%2B-4aksL._AC_SL1500_.jpg",
  },
  {
    id: 17,
    nombre: "Alimento Purina Friskies para gatos de interior",
    precio: 145.0,
    descripcion:
      "Alimento seco Friskies para gatos de interior, con control de bolas de pelo y reducción de olores. Sabor a pollo y carne, diseñado para mantener un peso saludable y una digestión óptima. Presentación de 3 kg.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://www.guiasdecompra.com/wp-content/uploads/2019/11/comida-para-gatos.jpg",
  },
  {
    id: 18,
    nombre: "Pañuelos de cuadros para perros",
    precio: 275.0,
    descripcion:
      "Set de pañuelos con diseño de cuadros en varios colores, ideales para darle estilo a tu perro. Fabricados en tela suave y ajustable, perfectos para cualquier ocasión y cómodos de llevar.",
    categoria: "accesorios",
    tipo: "perro",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_978858-MCO42145792829_062020-O.webp",
  },
  {
    id: 19,
    nombre: "Alimento Ricocat para gatos adultos-Festival de sabores",
    precio: 310.0,
    descripcion:
      "Alimento seco Ricocat para gatos mayores de un año, con un mix de sabores como salmón, carne, pollo y atún. Proporciona una nutrición completa que promueve el bienestar integral y un pelaje saludable.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://oechsle.vteximg.com.br/arquivos/ids/1332679-1000-1000/image-cfa0bb00c10741329b876bed95515b22.jpg?v=637494330400600000",
  },
  {
    id: 20,
    nombre: "Juguete de cuerda para perros",
    precio: 150.0,
    descripcion:
      "Cuerda de algodón trenzado resistente, ideal para juegos de tirón y masticación. Ayuda a mantener los dientes limpios mientras tu perro se divierte. Perfecto para perros de todas las edades.",
    categoria: "juguetes",
    tipo: "perro",
    imagen:
      "https://www.pawsify.com/wp-content/uploads/2020/03/81xE5osOAgL.ACSL1500.jpg",
  },
  {
    id: 21,
    nombre: "Combo de alimentos Pedigree para perros adultos",
    precio: 100.0,
    descripcion:
      "Paquete de alimentos Pedigree para perros adultos que incluye croquetas, sobres de comida húmeda y una lata de paté. Nutrición completa para una dieta equilibrada, ideal para mantener a tu perro saludable y lleno de energía.",
    categoria: "comida",
    tipo: "perro",
    imagen:
      "https://www.pedigree.com.ar/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1506/files/2022-10/landing-hero-adult-default.png",
  },
  {
    id: 22,
    nombre: "Juguete giratorio interactivo para gatos",
    precio: 150.0,
    descripcion:
      "Juguete giratorio con ventosa para gatos, diseñado para estimular el juego y la curiosidad. Incluye bolas con luz y una campana para captar la atención de tu gato, proporcionando entretenimiento y ejercicio. Fácil de colocar en superficies lisas.",
    categoria: "juguetes",
    tipo: "gato",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/I/71Ep8xZzAXL._AC_SL1500_.jpg",
  },
  {
    id: 23,
    nombre: "Placa de identificación con forma de huella para mascotas",
    precio: 120.0,
    descripcion:
      "Placa de identificación metálica en forma de huella, disponible en varios colores con brillo. Personalizable con nombre y datos de contacto, ideal para mantener a tu mascota segura y con estilo.",
    categoria: "accesorios",
    tipo: "perro",
    imagen:
      "https://i.pinimg.com/originals/40/89/43/408943a9a18e9b97d423ce92c81c12bd.jpg",
  },
  {
    id: 24,
    nombre: "Purina Cat Chow para gatos esterilizados-Sabor pescado",
    precio: 200.0,
    descripcion:
      "Alimento seco Cat Chow formulado para gatos esterilizados, sabor pescado. Con Defense Plus para fortalecer su sistema inmune, ayuda a mantener un peso saludable y promueve un tracto urinario sano.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://vetmasagro.com/wp-content/uploads/2022/08/cat-chow-este-jpg.webp",
  },
  {
    id: 25,
    nombre: "Piscina plegable para perros",
    precio: 180.0,
    descripcion:
      "Piscina portátil y plegable para perros, ideal para refrescar a tu mascota en días calurosos. Fabricada en material resistente, fácil de montar y almacenar. Perfecta para el juego y el baño al aire libre.",
    categoria: "accesorios",
    tipo: "perro",
    imagen:
      "https://aperrados.com/wp-content/uploads/2018/11/piscinas-para-perros.png",
  },
  {
    id: 26,
    nombre: "Juguete de goma en forma de pollo para perros",
    precio: 220.0,
    descripcion:
      "Divertido juguete de goma en forma de pollo, ideal para el entretenimiento de los perros. Produce un sonido al morderlo, perfecto para estimular y mantener a tu mascota activa y entretenida.",
    categoria: "juguetes",
    tipo: "perro",
    imagen:
      "https://aperrados.com/wp-content/uploads/2018/08/juguetes-para-perros-razas-medianas-y-grandes.jpg",
  },
  {
    id: 27,
    nombre: "Alimento Ultima Junior para gatitos",
    precio: 130.0,
    descripcion:
      "Alimento seco Ultima para gatitos de 1 a 12 meses, sabor pollo. Formulado para un crecimiento saludable, fácil de digerir y sin azúcares añadidos ni colorantes artificiales. Presentación de 400 kg.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://static.condisline.com/resize_1280x1347/images/catalog/large/109264.jpg",
  },
  {
    id: 28,
    nombre: "Mochila para perros de aventura",
    precio: 175.0,
    descripcion:
      "Mochila ajustable para perros, ideal para excursiones y caminatas. Con compartimentos amplios para llevar suministros y correas seguras para un ajuste cómodo. Perfecta para perros activos y exploradores.",
    categoria: "accesorios",
    tipo: "perro",
    imagen:
      "https://1.bp.blogspot.com/-KIwHBnpP1vg/XX-qnkcNRTI/AAAAAAAASDk/3AeV8wNM0r8gO_P1OE_3sdQ7Owxv0lRlgCLcBGAsYHQ/s1600/Accesorios%2Bdivertidos%2Bque%2Btu%2Bperro%2Brealmente%2Bno%2Bnecesita%2B5.jpg",
  },
  {
    id: 29,
    nombre: "Purina Felix Sensaciones de Atún en Salsa",
    precio: 300.0,
    descripcion:
      "Alimento húmedo Purina Felix para gatos, sabor atún en salsa. Fórmula completa y balanceada que contribuye a una piel y pelo saludables, con vitaminas y minerales. Sabor irresistible para tu gato.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://d34xtejqjqcp3x.cloudfront.net/store/5da18cb5df0e19905695b33c9f983cea.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAICTJHRPRHFBTAWCA%2F20210222%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210222T020502Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=e26c7b2e83c19837aacf4529665d9a1a650af41bb3573d2cb2090fb841a92cba",
  },
  {
    id: 30,
    nombre: "Pelota dispensadora de premios para perros",
    precio: 350.0,
    descripcion:
      "Pelota de goma con compartimentos para premios, diseñada para mantener a tu perro entretenido mientras busca sus recompensas. Ayuda a limpiar los dientes y estimula el juego activo y saludable.",
    categoria: "juguetes",
    tipo: "perro",
    imagen:
      "https://th.bing.com/th/id/OIP.OAndO12g5Bk0PSsINh7ybAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 31,
    nombre: "Suéter de lana para gatos",
    precio: 90.0,
    descripcion:
      "Suéter de lana suave y cómodo para gatos, disponible en varios colores. Ideal para mantener a tu mascota abrigada en climas fríos con estilo. Fácil de poner y lavar.",
    categoria: "accesorios",
    tipo: "gato",
    imagen:
      "https://i.etsystatic.com/24436693/r/il/1e2535/2580619603/il_fullxfull.2580619603_py3y.jpg",
  },
  {
    id: 32,
    nombre: "Alimento Perroski para perros adultos",
    precio: 400.0,
    descripcion:
      "Alimento seco Perroski para perros, enriquecido con prebióticos y omegas, sin colorantes artificiales. Fórmula completa y balanceada para promover la salud y vitalidad de tu mascota. Presentación de 8 kg a precio especial.",
    categoria: "comida",
    tipo: "perro",
    imagen:
      "https://aratiendas.com/wp-content/uploads/2023/01/14401-7704269225091.jpg",
  },
  {
    id: 33,
    nombre: "Juguetes de peluche con catnip para gatos",
    precio: 125.0,
    descripcion:
      "Set de peluches coloridos rellenos de catnip, diseñados para captar la atención y estimular el juego en gatos. Suaves y de tamaño ideal para morder y abrazar, perfectos para mantener a tu gato entretenido y relajado.",
    categoria: "juguetes",
    tipo: "gato",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_744102-MLA43483062151_092020-F.jpg",
  },
  {
    id: 34,
    nombre: "Combo de alimento Dogui para perros",
    precio: 215.0,
    descripcion:
      "Combo de alimentos Dogui que incluye croquetas sabor carne, una lata de comida húmeda y snacks en forma de hueso y palitos. Ideal para ofrecer variedad y nutrición completa a tu perro en cada comida.",
    categoria: "comida",
    tipo: "perro",
    imagen:
      "https://mlstaticquic-a.akamaihd.net/comida-de-perro-dogui-recetas-caseras-24-kg-envio-regalo-D_NQ_NP_749443-MLU31430144446_072019-F.jpg",
  },
  {
    id: 35,
    nombre: "Cueva acolchada para gatos",
    precio: 170.0,
    descripcion:
      "Cama tipo cueva para gatos, con interior acolchado y cálido, perfecta para el descanso y refugio de tu mascota. Diseño compacto que brinda comodidad y seguridad.",
    categoria: "accesorios",
    tipo: "gato",
    imagen:
      "https://mininos.es/wp-content/uploads/2020/09/Copia-de-gatos-unicolores.jpg",
  },
  {
    id: 36,
    nombre: "Hueso de cuero prensado para perros",
    precio: 260.0,
    descripcion:
      "Hueso de cuero natural prensado, ideal para satisfacer el instinto de masticación de los perros. Ayuda a mantener dientes y encías saludables mientras brinda entretenimiento prolongado.",
    categoria: "juguetes",
    tipo: "perro",
    imagen:
      "https://th.bing.com/th/id/OIP.IDBVeevJoSMu-p345QXsqAAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 37,
    nombre: "Whiskas Fillets en Salsa-Pack surtido",
    precio: 145.0,
    descripcion:
      "Pack de 12 sobres de alimento húmedo Whiskas para gatos, con sabores surtidos de res, pescado y aves. Cada sobre ofrece una comida completa y balanceada, ideal para consentir a tu gato con variedad en cada comida.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://resources.claroshop.com/medios-plazavip/mkt/5e179274dec8c_000163883mjpg.jpg",
  },
  {
    id: 38,
    nombre: "Set de accesorios para mascotas",
    precio: 275.0,
    descripcion:
      "Completo set de accesorios para mascotas, incluye platos de comida, juguetes de pelotas con texturas y pala para alimentos. Ideal para el entretenimiento y cuidado diario de tu mascota.",
    categoria: "accesorios",
    tipo: "perro",
    imagen:
      "https://st.depositphotos.com/1177973/2637/i/950/depositphotos_26379649-stock-photo-pet-accessories-isolated-on-white.jpg",
  },
  {
    id: 39,
    nombre: "Chiki Alimento para Gatos-Sabor a Pollo",
    precio: 310.0,
    descripcion:
      "Alimento seco Chiki para gatos, sabor a pollo. Fórmula 100% nutritiva que contribuye a un pelaje brillante y una vida larga. Croquetas con tamaño ideal para facilitar su consumo. Presentación de 1.5 kg.",
    categoria: "comida",
    tipo: "gato",
    imagen:
      "https://www.supermercadosantamaria.com/documents/10180/10504/171153028_G.jpg",
  },
  {
    id: 40,
    nombre: "Set de juguetes Nerf para perros",
    precio: 150.0,
    descripcion:
      "Conjunto de juguetes resistentes de la marca Nerf, incluye pelota, barra y tira para juegos de lanzar, buscar y tirar. Ideales para perros activos y de gran energía, hechos de materiales duraderos para una diversión prolongada.",
    categoria: "juguetes",
    tipo: "perro",
    imagen:
      "https://www.lidl.es/media/product/0/0/0/2/8/4/1/juguetes-para-perros-zoom--7.jpg",
  },
];
