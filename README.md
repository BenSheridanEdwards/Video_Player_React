# Video Player

[![CircleCI](https://circleci.com/gh/BenSheridanEdwards/Video_Player_React.svg?style=svg)](https://circleci.com/gh/BenSheridanEdwards/Video_Player_React)
[![Maintainability](https://api.codeclimate.com/v1/badges/4a8e0904f2d65896aa53/maintainability)](https://codeclimate.com/github/BenSheridanEdwards/Video_Player_React/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4a8e0904f2d65896aa53/test_coverage)](https://codeclimate.com/github/BenSheridanEdwards/Video_Player_React/test_coverage)

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [App Showcase](#app-showcase) | [Features](#features) | [Improvements](#improvements) | [Installation Instructions](#installation) | [Credits](#credits)

## <a name="description">Description</a>

Create a video player app with React using YouTube's API. Complete with a search bar, selected video viewport with its name and description, and a list of related videos.

**Tech Stack:** *JavaScript, React, CSS, HTML, Jest, Enzyme, Axios, Webpack, Babel, CircleCI, Code Climate, Firebase*

You'll find the app [here](https://video-player-react-273018.web.app/), use cmd/window + click to open in a new tab.

## <a name="user-stories">User Stories</a>

```
As a user of Video Player.
I expect to see a search bar, where I can input a term to search for the type of videos I want to watch.
```

```
As a user of Video Player.
When I enter a search term into the search bar and hit enter,
I expect to the loading... message to disappear and the app to rerender.
```

```
As a user of Video Player. 
When I enter a search term into the search bar and hit enter,
I expect the app to rerender with a selection of videos relevent to my search term.
```

```
As a user of Video Player. 
When I've searched for the video I want to watch,
I expect to be able to click the video and my video to begin playing.
```

## <a name="mockups">Mockups</a>

### Application Layout
![Layout Mockup](https://github.com/BenSheridanEdwards/Video_Player_React/blob/master/images/Mockups/VideoPlayer-LayoutMockup.png)

### Feature Details
![Feature Mockup](https://github.com/BenSheridanEdwards/Video_Player_React/blob/master/images/Mockups/VideoPlayer-FeatureMockUp.png)

### Application Hierarchy
![App Hierarchy Mockup](https://github.com/BenSheridanEdwards/Video_Player_React/blob/master/images/Mockups/VideoPlayer-HierarchyMockup.png)

## <a name="app-showcase">App Showcase</a>

![App Screenrecording](https://github.com/BenSheridanEdwards/Video_Player_React/blob/master/images/Application_Showcase/Gifs/VideoPlayer-React-Application-Large.gif)

### <a name="features">Features</a>

- Search Bar (Using YouTube's API)
- Video Player with Title & Description
- Video List showing relevent videos to search term

### <a name="improvements">Improvements</a>

- 100% Test Coverage
  - Learn how to test axios
  - Learn how to test events
  - Learn how to test with snapshots
- Add styling
- Rebuild the app from scratch using TDD

## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.
```
$ git clone git@github.com:BenSheridanEdwards/Video_Player_React.git
$ cd Video_Player_React
```

### Launching the Application from the Command Line

From inside the project folder, you can run `npm start` in the terminal to launch the app in the browser.

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Tests

From inside the project folder, you can run `npm test` in the terminal to run the test suite. 

```
$ npm test
```

### Seeing Test Coverage

From inside the project folder, you can run 'npm test -- --coverage' in the terminal to see the code coverage for this project.

```
$ npm test -- --coverage
```

### Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was tested with [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/). 

This project uses continuous integration and deployment with [CircleCI](https://circleci.com/) & [Firebase](https://firebase.google.com/).

This project utilises [Code Climate](https://codeclimate.com/) to ensure high code quality.
