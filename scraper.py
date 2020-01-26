from bs4 import BeautifulSoup
import requests
import json

listingurl = 'http://menu.dining.ucla.edu/Menus/Covel/Today/Dinner'
response = requests.get(listingurl)
soup = BeautifulSoup(response.text, 'html.parser')

'''
for item in soup.findAll("li", {"class": "menu-item"}):
    print(item.span.a.getText())
'''

data = {}
data["menuItems"] = [
    {
        "name": item.span.a.getText(),
        "infoUrl": item.span.a['href']
    }
    for item in soup.findAll("li", {"class": "menu-item"})
]
print(data)

with open('foodData.json', 'w') as outfile:
    json.dump(data, outfile)

'''
{
  "menuItems": [
    {
      "name": "Steak",
      "calories": 600,
      "ingredients": [0, 1, 2]
    }
  ],
  "ingredients": [
    {
      "name": "carrots",
      "cf": 230
    },
        {
      "name": "steak",
      "cf": 130
    },
        {
      "name": "cheese",
      "cf": 20
    }
  ]
}
'''