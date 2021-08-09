This code was given by a company as a assessment for React Developer profile.

My version of this problem is hosted here: https://colors-api.netlify.app/resources

The Detail about the test is as follows,

The app fetched API to get data and display color cards.

Following were the requirements of a test React App to be built:
  There will be 2 routes in the react app
  /resources
  /resources/{id} where id would be a number

1. /resources route -will call this api- https://reqres.in/api/unknown

The API returns JSON with a list of data item

[
  {
    "id": 1,
    "name": "cerulean",
    "year": 2000,
    "color": "#98B2D1",
    "pantone_value": "15-4020"
  },
  {
    "id": 2,
    "name": "fuchsia rose",
    "year": 2001,
    "color": "#C74375",
    "pantone_value": "17-2031"
  }
]



Use this data to display grid of boxes like this,

![colors](https://user-images.githubusercontent.com/88103324/128742339-d310fd27-d886-46cd-91de-a95b3a0a5a8a.PNG)


On click of any of the box in the grid, the app should redirect to the detailed
component below. Plus points if you make your grid responsive. Also note the
color of the box is in the API response.

2. Detailed Resource route and compoonent: resources/{id}
API to use - https://reqres.in/api/unknown/2
Response will be like below


{
  "data": {
      "id": 2,
      "name": "fuchsia rose",
      "year": 2001,
      "color": "#C74375",
      "pantone_value": "17-2031"
      }
}

This will simply show a single big box with pantone value like below

![bigCard](https://user-images.githubusercontent.com/88103324/128742908-4f0160db-dcff-447e-b187-9d4c3080606c.PNG)

Plus points, if you have detailed routing as below:
When the user directly accesses the app using the react app link like
http://localhost:3000/resources/1, then the app should hit the above detailed API
and show the only one big Box on the page with Pantone value. However, if the
user is on the grid page and clicks on a box in the grid, then the browser
URL(route) should change with the id of the box. And, that box should show on
the screen with pantone value. Please let us know if any doubts.



