# Sonder

Sonder is an application built upon a React/Redux with a Ruby on Rails API.

This application uses OAuth2 to verify a user's real Spotify account. After account authentication and authorization, Sonder compiles and analyzes the user's listening habits. With this data, Sonder will then render the user's top played tracks, create a new playlist that persists to their Spotify account for tracks the user may like based on their listening habits, and upon form submission the application will create a personality analysis based on user input and Spotify listening patterns.

The personality analysis will be based on the Big Five Personality Traits and render in a pentagonal radar chart. Each of the Big Five Personality Traits have sub categories that, based on user interactivity, will render a deep dive into each of the traits inside a doughnut chart.

To see the live application, please visit [this](https://sonder-app.herokuapp.com/) page. To see an example of how this application works, please visit [this](https://github.com/laurkim/sonder-demo) repository for a demo. The Ruby on Rails API can be found at [this](https://github.com/laurkim/SonderBackEnd) repository. 
