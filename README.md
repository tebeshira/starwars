# starwars

## Overview

Welcome to the Star Wars Universe Explorer! This React-based front-end application utilizes the refine.dev framework and Material UI to interact with the Star Wars API (swapi.dev). The application allows users to explore various entities from the Star Wars universe, supports detailed views of each entity, enables searching and linking between entities, and includes a favorites feature with persistence. Additionally, it features a dynamic Galactic Trade Calculator that simulates supply and demand for fictional Star Wars currencies.

## Core Requirements

Git,
NodeJS 18.18.0,
npm 9.8.1,

### Project Setup

- Initialize a new React project using the refine.dev framework.
- Use Material UI for styling and UI components.
  git clone https://github.com/tebeshira/starwars.git
  npm install
  npm start

### API Integration

- Connect to the public Star Wars API (swapi.dev) to fetch data.
- Display data for different entities (e.g., people, planets, starships).

### Listing, Navigation, and Detail Views

- Create list views for different entities.
- Implement clickable items in lists that lead to a detailed view for each entity, displaying all available information from the API.
- Provide navigation between related entities (e.g., from a person to their home planet).

### Search Functionality

- Develop a search feature for users to find entities across different categories.

### Favorites Feature

- Allow users to add entities to a favorites list.
- Use local storage to maintain the favorites list between sessions.

### Responsive Design

- Ensure a responsive design for various devices and screen sizes.

### Creative Presentation

- Utilize Material UI components for a visually appealing and user-friendly interface.

### Documentation

- Include clear setup and run instructions.
- Provide in-code comments explaining key implementation details.

## Special Requirements

### Galactic Trade Calculator (Dynamic Exchange Rate System)

- Implement a feature to calculate exchange rates between fictional Star Wars currencies (e.g., Galactic Credits, Wupiupi, Peggats).
- The exchange rates should dynamically change based on simulated supply and demand: selling a currency lowers its value, while buying increases it.
- Demonstrate the ability to implement complex logic and integrate it seamlessly into the application.
