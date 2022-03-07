<h1 align="center">Jog Your Memory</h1>

![IMG_1162 (1)](https://user-images.githubusercontent.com/90863226/155852100-a516656f-60f4-4314-b8f2-a6a4c40d5ba6.jpg)


## Overview
Are your local parks and trails far busier than usual?  Is it harder to find a trailhead parking spot or biking, hiking, and camping gear?  It’s not your imagination.  An analysis by AllTrails (trail navigation app) showed the number of logged hikes in 2020 was up 171.4 percent compared to 2019 (4,713,654 vs 1,737,029).

Looking for therapeutic exercise and an escape away from the crowds?  Our mission is to use data science and machine learning to identify lightly trafficked trails with undiscovered greatness; the "Hidden Gems".

## Hypothesis/Question 
Can a trail's popularity be predicted by its features?  
  
## Approach  
  1. Obtain trail information from National Parks Kaggle Data including trail name, location, distance, elevation gain, difficulty, rating, type of trail, features, activities, and map coordinates.
 
  1. Clean the data, create a Pandas DataFrame, and save as a csv file.
     * Use one-hot encoding dummy variables for all categorical feature columns.
     * Create a new column for the AllTrails URL & create URL by combining the base URL with the state and trail name
     * Separate the geo-location column into separate lat & lng columns
     * Drop unnecessary columns

  1. Perform statistical analysis on the AllTrails dataset.
   
  1. Use splinter and BeautifulSoup to scrape trail reviews from TripAdvisor.

  1. Create a VaderSentimentAnalysis to assign a sentiment score to each TripAdvisor review.

  1. Use fuzzywuzzy to combine the TripAdvisor and AllTrails trail data.
  
  1. Use a RandomForestClassifer model to predict trail popularity based on its features and activities.
  
  1. Apply the model to the AllTrails dataset.  Secondly, use the predicted popularity and trails with low traffic (number of reviews) to identify undiscovered hidden gems. 
  
  1. Use HTML, Javascript, and CSS to display results on a webpage.
  
     * User selections: State and feature options, including hidden gems

     * App renders a map (center is user's entered location) with markers at trailhead and pop-ups with key trail information

     * Pop-up includes a link to AllTrails app for selected trail

## Findings
The state with the most trails in US Parks is California (707).  [Eric, you moved to the right place! :)]

 https://github.com/jgoeman/Jog-Your-Memory/blob/LewerS/Resources/TrailsPerState.png


Almost all 3,313 US Park trails in our dataset were rated pretty good.  With an average user rating of
4.2 out of 5 stars and standard deviation of 0.95, it was difficult to determine the excellent vs okay trails.  

 https://github.com/jgoeman/Jog-Your-Memory/blob/LewerS/Resources/AvgRtg.png

The number of reviews (popularity) showed wide variation.  While 75% of the trails had 57 reviews, some had hundreds and, for a handful, thousands of reviews.

 https://github.com/jgoeman/Jog-Your-Memory/blob/LewerS/Resources/NumReviews.png

This made us wonder, what makes a trail "popular" and could we use machine learning to predict a trail's popularity?

The RandomForestClassifier model F1 score is between 76% and 66%.  This indicates a trails' popularity can be predicted by random chance.

 https://github.com/jgoeman/Jog-Your-Memory/blob/LewerS/Resources/CM.png
 
The ranked features show length and elevation gain are key indicators of a trail's popularity.  The best views are above the treeline, as evidenced in the 
picture above.  (Adam took this picture at 11,000 feet during one of his adventures.)  Other features contributing to trail popularity are shown below.
 
 https://github.com/jgoeman/Jog-Your-Memory/blob/LewerS/Resources/Rank.png

## Challenges
1. Data Resource: The original plan was to scrape trail information from the AllTrails website.  The ChromeDriver triggered a bot blocker.  We later learned AllTrails data is protected against webscraping.
2. Matching reviews to AllTrails data: the trail names between TripAdvisor and AllTrails didn't always match. Found a Python fuzzywuzzy module to perform a fuzzymatch to merge the two files together.

___
## Resources:
_Data Sources:_ 

1. National Parks Kaggle Data (based on AllTrails)
2. Trip Advisor National Park Reviews

_Applications_:
*  Python
   *  pandas/numpy/matplotlib
   *  splinter/BeautifulSoup
   *  fuzzywuzzy
   *  sklearn
*  VaderSentimentAnalysis
*  RandomForestClassifier 
*  Javascript, HTML, and CSS
*  Leaflet
*  PowerPoint

_Analysts_: Adam Ehlers, Joe Goeman, Sara Lewer, and Andrea Pfeffer
