import requests
from bs4 import BeautifulSoup
import csv
import json

url = "https://nmamit.nitte.edu.in/department-computer-science.php"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

faculty_data = []
leadership_boxes = soup.find_all('div', class_='leadership-box')

for box in leadership_boxes:
    name = box.find('h3').text.strip()
    img_src = box.find('img')['src']
    designation = box.find('p').text.strip()
    modal_id = box.find('a')['data-bs-target'][1:]
    modal = soup.find('div', id=modal_id)
    accordion_items = modal.find_all('div', class_='accordion-item')
    faculty_info = {
        'name': name,
        'img_src': img_src,
        'designation': designation,
        'info': [],
    }

    for item in accordion_items:
        header = item.find(['h2', 'h3', 'h4', 'h5', 'h6'])
        if header:
            header_text = header.text.strip()
            content = item.find('div', class_='accordion-body').text.strip()
            faculty_info['info'].append({header_text: content})

    faculty_data.append(faculty_info)

with open('faculty_data.json', 'w', encoding='utf-8') as jsonfile:
    json.dump(faculty_data, jsonfile, indent=4)


with open('faculty_data.ts', 'w', encoding='utf-8') as tsfile:
    tsfile.write("const facultyData: {name: string; img_src: string; designation: string; info: { [key: string]: string }[] }[] = ")
    tsfile.write(json.dumps(faculty_data, indent=4))
    tsfile.write(";\n\nexport default facultyData;\n")