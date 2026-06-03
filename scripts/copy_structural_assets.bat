@echo off
set DEST=d:\urban-blueprints\public\images\services\structural
mkdir "%DEST%" 2>nul

echo Downloading premium high-resolution Structural Engineering assets...
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' -OutFile '%DEST%\hero-structural.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80' -OutFile '%DEST%\main-structural.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?w=800&q=80' -OutFile '%DEST%\statics.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80' -OutFile '%DEST%\dynamics.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80' -OutFile '%DEST%\materials-science.webp' -UseBasicParsing"

echo Done! All premium structural assets downloaded successfully!
pause
