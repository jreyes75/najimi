import createError from 'http-errors';
import express from 'express';
import hbs from 'hbs';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//Routes
import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';
import aboutRouter from './routes/about.mjs';
import faqRouter from './routes/faq.mjs';
import placesRouter from './routes/places.mjs';
import contactRouter from './routes/contact.mjs';

const app = express();
import mongoose from 'mongoose';

import connectDB from './public/javascripts/db.js';
connectDB();

//VERY IMPORTANT IN ORDER FOR CREATION OF DATABASE!!!
import placesAPIRouter from './api/places.js'
app.use('/api/places', placesAPIRouter);

const __dirname = path.resolve(); //new

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Posts pages from views to routers.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/faq', faqRouter);
app.use('/places', placesRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;