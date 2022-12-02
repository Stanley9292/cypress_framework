# Technical Assessment

You have been provided with a web application that contains a simple login and home page.

We are a remote team so it is very important that the interview shows that you are capable of communicating while working remotely.

Install the application dependencies and test harness with:

```sh
npm install
```

## Running the application

You can start the application alone:

```sh
npm run dev
```

It'll be live on http://localhost:5173

## Business requirements

- Email address must follow format `<name>@<domain>.com` or `.co.uk` or `.it`
- Password should be at least 8 characters long, contain a mix of upper and lower case letters, numbers and at least one special character
- Validation message should be displayed if password or email are in the incorrect format
- User can use SUBMIT button or ENTER to validate content
- Upon entering a valid user name and password - you are taken through to a screen with a welcome message

Note: As this is just a frontend assessment, there are no correct details as it is not backed by a database. Therefore you can expect that any valid credentials will be accepted by the system.


## Running Cypress testing suite

The app has been configured with a Cypress test harness.

Start the application and launch Cypress Test Runner with:

```sh
npm run cypress
```

