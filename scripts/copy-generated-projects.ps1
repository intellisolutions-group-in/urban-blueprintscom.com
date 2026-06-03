$artifactDir = "C:\Users\User\.gemini\antigravity-ide\brain\e6e7d9f5-81f0-4192-af14-ecd4b68cebb3"
$destBase = Join-Path (Get-Location) "public\images\projects"

$mappings = @(
    @{ slug = "metro-highway-overpass"; src = "metro_highway_overpass_1780467739838.png" },
    @{ slug = "southern-high-speed-transit"; src = "high_speed_transit_terminal_1780471053073.png" },
    @{ slug = "apex-structural-steel-tower"; src = "apex_structural_steel_tower_1780471069056.png" },
    @{ slug = "vanguard-glass-headquarters"; src = "vanguard_glass_headquarters_1780471087810.png" },
    @{ slug = "valley-water-retention-dam"; src = "valley_water_retention_dam_1780471108720.png" },
    @{ slug = "regional-stormwater-treatment"; src = "regional_stormwater_treatment_1780471126734.png" },
    @{ slug = "urban-eco-distinction-tower"; src = "urban_eco_distinction_tower_1780471145249.png" },
    @{ slug = "estuary-soil-restoration"; src = "estuary_soil_restoration_1780471165752.png" },
    @{ slug = "thames-core-foundation-anchor"; src = "thames_foundation_anchor_1780471184626.png" },
    @{ slug = "west-ridge-retaining-wall"; src = "west_ridge_retaining_wall_1780471201344.png" }
)

Write-Host "Copying generated assets to public/images/projects..."
foreach ($map in $mappings) {
    $slug = $map.slug
    $srcFile = Join-Path $artifactDir $map.src
    $projectDir = Join-Path $destBase $slug

    if (-not (Test-Path $projectDir)) {
        New-Item -ItemType Directory -Path $projectDir -Force | Out-Null
    }

    if (Test-Path $srcFile) {
        # Copy to cover.png
        $destCover = Join-Path $projectDir "cover.png"
        Copy-Item -Path $srcFile -Destination $destCover -Force
        Write-Host "Copied cover for $slug"

        # Copy as placeholders for gallery-1.png, gallery-2.png, gallery-3.png
        for ($i = 1; $i -le 3; $i++) {
            $destGallery = Join-Path $projectDir "gallery-$i.png"
            Copy-Item -Path $srcFile -Destination $destGallery -Force
        }
        Write-Host "Copied gallery placeholders for $slug"
    } else {
        Write-Host "Source file not found: $srcFile"
    }
}

Write-Host "Asset copy completed!"
