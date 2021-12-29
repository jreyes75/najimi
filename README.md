
# Najimi
![Najimi Logo](./public/img/logo.png)

Najimi is a business-directory site that allows users to find local businesses with the Asian community.

As the site is a business directory, users can add their business to the site with ease, showing information of their businesses in an elegant, and organized fashion.

  

## How to run the site

### CMD method

- To run the site, go into your command line and cd into the final-project folder.

- Run the following script and press enter:

```
npm run start
```

### IDE method

- Open up your terminal and simply type the following and press enter:

```
npm run start
```

If any of the methods above are successful, the site is live where you can access on your browser through the url:
```
localhost:3000
```
## Access the API
Accessing the API for the site is fairly straightforward: it is located here:
```
localhost:3000/api/places
```

From there, you will get back a JSON view of the database (connected through MongoDB/Mongoose)

## Add a Business/Place (adding posts)
1. Go to the ```Add Place``` page, located on the navbar.
2. Fill out all of the appropriate information in the fields. (NOTE: All fields will need to be filled in, or else the place/business cannot be added to the database).
3. Click on the save button, and you will be redirected to the ```places``` page.

## Edit/Delete a Business/Place
- Editing a business/place is easy. Just click on the yellow ```Edit``` button and edit any information!
- Deleting a business/place is easy. Just click on the red ```Delete``` button. (NOTE: THIS WILL DELETE YOUR BUSINESS/PLACE FROM THE DATABASE, SO BE CAREFUL!)

## Dependencies
- [Axios](https://www.npmjs.com/package/axios)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [debug](https://www.npmjs.com/package/debug)
- [express](https://www.npmjs.com/package/express)
- [hbs](https://www.npmjs.com/package/hbs)
- [http-errors](https://www.npmjs.com/package/http-errors)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [morgan](https://www.npmjs.com/package/morgan)
- [passport](https://www.npmjs.com/package/passport)
- [passport-jwt](https://www.npmjs.com/package/passport-jwt)
- [restify](https://www.npmjs.com/package/restify)