import requests
from bs4 import BeautifulSoup
import json
from urllib.parse import urljoin

def fetch_club_data_from_website():
    # URL of the website
    base_url = "https://nmamit.nitte.edu.in/"
    clubs_url = urljoin(base_url, "non-technical-clubs.php")

    # Send an HTTP GET request to the website
    response = requests.get(clubs_url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find the table containing club data
        table = soup.find("table", class_="rwd-table")

        # Initialize an empty list to store club data
        club_data = []

        # Iterate over each row in the table, starting from the second row (skipping header)
        for row in table.find_all("tr")[1:]:
            # Extract data from each cell in the row
            cells = row.find_all("td")
            sl_no = cells[0].text.strip()
            name = cells[1].strong.text.strip()
            
            # Check if the description exists
            description_tag = cells[1].find('p')
            description = description_tag.text.strip() if description_tag else None
            
            # Check if the third cell contains an image
            img_cell = cells[2]
            img_url = None
            img_tag = img_cell.find("img")
            if img_tag:
                img_url = urljoin(base_url, img_tag["src"].strip())

            # Create a dictionary to store club data
            club = {
                "Sl. No.": sl_no,
                "Name": name,
                "Description": description,
                "Image URL": img_url
            }

            # Add club data to the list
            club_data.append(club)

        # Write the club data to a JSON file
        with open('club_data.json', 'w') as f:
            json.dump(club_data, f)

        return club_data

    else:
        print("Failed to fetch data. Status code:", response.status_code)
        return None

clubs = fetch_club_data_from_website()