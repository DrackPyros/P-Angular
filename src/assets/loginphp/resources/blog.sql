-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-02-2021 a las 23:32:34
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog`
--
CREATE DATABASE IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `blog`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

DROP TABLE IF EXISTS `articulos`;
CREATE TABLE `articulos` (
  `Numero` int(11) NOT NULL,
  `Titulo` varchar(255) DEFAULT NULL,
  `Subtitulo` varchar(255) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Autor` varchar(255) DEFAULT NULL,
  `Media` varchar(500) DEFAULT NULL,
  `Texto` text DEFAULT NULL,
  `imgmuestra` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`Numero`, `Titulo`, `Subtitulo`, `Fecha`, `Autor`, `Media`, `Texto`, `imgmuestra`) VALUES
(1, 'Diy del día: Dados!!', NULL, '2020-11-01', 'Santiago Jovani', '<div class=\"video\"><iframe src=\"https://www.youtube.com/embed/h6PE7WT0jqU\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>', '<p>En el día de hoy os hablaremos de un canal que está pasando un poco desapercibido por las redes, pero que es realmente interesante si te gustan los juegos de rol y los dados bonitos.<br/><a href=\"https://www.youtube.com/user/TheFluffinAmazin\" target=\"blank\">Rybonator</a>, un creador de contenido relacionado con temas <i>geeks</i> y con grandes dotes para hacer manualidades, lleva dando tumbos por internet desde 2013 y hace un par de años empezó a hacer una serie de videos relacionados con como hacer tus própios dados con materiales mas o menos convencionales.</p>', 'img/dado.jpg'),
(2, 'Roll 20', '¿Qué és? Tips y trucos', '2020-11-01', 'Santiago Jovani', '<div class=\"slider\"><ul><li><img src=\"img/r20.jpg\" alt=\"Imagen R20\"></li><li><img src=\"img/rol202.jpg\" alt=\"Imagen R20\"></li></ul></div>', '<p><a href=\"https://roll20.net/\" target=\"blank\">Roll 20</a> es una plataforma de ayuda para jugar tanto a juegos de rol como a juegos de mesa.<br/>La página consiste en un nexo para jugadores y el <i>master</i> (administrador del juego) en la que te permite customizar tus partidas ya sea con mapas, iconos, caricaturas de personajes, etc... o con ayudas mecánicas como la posibilidad de insertar fichas y reglas de los juegos que estés jugando así como poder tirar los propios dados en la plataforma y que sean visibles o no para los demás jugadores.</p>', 'img/r20logo.png'),
(3, 'Documentación y Reglas D&D', NULL, '2020-11-01', 'Santiago Jovani', '<img src=\"img/dyd.jpg\" alt=\"Imagen R20\" class=\"noti\">', '<p>En lo referente a documentación sobre Dungeons & Dragons, no podemos sino recomendar siempre la página por excelencia promovida por los propios Wizards of the coast.<br/>Estamos hablando ni mas ni menos de <a href=\"https://www.dndbeyond.com\" target=\"blank\">D&D Beyond</a>. Esta página, es el referente a buscar para la obtención digital de cualquier material que tenga que ver con dragones y mazmorras y adicionalmente, también ofrecen aventuras hechas por la comunidad así como una variedad de mapas y assets muy cómodos para cualquier jugador.</p>', 'img/dyd.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios` (
  `nombre` varchar(100) DEFAULT NULL,
  `Texto` varchar(255) DEFAULT NULL,
  `Fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `pwd` varchar(100) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`codigo`, `nombre`, `pwd`, `tipo`) VALUES
(1, 'admin', '$2y$12$yuQGr8BteCarqJqeyCDbVenZfErk3tlZ1DYnGIy3NiOrj6Rn2IeoW', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`Numero`),
  ADD UNIQUE KEY `Numero` (`Numero`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
