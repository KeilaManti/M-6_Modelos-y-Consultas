const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const moviesController = {
	list: (req, res) => {
		db.Movie.findAll()
		.then(movies => {
			res.render("moviesList", { movies });
		});
	},
	detail: (req, res) => {
		db.Movie.findByPk(req.params.id)
		.then(movie => {
			res.render("moviesDetail", { movie });
		});
	},
	new: (req, res) => {
		db.Movie.findAll({
			order: [
				["title", "ASC"],
			],
		})
		.then(movies => {
			res.render("moviesList", { movies });
		});
	},
	recomended: (req, res) => {
		db.Movie.findAll({
			limit: 5,
			order: [
				["release_date", "ASC"],
			],
		})
		.then(movies => {
			res.render("recommendedMovies", { movies });
		});
	}
};

module.exports = moviesController;