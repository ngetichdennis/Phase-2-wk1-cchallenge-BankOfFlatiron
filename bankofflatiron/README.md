## Bank Of Flatiron Transaction App
This is a React app that allows you to view and add transactions to a bank account. You can search transactions by description, and see the date, category, and amount of each transaction.

## Installation
To install this app, you need to have Node.js and npm installed on your machine. Then, follow these steps:

Clone this repository to your local machine.
Navigate to the project folder and run npm install to install the dependencies.
Run npm start to start the development server.

## Usage
To use this app, you can do the following:

To view the transactions, scroll down to the table and see the details of each transaction.
To search transactions by description, type in the search box above the table and press enter. The table will update to show only the transactions that match your query.
To add a new transaction, fill in the form above the search box and click on the “ADD TRANSACTION” button. The transaction will be added to the table and the state.
Additionally,the form inputs persist into the db.json by use of a post method and therefore the db.json arrya is added.
## Code
This app is composed of three main components: App, Table, and TableDetails.

App is the root component that holds the state of the transactions and the search query. It also handles the fetching of data from the API endpoint, the adding of new transactions, and the filtering of transactions by description. It renders the TableDetails and Table components as its children.
Table is a presentational component that displays the transactions in a table format. It receives the transactions as props from the App component and maps over them to render each transaction as a table row.
TableDetails is a controlled component that renders a form for adding a new transaction. It maintains its own state for the form data and handles the input changes and form submission. It receives a callback function as props from the App component and invokes it with the form data when the form is submitted.
once the details are inputed on the form the inputs are persisted into the backend server.