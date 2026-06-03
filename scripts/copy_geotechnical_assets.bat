@echo off
set DEST=d:\urban-blueprints\public\images\services\geotechnical
mkdir "%DEST%" 2>nul

echo Downloading premium high-resolution Geotechnical Engineering assets...
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=1200&q=80' -OutFile '%DEST%\hero-geotechnical.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80' -OutFile '%DEST%\soil-testing-pillar.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80' -OutFile '%DEST%\excavation-earthworks.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80' -OutFile '%DEST%\slope-stability-analysis.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80' -OutFile '%DEST%\contaminated-soil-remediation.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80' -OutFile '%DEST%\groundwater-environmental-sampling.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80' -OutFile '%DEST%\geosynthetics-soil-stabilization.webp' -UseBasicParsing"

echo Done! All premium geotechnical assets downloaded successfully!
pause
