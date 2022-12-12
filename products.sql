-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2022 at 12:18 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(20) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `description`, `category`, `image`, `rating`) VALUES
(1, 'Fjallraven - Foldsac', 110, 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in t', 'men clothing', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 4),
(2, 'Mens Casual Premium ', 22, 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fa', 'men clothing', 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', 4),
(3, 'Mens Cotton Jacket', 56, 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiki', 'men clothing', 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', 5),
(4, 'Mens Casual Slim Fit', 16, 'The color could be slightly different between on the screen and in practice. / Please note that body', 'men clothing', 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
