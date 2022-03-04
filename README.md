<h1 align="center">Jog Your Memory</h1>

![IMG_1162 (1)](https://user-images.githubusercontent.com/90863226/155852100-a516656f-60f4-4314-b8f2-a6a4c40d5ba6.jpg)


## Overview
Are your local parks and trails far busier than usual?  Is it harder to find a trailhead parking spot or biking, hiking, and camping gear?  It’s not your imagination.  An analysis by AllTrails (trail navigation app) showed the number of logged hikes in 2020 was up 171.4 percent compared to 2019 (4,713,654 vs 1,737,029).

Looking for therapeutic exercise and an escape away from the crowds?  Our mission is to use data science and machine learning to identify lightly trafficked trails with undiscovered greatness; the "Hidden Gems".

## Hypothesis/Question 
Which trail features drive a trails popularity?  
  
## Approach  
  1. Obtain trail information from National Parks Kaggle Data including trail name, location, distance, elevation gain, difficulty, rating, type of trail, features, activities, and map coordinates
  1. Clean the data, create a Pandas DataFrame, and save as a csv file
     * Create separate columns for each trail feature/activity
     * Create a new column for the AllTrails URL & create URL by combining the base URL with the state and trail name
     * Separate the geo-location column into separate lat & lng columns
     * Drop unnecessary columns

  1. Perform statistical analysis on AllTrails dataset
  
     * California has the most National Park Trails by far
     
     ![Trails_per_state](https://user-images.githubusercontent.com/90863226/156673910-6bf1e64a-a5e5-491a-a279-221691d6a463.png)
     
     * The average ratings are very tightly distributed, which makes it difficult to distinguish excellent vs good trails
     
     ![Avg_Rating_Stats](https://user-images.githubusercontent.com/90863226/156673938-3c6bf6a6-e718-4fcd-8992-65df8fabe50c.png)
  
     * Trail popularity, based on number of reviews, shows variation
   
     ![Number_of_Reviews_stats](https://user-images.githubusercontent.com/90863226/156673966-093616a0-1a31-476b-afbf-0a3434e24753.png)
   
  1. Scrape trail reviews from TripAdvisor

  2. Create a vaderSentiment model to assign a Sentiment score to each TripAdvisor review, and get a Sentiment positive/negative rating by trail using an average of each trail's review scores

  1. Run a Fuzzy Match to combine the sentiment scores/ratings subset with the related AllTrails data
  
  1. Use RandomForest to create a model to determine the relationship between a trail's features and its sentiment score/rating
  
  ![RF_Confusion_Matrix](https://user-images.githubusercontent.com/90863226/156674112-0d0ef9b3-edee-4f8a-84af-628a212bc02f.png)
  
  ![RF_Important_Features](https://user-images.githubusercontent.com/90863226/156674129-d6ffabb9-9245-40dd-ac36-b5f1d89ba3d6.png)
  
  1. Apply the model to the AllTrails dataset to predict the sentiment score/rating to every trail in the dataset, and use this in conjunction with the number of reviews to find the "Diamonds in the Rough" 
  
  1. Use HTML, Javascript, and CSS to display results on a webpage
  
     * User inputs: Location (city and state), Trail Difficulty, Desired Features

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
