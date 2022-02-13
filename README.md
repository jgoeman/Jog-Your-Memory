# Jog-Your-Memory
<img src="https://user-images.githubusercontent.com/90986041/153778830-5e264134-e738-4968-bd99-ed29da92254b.png" width="600" height="300">

## Overview
Are your local parks and trails far busier than usual?  Is it harder to find a trailhead parking spot or biking, hiking, and camping gear?  It’s not your imagination.  An analysis by AllTrails (trail navigation app) showed the number of logged hikes in 2020 was up 171.4 percent compared to 2019 (4,713,654 vs 1,737,029).

Looking for therapeutic exercise and an escape away from the crowds?  Our mission is to use data science and machine learning to identify lightly trafficked trails with undiscovered greatness.

## Hypothesis/Question 
What is the relationship among features of a trail and its popularity?  
  
## Approach  
  1. Obtain trail information including trail name, location, distance, elevation gain, difficulty, rating, type of trail, features, activities, and map coordinates.
  
  1. Clean the data and create a Pandas DataFrame, using One-Hot Encoding dummy variables for all categorical feature columns.  Store the cleaned data in Postgres.
  
  1. Use Supervised Machine Learning such as LogisticRegression to create a model to determine the relationship between a trail's features and its popularity.
  
  1. Apply the model to trails described as “lightly trafficked” (based on number of reviews) to find trails expected to become popular based on their combination of features. 
  
  1. Use HTML, Javascript, and CSS to display results on a webpage.
  
     * User inputs: Location (city and state)

     * App renders a map (center is user's entered location) with markers at trailhead and pop-ups with key trail information.

     * Include link to AllTrails app for selected trail.

  _Additional features, time permitting_:
  
  * If text reviews of trails are readily available, utilize VADER Sentiment Analysis module of Natural Language Processing to analyze the reviews to determine a mean composite score.
  
  * User input:  Select trail features/activities

## Challenges
1. Data Resource: Our original plan was to scrape trail information from the AllTrails website.  The ChromeDriver triggered a bot blocker.  We later learned AllTrails data is protected against webscraping.

___
## Resources:
_Data Source:_ National Parks Kaggle Data (based on AllTrails)

_Applications_:
*  Python/Pandas
*  SQL/Postgres
*  Javascript, HTML, and CSS
*  Mapbox & Leaflet
*  Tableau
*  Google Slides?

_Analysts_: Adam Ehlers, Joe Goeman, Sara Lewer, and Andrea Pfeffer
