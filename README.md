
Pull requests
Issues
Marketplace
Explore
@hishamibrah
We are having a problem billing your account. Please enter a new payment method or check with your payment provider for details on why the transaction failed. You can downgrade to GitHub Free in your Billing settings.
You can always contact support with any questions.
solooo7 /
phonebook-api
GitHub API


Setup
    Install dependencies: npm install.
    Run for development: npm run dev.
    Run for production: npm start.
    To run test: npm test



API

Get users based on location:

GET /

Returns:
{
  success: {Boolean}
  data: {Array<users>} list users
}


Get a user by login(userName):

GET /user

Params:

    user: {String}

Returns:

{
  success: {Boolean}
  data: {Object} user
}
