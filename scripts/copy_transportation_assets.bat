@echo off
set DEST=d:\urban-blueprints\public\images\services\transportation
mkdir "%DEST%" 2>nul

echo Downloading premium high-resolution Transportation Engineering assets...
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80' -OutFile '%DEST%\hero-transportation.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80' -OutFile '%DEST%\main-transportation.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' -OutFile '%DEST%\planning.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80' -OutFile '%DEST%\design.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80' -OutFile '%DEST%\construction.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80' -OutFile '%DEST%\maintenance.webp' -UseBasicParsing"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=800&q=80' -OutFile '%DEST%\operations.webp' -UseBasicParsing"

echo Done! All premium transportation assets downloaded successfully!
pause
