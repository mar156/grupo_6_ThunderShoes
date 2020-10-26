-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2020 a las 14:53:57
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Nike'),
(2, 'Adidas'),
(3, 'Puma'),
(4, 'New Balance');

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Running'),
(2, 'Collection'),
(3, 'Football'),
(4, 'Tennis'),
(5, 'Volley');

--
-- Volcado de datos para la tabla `category_product`
--

INSERT INTO `category_product` (`id`, `product_id`, `category_id`) VALUES
(21, 18, 3),
(22, 18, 5),
(23, 19, 2),
(24, 19, 5),
(25, 20, 5),
(26, 21, 2),
(27, 21, 5),
(28, 22, 1),
(29, 22, 5),
(30, 23, 4),
(31, 23, 5),
(32, 25, 1),
(33, 25, 2),
(34, 26, 3),
(35, 26, 5),
(36, 27, 3),
(37, 27, 5),
(38, 28, 2),
(39, 28, 5),
(40, 29, 2),
(41, 29, 5),
(44, 31, 2),
(45, 31, 5),
(46, 32, 1),
(47, 32, 4),
(48, 32, 5),
(49, 35, 2),
(50, 35, 5),
(51, 30, 5),
(52, 30, 2),
(53, 1, 1),
(54, 2, 4),
(55, 2, 3),
(58, 3, 1),
(59, 3, 2),
(60, 12, 4),
(61, 12, 1),
(62, 12, 2),
(63, 15, 1),
(64, 15, 3),
(65, 15, 5),
(66, 36, 3),
(67, 36, 5),
(68, 37, 5),
(69, 38, 1),
(70, 38, 2),
(71, 38, 4),
(72, 39, 2);

--
-- Volcado de datos para la tabla `category_user`
--

INSERT INTO `category_user` (`id`, `name`) VALUES
(1, 'user'),
(2, 'admin'),
(3, 'soporte');

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `code`) VALUES
(1, '0011'),
(2, '0022'),
(3, '0033'),
(4, '0044'),
(5, '0055'),
(6, '0066'),
(7, '0077');

--
-- Volcado de datos para la tabla `color_product`
--

INSERT INTO `color_product` (`id`, `color_id`, `product_id`) VALUES
(24, 2, 18),
(25, 3, 18),
(26, 2, 19),
(27, 3, 19),
(28, 1, 20),
(29, 2, 20),
(30, 2, 21),
(31, 5, 21),
(32, 6, 21),
(33, 6, 22),
(34, 7, 22),
(35, 3, 23),
(36, 4, 23),
(37, 3, 25),
(38, 4, 25),
(39, 1, 26),
(40, 1, 27),
(41, 5, 27),
(42, 2, 28),
(43, 6, 28),
(44, 5, 29),
(45, 6, 29),
(48, 1, 31),
(49, 5, 31),
(50, 6, 32),
(51, 2, 35),
(52, 3, 35),
(53, 3, 30),
(55, 5, 1),
(56, 4, 1),
(57, 6, 1),
(58, 7, 1),
(59, 5, 2),
(60, 4, 2),
(61, 6, 2),
(62, 7, 2),
(67, 1, 3),
(68, 3, 3),
(69, 6, 3),
(70, 1, 12),
(71, 2, 12),
(72, 5, 12),
(73, 4, 12),
(74, 6, 12),
(75, 7, 12),
(76, 1, 15),
(77, 2, 15),
(78, 4, 15),
(79, 6, 15),
(80, 7, 15),
(81, 5, 36),
(82, 6, 36),
(83, 7, 36),
(84, 1, 37),
(85, 5, 37),
(86, 6, 37),
(87, 7, 37),
(88, 1, 38),
(89, 2, 38),
(90, 3, 38),
(91, 4, 38),
(92, 5, 38),
(93, 7, 38),
(94, 1, 39),
(95, 2, 39),
(96, 3, 39),
(97, 4, 39),
(98, 5, 39),
(99, 6, 39),
(100, 7, 39);

--
-- Volcado de datos para la tabla `genders`
--

INSERT INTO `genders` (`id`, `name`) VALUES
(1, 'Female'),
(2, 'Male'),
(3, 'Unisex');

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `file_name`) VALUES
(1, 'img-product-01.jpg'),
(2, 'img-product-02.jpg'),
(3, 'img-product-03.jpg'),
(4, 'img-product-04.jpg'),
(5, 'img-product-05.jpg'),
(6, 'zapanike2020.jpg'),
(7, 'zapatilla1.jpg'),
(8, 'zapatilla1a.jpg'),
(9, 'zapatilla2.jpg'),
(10, 'zapatilla3.jpg'),
(11, 'zapatilla4.jpg'),
(12, 'zapatilla1603717902362.jpg'),
(13, 'zapatilla1603717902367.jpg'),
(14, 'zapatilla1603717902385.jpg'),
(15, 'zapatilla1603717902392.jpg'),
(16, 'zapatilla1603717964701.jpg'),
(17, 'zapatilla1603717964703.jpg'),
(18, 'zapatilla1603717964709.jpg'),
(19, 'zapatilla1603717964713.jpg'),
(20, 'zapatilla1603718147419.jpg'),
(21, 'zapatilla1603718147421.jpg'),
(22, 'zapatilla1603718147423.jpg'),
(23, 'zapatilla1603718147426.jpg'),
(24, 'zapatilla1603718355090.jpg'),
(25, 'zapatilla1603718355094.jpg'),
(26, 'zapatilla1603718355098.jpg'),
(27, 'zapatilla1603718355101.jpg'),
(28, 'zapatilla1603718519628.jpg'),
(29, 'zapatilla1603718519633.jpg'),
(30, 'zapatilla1603718519635.jpg'),
(31, 'zapatilla1603718519646.jpg'),
(32, 'zapatilla1603718937907.jpg'),
(33, 'zapatilla1603718937909.jpg'),
(34, 'zapatilla1603718937915.jpg'),
(35, 'zapatilla1603718937915.jpg'),
(36, 'zapatilla1603719128988.jpg'),
(37, 'zapatilla1603719128989.jpg'),
(38, 'zapatilla1603719128990.jpg'),
(39, 'zapatilla1603719128995.jpg'),
(40, 'zapatilla1603720075646.jpg'),
(41, 'zapatilla1603720075648.jpg'),
(42, 'zapatilla1603720075651.jpg'),
(43, 'zapatilla1603720075655.jpg'),
(44, 'zapatilla1603720359109.jpg'),
(45, 'zapatilla1603720359111.jpg'),
(46, 'zapatilla1603720359114.jpg'),
(47, 'zapatilla1603720359121.jpg');

--
-- Volcado de datos para la tabla `image_product`
--

INSERT INTO `image_product` (`id`, `product_id`, `image_id`) VALUES
(12, 18, 1),
(14, 19, 7),
(15, 19, 9),
(16, 19, 10),
(17, 19, 11),
(18, 20, 7),
(19, 20, 9),
(20, 20, 10),
(21, 20, 11),
(22, 21, 7),
(23, 21, 9),
(24, 21, 10),
(25, 21, 11),
(26, 22, 7),
(27, 22, 9),
(28, 22, 10),
(29, 22, 11),
(30, 23, 7),
(31, 23, 9),
(32, 23, 10),
(33, 23, 11),
(34, 25, 7),
(35, 25, 9),
(36, 25, 10),
(37, 25, 11),
(38, 26, 7),
(39, 26, 9),
(40, 26, 10),
(41, 26, 11),
(42, 27, 7),
(43, 27, 9),
(44, 27, 10),
(45, 27, 11),
(46, 28, 7),
(47, 28, 9),
(48, 28, 10),
(49, 28, 11),
(50, 29, 7),
(51, 29, 9),
(52, 29, 10),
(53, 29, 11),
(54, 30, 7),
(55, 30, 9),
(56, 30, 10),
(57, 30, 11),
(58, 31, 7),
(59, 31, 9),
(60, 31, 10),
(61, 31, 11),
(62, 32, 7),
(63, 32, 9),
(64, 32, 10),
(65, 32, 11),
(66, 35, 7),
(67, 35, 9),
(68, 35, 10),
(69, 35, 11),
(70, 1, 12),
(71, 1, 13),
(72, 1, 14),
(73, 1, 15),
(74, 2, 16),
(75, 2, 17),
(76, 2, 18),
(77, 2, 19),
(78, 3, 20),
(79, 3, 21),
(80, 3, 22),
(81, 3, 23),
(82, 12, 24),
(83, 12, 25),
(84, 12, 26),
(85, 12, 27),
(86, 15, 28),
(87, 15, 29),
(88, 15, 30),
(89, 15, 31),
(90, 36, 32),
(91, 36, 33),
(92, 36, 34),
(93, 36, 35),
(94, 37, 36),
(95, 37, 37),
(96, 37, 38),
(97, 37, 39),
(98, 38, 40),
(99, 38, 41),
(100, 38, 42),
(101, 38, 43),
(102, 39, 44),
(103, 39, 45),
(104, 39, 46),
(105, 39, 47);

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `brand_id`, `description`, `gender_id`, `on_sale`, `price`) VALUES
(1, 'Zapatillas de Hombre New Balance X-90', 4, 'New Balance X-90, inspiradas en la serie 99X que celebra el carácter y estilo inconfundibles de los años 90, con un aspecto contemporáneo. Las zapatillas New Balance X-90 llevan la vibra de los 90 incrustada en su ADN, con colores y estilo atrevidos.', 2, 0000000005, 0000011199),
(2, 'Zapatillas New Balance 247 Decon', 4, 'Añadi un estilo deportivo a tu look con las zapatillas urbanas New Balance 247 Decon. Con una construcción tipo bootie ligera y flexible que ofrece un ajuste inigualable, un diseño de lineas simples y tecnología REVlite en la entresuela que hace que esta zapatilla sea perfecta para cualquier ocasión.', 1, 0000000000, 0000008849),
(3, 'Zapatillas de hombre New Balance 850', 4, 'Es atrevida. Es retro. Es la zapatilla de hombre 850 de New Balance. Recuperamos este modelo de nuestros catálogos de los 90 con un empeine progresivo con detalles que le aportan el estilo clásico de NB.', 2, 0000000015, 0000010299),
(12, 'Zapatillas de mujer New Balance 574 Sheen Pack', 4, 'Confeccionada en materiales premium y con el clásico estilo de las 574. Creado en 1988 al combinar dos modelos diferentes de New Balance, las zapatillas urbanas 574 se ha convertido en una de nuestros modelos más icónicos. Esta versión combina el icónico diseño con una capellada iridiscente para deslumbres vayas donde vayas.', 1, 0000000010, 0000009299),
(15, 'Zapatillas New Balance Fresh Foam 880v10', 4, 'Alimentando el fuego de nuestra tecnología de amortiguación más famosa, las zapatillas de running New Balance 880v10 para mujer ofrecen una capellada en mesh Hypoknit liviana pero segura que brinda un ajuste cómodo sin complicaciones y con un enfoque en el mediopié seguro. Mientras tanto, la amortiguación de la entresuela Fresh Foam está diseñada para brindar comodidad de precisión, proporcionando un andar ultra acolchado kilómetro tras kilómetro.', 1, 0000000000, 0000014549),
(18, 'Producto PRueba', 3, 'sdasadsdadsadsadasdsa', 2, 0000000044, 0000002222),
(19, 'Zapatilla New Balance v2.0', 4, 'La mejor zapatilla New Balance para Running', 1, 0000000020, 0000004500),
(20, 'Zapatilla Nike Reloaded', 1, 'Reinventate con las nuevas zapatillas Nike 574. Éstas zapatillas de hombre te ofrecen la misma calidad de materiales premium y máximo rendimiento que esperás de unas zapatillas New Balance 574 pero con un diseño en sintético y textil, y tecnología de confort.\r\n\r\n', 2, 0000000015, 0000007000),
(21, 'Running Edition Puma', 3, 'Alimentando el fuego de nuestra tecnología de amortiguación más famosa, las zapatillas de running Puma 880v10 para mujer ofrecen una capellada en mesh Hypoknit liviana pero segura que brinda un ajuste cómodo sin complicaciones y con un enfoque en el mediopié seguro. Mientras tanto, la amortiguación de la entresuela Fresh Foam está diseñada para brindar comodidad de precisión, proporcionando un andar ultra acolchado kilómetro tras kilómetro.', 1, 0000000007, 0000008500),
(22, 'Tennis Shoes Adidas', 2, 'Adidas ofrece una pisada suave y de apoyo kilómetro tras kilómetro. Diseño detallista en su segunda generación que da el equilibrio definitivo de amortiguación y soporte para el corredor que necesita estabilidad ligera pero que aun así desea una suave y sutil transición. También tiene un empeine ligero realizado con malla de aire transpirable con una capa FantomFit, un forro tipo calcetín moldeado y construcción tipo bota para un ajuste slim y una sensación de rapidez.', 2, 0000000015, 0000008200),
(23, 'Nike Volley Edition', 1, 'Distancia y tiempo. Nuestra última versión de las zapatillas de trail Fresh Foam Hierro v5 supera los límites de ambas. Diseñadas y fabricadas con una lujosa entresuela Fresh Foam, una suela Vibram® MegaGrip y una capellada reversionada para mejorar la transpirabilidad. Una construcción tipo bootie ceñida, combinada con una parte superior que protege los dedos, hará de esta tu nueva zapatilla para ir a donde sea que te lleve el camino.', 2, 0000000010, 0000005500),
(25, 'Zapatillas New Balance Fresh Foam Hierro v5', 4, 'Nuestra última versión de las zapatillas de trail Fresh Foam Hierro v5 supera los límites de ambas. Diseñadas y fabricadas con una lujosa entresuela Fresh Foam, una suela Vibram® MegaGrip y una capellada reversionada para mejorar la transpirabilidad. Una construcción tipo bootie ceñida, combinada con una parte superior que protege los dedos, hará de esta tu nueva zapatilla para ir a donde sea que te lleve el camino.', 1, 0000000010, 0000004200),
(26, 'New Balance Visaro Pro', 4, 'Visaro Pro ensamblado con la Horma NB Pro-From, para darte una sensación de calce y agarre increíble. El diseño del patrón de la capellada combinado con el material Ariaprene, te van a dar el control total de la pelota, las zonas más blandas de la cara interna del botín fueron estratégicamente elegidas para absorber los impactos. Una plantilla diseñada con Tecnología Fresh Foam va a segurar una comodidad inigualable y la suela Super-Flex te va a dar un contacto con el terreno excepcional.', 2, 0000000010, 0000015000),
(27, 'New Balance Furon 2 Pro', 4, 'Furon PRO, ensamblados con la Horma NB Pro-Form, para darte una sensación de calce y agarre increíbles. Las capelladas del Furon Pro es de TPU, su forma se acomoda al pie para que no lo sientas y puedas sacar toda tu velocidad en el campo de juego. El collar de la capellada es bajo para permitir al tobillo moverse con libertada, su plantilla de REVLite asegura una comodidad y liviandad inigualables. El diseño de los tapones y la suela fue creado a partir de datos recolectados de los jugadores pr', 2, 0000000008, 0000009000),
(28, 'Zapatillas New Balance Fresh Foam Beacon v2', 4, 'La zapatilla de running Fresh Foam Beacon v2 ofrece una amortiguación increíble con un peso asombrosamente ligero. Para los corredores que deseen una amortiguación sencilla y de alto rendimiento, la tecnología Fresh Foam ofrece una pisada extremadamente suave. La capellada de tejido técnico se complementa con la amortiguación mullida para ofrecer una sensación suave en todo el pie.', 1, 0000000000, 0000008200),
(29, 'ZAPATILLAS PARA CORRER ULTRABOOST 20', 1, 'Un nuevo día. Una nueva oportunidad para correr. Dejá todo en el asfalto. Estas zapatillas de alto rendimiento traen un exterior tejido que abraza el pie. Incorporan refuerzos integrados tejidos ubicados de manera estratégica para una mayor sujeción en donde más lo necesitas. El talón de elastano suave las hace aún más cómodas y la amortiguación receptiva energiza cada uno de tus pasos para que puedas correr sin parar.', 2, 0000000005, 0000000000),
(30, 'ZAPATILLAS PULSEBOOST ', 2, 'Madrugá para salir a correr, planeá bien tu ruta y usá estas zapatillas adidas con máxima ventilación. Te ayudan a controlar el calor gracias a su exterior de malla que brinda transpirabilidad donde más la necesitás. Además, su amortiguación receptiva se siente firme al impacto e impulsa tu pisada hacia adelante. Pero no olvidés hidratarte.', 1, 0000000000, 0000008500),
(31, 'RUNFALCON Nike', 2, 'The Runfalcon is new for Running on adidas.com. Scroll through the pictures above to see more details from different angles. If you’ve tried out the Runfalcon before, leave a review below to let us know what you thought. We’re still working on getting you more information about the Runfalcon on adidas.com so come back soon. In the meantime, here’s the product article number EG8629 for your reference, it\'s categorized as: Running Shoes', 1, 0000000010, 0000009000),
(32, 'ZAPATILLAS COURTJAM BOUNCE', 2, 'Dominá la cancha. Estas zapatillas de tenis adidas te mantienen en control para que puedas desplegar tu repertorio de golpes con comodidad. Te permiten moverte con total confianza por toda la cancha para responder a los ataques de tus oponentes.', 2, 0000000040, 0000009999),
(35, 'ZAPATILLAS SOLARDRIVE 19', 2, 'Nada es más importante que salir a correr. Estas zapatillas adidas SolarDrive 19 se convertirán en tu nuevo par favorito. Su exterior de malla transpirable es liviano y muy cómodo y la tecnología energy rail soporta tu pie en cada impulso y aterrizaje.', 1, 0000000010, 0000004900),
(36, 'Botines Puma Borussia Tt', 2, 'Un ícono del fútbol mundial, una pieza de colección del deporte al que las generaciones le guardan cariño y respeto. Los botines Puma Borussia TT mantienen el diseño típico, además del confort interno, para que sientas control de la pelota. Resistentes y para despegar tu mejor fútbol. Con los Borussia, que la pelota vaya dentro del arco ya es tu tarea.', 3, 0000000000, 0000007899),
(37, 'Zapatillas Nike Air Max Excee', 3, '\r\nLas zapatillas Nike Air Max Excee incorporan una amortiguación suave para combinar con cualquier outfit y brindarte un ajuste cómodo durante todo el día. Su diseño inspirado en las famosas Nike Air de los 90\'s y el estilo propio de la marca hacen de ella un calzado que debes tener entre tus preferidos. Combinalas con lo que quieras, ese no es su problema, sino su ventaja.', 1, 0000000000, 0000011999),
(38, 'Zapatillas Nike Quest 2', 3, 'Conocé las nuevas Zapatillas Nike Quest 2, confeccionadas con materiales resistentes y respirables, para que tus dias de running sean cada vez mejores.', 1, 0000000010, 0000008999),
(39, 'ZAPATILLAS COURTSMASH', 1, 'Estas zapatillas presentan un diseño liviano perfecto para devolver saques complicados. Están diseñadas para tenistas aficionados, e incorporan un exterior de cuero sintético resistente al desgaste y un panel de malla en la zona del talón. La mediasuela con amortiguación te proporciona mayor comodidad y la suela de caucho garantiza un agarre seguro.', 2, 0000000000, 0000007199);

--
-- Volcado de datos para la tabla `product_size`
--

INSERT INTO `product_size` (`id`, `product_id`, `size_id`) VALUES
(16, 18, 2),
(17, 18, 3),
(18, 19, 3),
(19, 19, 4),
(20, 19, 5),
(21, 20, 1),
(22, 20, 5),
(23, 20, 6),
(24, 21, 4),
(25, 21, 5),
(26, 21, 6),
(27, 22, 5),
(28, 22, 6),
(29, 23, 2),
(30, 23, 3),
(31, 25, 3),
(32, 25, 4),
(33, 26, 4),
(34, 26, 5),
(35, 26, 6),
(36, 27, 4),
(37, 27, 5),
(38, 27, 6),
(39, 28, 3),
(40, 28, 4),
(41, 28, 5),
(42, 29, 4),
(43, 29, 5),
(46, 31, 2),
(47, 31, 3),
(48, 32, 3),
(49, 32, 4),
(50, 32, 5),
(51, 32, 6),
(52, 35, 3),
(53, 35, 4),
(54, 35, 5),
(55, 30, 4),
(56, 30, 5),
(57, 1, 1),
(58, 1, 2),
(59, 1, 3),
(60, 1, 4),
(61, 1, 5),
(62, 2, 1),
(63, 2, 3),
(64, 2, 5),
(65, 2, 6),
(71, 3, 2),
(72, 3, 3),
(73, 3, 4),
(74, 3, 5),
(75, 3, 6),
(76, 12, 1),
(77, 12, 2),
(78, 12, 3),
(79, 12, 4),
(80, 15, 1),
(81, 15, 2),
(82, 15, 4),
(83, 15, 5),
(84, 15, 6),
(85, 36, 3),
(86, 36, 4),
(87, 36, 5),
(88, 36, 6),
(89, 37, 2),
(90, 37, 3),
(91, 37, 4),
(92, 37, 5),
(93, 38, 1),
(94, 38, 2),
(95, 38, 3),
(96, 38, 4),
(97, 39, 1),
(98, 39, 2),
(99, 39, 3),
(100, 39, 4);

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `size`) VALUES
(1, 35),
(2, 36),
(3, 37),
(4, 38),
(5, 39),
(6, 40);

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone`, `address`, `postal_code`, `state`, `city`, `password`, `avatar`, `category_id`) VALUES
(1, 'Matias', 'Vieira', 'matiti@gmail.com', 3434465390, 'LA calle 123', 3100, 'Entre Rios', 'Paraná', '$2b$10$BuwYZYqDQwpabrOqsUZnd.gxfqiOEOo6dwgQkQA5820UglVmsMM7K', 'avatar_01.jpg', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
