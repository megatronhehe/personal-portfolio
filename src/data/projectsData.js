import ecommerce1 from "../assets/project-ecommerce-images/ecommerce1.jpg";
import ecommerce2 from "../assets/project-ecommerce-images/ecommerce2.jpg";
import ecommerce3 from "../assets/project-ecommerce-images/ecommerce3.jpg";
import ecommerce4 from "../assets/project-ecommerce-images/ecommerce4.jpg";
import ecommerce5 from "../assets/project-ecommerce-images/ecommerce5.jpg";
import ecommerce6 from "../assets/project-ecommerce-images/ecommerce6.jpg";
import ecommerce7 from "../assets/project-ecommerce-images/ecommerce7.jpg";
import ecommercelogo from "../assets/project-ecommerce-images/ecommercelogo.jpg";

import orderpanel1 from "../assets/project-order-panel-images/orderpanel1.jpg";
import orderpanel2 from "../assets/project-order-panel-images/orderpanel2.jpg";
import orderpanel3 from "../assets/project-order-panel-images/orderpanel3.jpg";
import orderpanel4 from "../assets/project-order-panel-images/orderpanel4.jpg";
import orderpanellogo from "../assets/project-order-panel-images/orderpanellogo.jpg";

import watchlist1 from "../assets/project-watchlist-images/watchlist1.jpg";
import watchlist2 from "../assets/project-watchlist-images/watchlist2.jpg";
import watchlist3 from "../assets/project-watchlist-images/watchlist3.jpg";
import watchlist4 from "../assets/project-watchlist-images/watchlist4.jpg";
import watchlist5 from "../assets/project-watchlist-images/watchlist5.jpg";
import watchlist6 from "../assets/project-watchlist-images/watchlist6.jpg";
import watchlist7 from "../assets/project-watchlist-images/watchlist7.jpg";
import watchlistlogo from "../assets/project-watchlist-images/watchlistlogo.jpg";

import todos1 from "../assets/project-todos-images/todos1.jpg";
import todos2 from "../assets/project-todos-images/todos2.jpg";
import todos3 from "../assets/project-todos-images/todos3.jpg";
import todos4 from "../assets/project-todos-images/todos4.jpg";
import todos5 from "../assets/project-todos-images/todos5.jpg";
import todoslogo from "../assets/project-todos-images/todoslogo.jpg";

import realestate1 from "../assets/project-realestate-images/realestate1.jpg";
import realestate2 from "../assets/project-realestate-images/realestate2.jpg";
import realestate3 from "../assets/project-realestate-images/realestate3.jpg";
import realestate4 from "../assets/project-realestate-images/realestate4.jpg";
import realestate5 from "../assets/project-realestate-images/realestate5.jpg";
import realestatelogo from "../assets/project-realestate-images/realestatelogo.jpg";

export const projectData = [
	{
		id: 0,
		title: "E-Commerce Clothing Website",
		logo: ecommercelogo,
		description:
			"An online clothing online shop complete with most of the actual online shop functionality like cart systems, ability to choose and pick color, and more.",
		features: [
			"Cart system",
			"Customize product's color and size",
			"Responsive design",
			"Simple filter method",
		],
		image: [
			ecommerce1,
			ecommerce2,
			ecommerce3,
			ecommerce4,
			ecommerce5,
			ecommerce6,
			ecommerce7,
		],
		sc: "https://github.com/megatronhehe/ecommerce-2",
	},
	{
		id: 1,
		title: "Restaurant Ordering Panel App",
		logo: orderpanellogo,
		description:
			"An app to help restaurant operator to deal with customer orders,complete functionality to CRUD a customer order, and count pricetotal of each order.",
		features: [
			"Make orders",
			"Customize selected order",
			"Mark order as completed",
		],
		image: [orderpanel1, orderpanel2, orderpanel3, orderpanel4],
		sc: "https://github.com/megatronhehe/food-ordering-panel",
	},
	{
		id: 2,
		title: "Movie Watchlist Tracker",
		logo: watchlistlogo,
		description:
			"App that helps you keep track on what you have or have not watch. It can be movies, shows, etc. Data fetches using IMDb API, giving access to every movies or shows that ever exist.",
		features: [
			"Search movies",
			"Standard CRUD on movies to personal watchlist",
			"Responsive design",
		],
		image: [
			watchlist1,
			watchlist2,
			watchlist3,
			watchlist4,
			watchlist5,
			watchlist6,
			watchlist7,
		],
		sc: "https://github.com/megatronhehe/movie-watchlist-2",
	},
	{
		id: 3,
		title: "Calendar App",
		logo: todoslogo,
		description:
			"App that helps user to keep track of daily activities and plan for things to do in the future for a more organized and structured way to live a life.",
		image: [todos1, todos2, todos3, todos4, todos5],
		features: [
			"CRUD activity based on date",
			"Mark activity as completed",
			"Mark an event on a date",
			"Responsive design",
		],
		sc: "https://github.com/megatronhehe/calendar-app",
	},
	// {
	// 	id: 4,
	// 	title: "Personal real estate website",
	// 	logo: realestatelogo,
	// 	description:
	// 		"Personal real estate website that showcase personal real estates for sale",
	// 	image: [realestate1, realestate2, realestate3, realestate4, realestate5],
	// 	features: ["Showcase real estate", "Responsive design"],
	// 	sc: "https://github.com/megatronhehe/calendar-app",
	// },
];
