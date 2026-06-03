import urllib.request
import os

images = {
    "hero-water.png": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", # Beautiful nature reservoir/dam lake
    "main-water.png": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80", # Construction pipeline site
    "water-supply.png": "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?w=800&q=80", # Valves and pumps
    "water-treatment.png": "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80", # Laboratory filtration tap
    "wastewater-management.png": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", # Industrial clarification basins
    "flood-control.png": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", # Beautiful concrete lock gate
    "hydropower-development.png": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", # High tech hydro turbine plant
    "water-conservation.png": "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80" # Drip-irrigation fields
}

target_dir = r"d:\urban-blueprints\public\images\services\water-resources"
os.makedirs(target_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for filename, url in images.items():
    path = os.path.join(target_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Successfully downloaded: {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
