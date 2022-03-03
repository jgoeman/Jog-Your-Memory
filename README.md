<h1 align="center">Jog Your Memory</h1>

![IMG_1162 (1)](https://user-images.githubusercontent.com/90863226/155852100-a516656f-60f4-4314-b8f2-a6a4c40d5ba6.jpg)


## Overview
Are your local parks and trails far busier than usual?  Is it harder to find a trailhead parking spot or biking, hiking, and camping gear?  It’s not your imagination.  An analysis by AllTrails (trail navigation app) showed the number of logged hikes in 2020 was up 171.4 percent compared to 2019 (4,713,654 vs 1,737,029).

Looking for therapeutic exercise and an escape away from the crowds?  Our mission is to use data science and machine learning to identify lightly trafficked trails with undiscovered greatness; the "Diamond in the Rough".

## Hypothesis/Question 
What is the relationship among features of a trail and its popularity?  
  
## Approach  
  1. Obtain, clean and store data in csv files
 
     * Kaggle Dataset: AllTrails trail information including trail name, location, distance, elevation gain, difficulty, average rating, type of trail, features, activities, and map coordinates

     * Webscrape using Splinter/BeautifulSoup: TripAdvisor Reviews for National Park Trails included in AllTrails data
 
  1. Perform statistical analysis on AllTrails dataset
  
  1. Create a vaderSentiment model to assign a Sentiment score to each TripAdvisor review, and get a Sentiment positive/negative rating by trail using an average of each trail's review scores

  1. Run a Fuzzy Match to combine the sentiment scores/ratings subset with the related AllTrails data
  
  1. Use RandomForest to create a model to determine the relationship between a trail's features and its sentiment score/rating
  
  1. Apply the model to the AllTrails dataset to predict the sentiment score/rating to every trail in the dataset, and use this in conjunction with the number of reviews to find the "Diamonds in the Rough" 
  
  1. Use HTML, Javascript, and CSS to display results on a webpage
  
     * User inputs: Location (city and state)

     * App renders a map (center is user's entered location) with markers at trailhead and pop-ups with key trail information

     * Include link to AllTrails app for selected trail

  _Additional features, time permitting_:
  
  * Filter based on Features/Activities (top 10 from RF rank list)
  
  * Diamond in the Rough Layer - or different shaped markers to stand out

## Challenges
1. Data Resource: Our original plan was to scrape trail information from the AllTrails website.  The ChromeDriver triggered a bot blocker.  We later learned AllTrails data is protected against webscraping.
2. Matching Reviews to AllTrails data: the trail name between the two datasets wasn't always matching up 100%. Found a Python fuzzywuzzy module to perform a fuzzymatch the two files together.

___
## Resources:
_Data Sources:_ 

1. National Parks Kaggle Data (based on AllTrails)
2. Trip Advisor National Park Reviews

_Applications_:
*  Python
   *  pandas/numpy/matplotlib
   *  splinter/BeautifulSoup
   *  vaderSentiment
   *  fuzzywuzzy
   *  sklearn
*  Javascript, HTML, and CSS
*  Leaflet
*  PowerPoint

_Analysts_: Adam Ehlers, Joe Goeman, Sara Lewer, and Andrea Pfeffer
