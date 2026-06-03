@echo off
set DEST=d:\urban-blueprints\public\images\services\water-resources
mkdir "%DEST%" 2>nul

echo Downloading water assets via curl...
curl -L -A "Mozilla/5.0" -o "%DEST%\hero-water.png" "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80"
curl -L -A "Mozilla/5.0" -o "%DEST%\main-water.png" "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
curl -L -A "Mozilla/5.0" -o "%DEST%\water-supply.png" "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?w=800&q=80"
curl -L -A "Mozilla/5.0" -o "%DEST%\water-treatment.png" "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80"
curl -L -A "Mozilla/5.0" -o "%DEST%\wastewater-management.png" "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
curl -L -A "Mozilla/5.0" -o "%DEST%\flood-control.png" "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
curl -L -A "Mozilla/5.0" -o "%DEST%\hydropower-development.png" "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
curl -L -A "Mozilla/5.0" -o "%DEST%\water-conservation.png" "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80"

echo Done!
