-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-09-2020 a las 01:59:28
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `thundershoes_db`
--


--
-- Volcado de datos para la tabla `category_user`
--

INSERT INTO `category_user` (`id`, `name`) VALUES
(1, 'user'),
(2, 'admin'),
(3, 'soporte');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone`, `address`, `postal_code`, `state`, `city`, `password`, `avatar`, `category_id`) VALUES
(1, 'Matias', 'Vieira', 'matiti@gmail.com', 3434465390, 'LA calle 123', 3100, 'Entre Rios', 'Paraná', '$2b$10$BuwYZYqDQwpabrOqsUZnd.gxfqiOEOo6dwgQkQA5820UglVmsMM7K', 'avatar_01.jpg', 2);
COMMIT;

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
(11, 'zapatilla4.jpg');

--
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
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `brand_id`, `description`, `gender_id`, `on_sale`, `price`) VALUES
(1, 'TEsting update pr222222', 2, 'L111a mejor zapatilla del mundo ROJA de mUJER y PUMA FOOTBALL TALLe 39 402222222', 1, 0000000000, 0000001111),
(2, 'TEsting update pr233322', 2, 'L111a mejor zapatilla del mundo ROJA de mUJER y PUMA FOOTBALL TALLe 39 402222222', 1, 0000000000, 0000001111),
(3, 'Producto editado RELOADED', 3, 'Producto editado 2', 2, 0000000050, 0000011111),
(12, 'Pacara Earpo', 2, 'DAta descripcionassss', 1, 0000000055, 0000000022),
(15, 'NuevoProducto', 2, 'dsadsaasdsdaasdsaddsadas', 1, 0000000085, 0000005555),
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
(35, 'ZAPATILLAS SOLARDRIVE 19', 2, 'Nada es más importante que salir a correr. Estas zapatillas adidas SolarDrive 19 se convertirán en tu nuevo par favorito. Su exterior de malla transpirable es liviano y muy cómodo y la tecnología energy rail soporta tu pie en cada impulso y aterrizaje.', 1, 0000000010, 0000004900);

--
-- Volcado de datos para la tabla `category_product`
--

INSERT INTO `category_product` (`id`, `product_id`, `category_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(9, 15, 1),
(10, 15, 3),
(11, 15, 5),
(20, 3, 5),
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
(52, 30, 2);

--
-- Volcado de datos para la tabla `color_product`
--

INSERT INTO `color_product` (`id`, `color_id`, `product_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(13, 1, 15),
(14, 2, 15),
(23, 1, 3),
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
(53, 3, 30);

--
-- Volcado de datos para la tabla `image_product`
--

INSERT INTO `image_product` (`id`, `product_id`, `image_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 1, 2),
(5, 1, 3),
(6, 1, 4),
(7, 1, 5),
(8, 15, 1),
(9, 12, 1),
(11, 15, 2),
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
(69, 35, 11);

--
-- Volcado de datos para la tabla `product_size`
--

INSERT INTO `product_size` (`id`, `product_id`, `size_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(5, 15, 1),
(6, 15, 2),
(15, 3, 2),
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
(56, 30, 5);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
