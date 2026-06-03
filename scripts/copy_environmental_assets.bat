@echo off
set DEST=d:\urban-blueprints\public\images\services\environmental
mkdir "%DEST%" 2>nul

echo Downloading premium high-resolution Environmental Engineering assets...
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80' -OutFile '%DEST%\hero-environmental.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80' -OutFile '%DEST%\main-environmental.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80' -OutFile '%DEST%\water-resource-management.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80' -OutFile '%DEST%\wastewater-treatment.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80' -OutFile '%DEST%\solid-waste-management.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80' -OutFile '%DEST%\environmental-impact-assessment.webp' -UseBasicParsing"

echo Done! All premium environmental assets downloaded successfully!
pause
