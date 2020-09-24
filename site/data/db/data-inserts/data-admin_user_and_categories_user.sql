-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-09-2020 a las 04:20:21
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
