# Software requirements

## Our vision

Team worldwide wanted to create an application with a practical use, something anyone would be able to pick up and use when deciding on their next vacation or tourist spot to visit. As many people dont know where to visit on their time off, we have made a simple solution to this issue. Travel Bucket is a simple application used for searching up cities and countries to see a list of activities, food, and images of interesting a fun tourist spots around the globe.

This application solves the trouble of having to hunt through multiple sites trying to find exactly what you need to know about hotels in the area, food options, and activities. These are all bundled into easy to read cards displaying all the information a user would need to know when picking a destination to visit.

We all know how tough and time consuming it is to find a hotel, rental car, or find any sort of travel convience. Travel bucket makes these decisions simple by bundling all these hassels right onto our website, and including useful features like a favorites option and profile to view all your saved attractions and places!

## Scope

IN - our project will...

- Display the citys name, some simple information, and an image from the desired city.

- Have a user profile to view saved citys and already visited citys, as well as a corisponding like and visited button for proper filtering.

- Simple and easily navigatable interface.

OUT - our project will not include...

- The ability to make reservations for hotels or flights.

- Any user reviews of city attractions.

- ios and android ports.

### MVP and stretch

Our mvp (minimum viable product) will be a simple website that apon search request, will show a city name specified in the search, and some basic info about the city such as an image, a description and name and country where the city is located. As well as a profile page and about page where the user can view their saved citys and make notes about the specific city, and see the citys they have already visited. The about page will be a dev information page the user can scroll through and view how each member contributed to this project.

Stretch goals include adding more features to a city search, like resturants, flight info, even prices of both tickets to said city and merchandise. As well as even incorperating extra apis with useful city data.

### Functional requirments

1. A user will sign into their account with auth0 to view their profile.

2. A user can save citys they are interested in as either liked citys, or places they have already visited. The profile will be populated by these choices.

3. A user can search for citys and countrys on the home page and see a render of a specific city with its info.

#### Non-Functional requirments

Our website will be protected using auth0 to have every user sign in to access their profile and info. This will allow users to view their specific saved data. Our site (as specified in OUT section) will not feature any ios or android ports, meaning any users on smaller devices will have a different experience from the desired product. Speed of renders for this application will be based on the users wifi connection and not the server (unless specified). Capacity of our city data comes straight from the trip advisor api, meaning not all citys may be included.
