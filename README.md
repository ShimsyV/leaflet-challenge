# Visualizing Data with Leaflet

The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, I will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

My first task is to visualize an earthquake data set.

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. 

I used [this](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) link to access the dataset for the earthquakes in the past week. 

### Import & Visualize the Data

* Created a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.


* The data markers reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.


* The depth of the earth can be found as the third coordinate for each earthquake.


* Included popups that provide additional information about the earthquake when a marker is clicked.


* Created a legend that will provide context for the map data.


* Visualization will look something like the map below.

![img](https://github.com/ShimsyV/leaflet-challenge/blob/main/images/leaflet_1_readme.PNG)



