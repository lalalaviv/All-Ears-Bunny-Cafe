# All-Ears-Bunny-Cafe

## Description

An e-commerce website designed for All Ears Bunny Cafe. 

## Table of Contents
- [All-Ears-Bunny-Cafe](#all-ears-bunny-cafe)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Mock Up](#mock-up)
  - [Technologies](#technologies)
  - [License](#license)
  - [Questions](#questions)
  - [Author](#author)


## Installation 

  Before attempting to use this application, you must have the follow programs installed to your computer: 

  - VS Code
  - Node.js
  - MongoDB [Installation instructions available on MongoDB website](https://www.mongodb.com/docs/manual/installation/)
  
  In the terminal of VS Code please run the following command: 
  ```bash
npm install 
npm run seed
```

## Usage

 To use the application locally please clone the repo to your local environment.
 <br/>
 The application will be invoked by using the following command:

  ```bash
npm run develop
```

- This will start two Node.js servers, one running react, the other running an express server that uses Apollo Graphql to serve as the back end. They are on localhost:3000 and localhost:3001 respectively.


## User Story

```md
AS A bunny lover
I WANT to access a bunny cafe website 
SO THAT I can attend related events and purchase bunny related merchandise
``` 

## Acceptance Criteria

```md
GIVEN a bunny cafe website
WHEN I load the website 
THEN I am presented with images of events related to the cafe
WHEN I click on the Menu tab
THEN I am presented with a list of food and drinks that the cafe sells 
WHEN I click on the Shop tab
THEN I am presented with bunny related products I can purchase 
WHEN I click add to cart
THEN the product is added to my shopping cart and awaiting for checkout
WHEN I click on the Events tab 
THEN the events that are linked to the cafe will be displayed
WHEN I click on the Login/Signup tab
THEN a modal appears on the screen with a toggle between the option to log in or sign up 
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid username, email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I click on the Logout button
THEN I am logged out of the site and presented with the main page with images related to the cafe
```

## Mock Up

(Links are also attached below in case there are any issues with video display)

The following animations shows the application:

![Main Page of webpage](https://user-images.githubusercontent.com/106384519/216773287-b98311b3-1bf2-48dd-ab4f-60a1337564a1.mp4)
<br/>
https://user-images.githubusercontent.com/106384519/216773287-b98311b3-1bf2-48dd-ab4f-60a1337564a1.mp4

![Viewing the menu](https://user-images.githubusercontent.com/106384519/216773296-daf9556a-26c7-4922-9d32-897c8f50ee1b.mp4)
<br/>
https://user-images.githubusercontent.com/106384519/216773296-daf9556a-26c7-4922-9d32-897c8f50ee1b.mp4

![Selecting and purchasing goods](https://user-images.githubusercontent.com/106384519/216773301-cad96cf3-d027-44e0-b221-0de884f6bb06.mp4)
<br/>
https://user-images.githubusercontent.com/106384519/216773301-cad96cf3-d027-44e0-b221-0de884f6bb06.mp4

![Browsing events](https://user-images.githubusercontent.com/106384519/216773267-44ef4a76-7a6f-49ce-a021-689f885b5534.mp4)
<br/>
https://user-images.githubusercontent.com/106384519/216773267-44ef4a76-7a6f-49ce-a021-689f885b5534.mp4

![Login/Signup](https://user-images.githubusercontent.com/106384519/216773294-ddc518a8-df60-43b0-8304-7fcd0195e7dc.mp4)
<br/>
https://user-images.githubusercontent.com/106384519/216773294-ddc518a8-df60-43b0-8304-7fcd0195e7dc.mp4

![Mobile version](https://user-images.githubusercontent.com/106384519/216773566-a5e3595a-e88d-43c1-9501-3f64b778091a.mp4)
<br/>
https://user-images.githubusercontent.com/106384519/216773566-a5e3595a-e88d-43c1-9501-3f64b778091a.mp4

## Technologies
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- React
- Bootstrap
- Apollo graphQL
- Stripe

## License 
![License](https://img.shields.io/github/license/lalalaviv/all-ears-bunny-cafe)

## Questions

  Feel free to reach out if you have any enquiries
  <br/>
  GitHub: [@lalalaviv](https://github.com/lalalaviv)
  Email: lalala.viv@hotmail.com


## Author

  Vivian Lee