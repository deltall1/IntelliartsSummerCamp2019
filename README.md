# IntelliartsSummerCamp2019
##### This task was solved using Node.js + Express framework. MySQL was used as a database.
## Setup
First you need to install Node.js. You can download the installer via the link: https://nodejs.org/uk/. 
I am using version `10.15.3`. Then, in the project folder, launch the console and run the following commands:
```
npm install
npm install -g sequelize-cli
npm install --global mocha
```
Now open the .env.defaults file and enter your configurations for the project.
Database creation:
```
sequelize db:create
sequelize db:migrate
```
To run the project `node app.js`  
To run the tests `mocha`
## Usage
The following commands are available for working with the console:  
```
purchase 2019-04-25 12 USD "Photo Frame"    adds purchases made by customers in any supported currency
all                                         shows all purchases sorted by date
clear 2019-04-25                            removes all purchases for specified date
report 2019 UAH                             calculate the total income for specified year
--help                                      list of available commands
```
##### You can also make API requests.  
* To create a new purchase go to `http://localhost:5000/api/all` with a post req and such data:  
```
{
	"date":"2019-04-26",
	"price":"100",
	"currency":"UAH",
	"title":"Snickers"
}
```
* To get information about all purchases go to `http://localhost:5000/api/purchase` with get req.  
* To delete all purchases on the specified date go to `http://localhost:5000/api/clear` with a post req and such data:  
```
{
	"date":"2019-04-26"
}
```
* To calculate the total income for specified year go to `http://localhost:5000/api/report` with a post req and suc data:  
```
{
	"year":"2019",
	"currency":"UAH"
}
```
## Contact
If you have any problems (I hope not), here is my mail: `andrey.alekseev.1910@gmail.com`
