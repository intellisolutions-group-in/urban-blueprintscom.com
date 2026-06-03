@echo off
set DEST=d:\urban-blueprints\public\images\services\water-resources
mkdir "%DEST%" 2>nul

echo Downloading premium high-resolution Water Resources Engineering assets...
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80' -OutFile '%DEST%\hero-water.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80' -OutFile '%DEST%\main-water.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&q=80' -OutFile '%DEST%\water-supply.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80' -OutFile '%DEST%\water-treatment.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80' -OutFile '%DEST%\wastewater-management.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1518098268026-4e43a1a009de?w=800&q=80' -OutFile '%DEST%\flood-control.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80' -OutFile '%DEST%\hydropower-development.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80' -OutFile '%DEST%\water-conservation.webp' -UseBasicParsing"

echo Done! All premium water resources assets downloaded successfully!
pause
