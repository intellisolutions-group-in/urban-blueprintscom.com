$src = "C:\Users\User\.gemini\antigravity-ide\brain\a4028606-7cee-4887-aa1d-a9c96b36b5de"
$destBase = "d:\urban-blueprints\public\images\services"

# Create directories if they do not exist
New-Item -ItemType Directory -Force -Path "$destBase\water-resources"
New-Item -ItemType Directory -Force -Path "$destBase\transportation"

# Water Resources Mappings
Copy-Item -Path "$src\water_hero_1779880031482.png" -Destination "$destBase\water-resources\hero-water.webp" -Force
Copy-Item -Path "$src\water_hero_1779880031482.png" -Destination "$destBase\water-resources\hero-water.png" -Force

Copy-Item -Path "$src\water_main_1779880051636.png" -Destination "$destBase\water-resources\main-water.webp" -Force
Copy-Item -Path "$src\water_main_1779880051636.png" -Destination "$destBase\water-resources\main-water.png" -Force

Copy-Item -Path "$src\water_supply_1779880173610.png" -Destination "$destBase\water-resources\water-supply.webp" -Force
Copy-Item -Path "$src\water_supply_1779880173610.png" -Destination "$destBase\water-resources\water-supply.png" -Force

Copy-Item -Path "$src\water_treatment_1779880071688.png" -Destination "$destBase\water-resources\water-treatment.webp" -Force
Copy-Item -Path "$src\water_treatment_1779880071688.png" -Destination "$destBase\water-resources\water-treatment.png" -Force

Copy-Item -Path "$src\water_waste_1779880092954.png" -Destination "$destBase\water-resources\wastewater-management.webp" -Force
Copy-Item -Path "$src\water_waste_1779880092954.png" -Destination "$destBase\water-resources\wastewater-management.png" -Force

Copy-Item -Path "$src\water_flood_1779880113076.png" -Destination "$destBase\water-resources\flood-control.webp" -Force
Copy-Item -Path "$src\water_flood_1779880113076.png" -Destination "$destBase\water-resources\flood-control.png" -Force

Copy-Item -Path "$src\water_hydro_1779880134243.png" -Destination "$destBase\water-resources\hydropower-development.webp" -Force
Copy-Item -Path "$src\water_hydro_1779880134243.png" -Destination "$destBase\water-resources\hydropower-development.png" -Force

Copy-Item -Path "$src\water_conserve_1779880153316.png" -Destination "$destBase\water-resources\water-conservation.webp" -Force
Copy-Item -Path "$src\water_conserve_1779880153316.png" -Destination "$destBase\water-resources\water-conservation.png" -Force

# Transportation Mappings
Copy-Item -Path "$src\construction_trans_1779876310925.png" -Destination "$destBase\transportation\construction.webp" -Force
Copy-Item -Path "$src\construction_trans_1779876310925.png" -Destination "$destBase\transportation\construction-new.jpg" -Force
Copy-Item -Path "$src\construction_trans_1779876310925.png" -Destination "$destBase\transportation\construction.png" -Force

Copy-Item -Path "$src\design_trans_1779876330904.png" -Destination "$destBase\transportation\design.webp" -Force
Copy-Item -Path "$src\design_trans_1779876330904.png" -Destination "$destBase\transportation\design-new.jpg" -Force
Copy-Item -Path "$src\design_trans_1779876330904.png" -Destination "$destBase\transportation\design.png" -Force

Write-Output "All premium generated images copied successfully!"
