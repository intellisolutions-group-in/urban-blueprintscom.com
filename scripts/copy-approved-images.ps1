$artifactDir = "C:\Users\User\.gemini\antigravity-ide\brain\e6e7d9f5-81f0-4192-af14-ecd4b68cebb3"
$destBase = Join-Path (Get-Location) "public\images\projects"

$mappings = @(
    @{ slug = "metro-highway-overpass"; src = "metro_highway_overpass_1780467739838.png"; destName = "metro-highway-overpass-interchange.png" },
    @{ slug = "southern-high-speed-transit"; src = "high_speed_transit_terminal_1780471053073.png"; destName = "southern-high-speed-transit-terminal.png" },
    @{ slug = "apex-structural-steel-tower"; src = "apex_structural_steel_tower_1780471069056.png"; destName = "apex-structural-steel-tower.png" },
    @{ slug = "vanguard-glass-headquarters"; src = "vanguard_glass_headquarters_1780471087810.png"; destName = "vanguard-glass-headquarters.png" },
    @{ slug = "valley-water-retention-dam"; src = "valley_water_retention_dam_1780471108720.png"; destName = "valley-water-retention-dam.png" },
    @{ slug = "regional-stormwater-treatment"; src = "regional_stormwater_treatment_1780471126734.png"; destName = "regional-stormwater-treatment-network.png" },
    @{ slug = "urban-eco-distinction-tower"; src = "urban_eco_distinction_tower_1780471145249.png"; destName = "urban-eco-distinction-tower.png" },
    @{ slug = "estuary-soil-restoration"; src = "estuary_soil_restoration_1780471165752.png"; destName = "estuary-soil-restoration-project.png" },
    @{ slug = "thames-core-foundation-anchor"; src = "thames_foundation_anchor_1780471184626.png"; destName = "thames-core-foundation-anchor.png" },
    @{ slug = "west-ridge-retaining-wall"; src = "west_ridge_retaining_wall_1780471201344.png"; destName = "west-ridge-retaining-wall-system.png" }
)

Write-Host "Copying generated assets to public/images/projects with meaningful filenames..."
foreach ($map in $mappings) {
    $slug = $map.slug
    $srcFile = Join-Path $artifactDir $map.src
    $projectDir = Join-Path $destBase $slug
    $destFile = Join-Path $projectDir $map.destName

    if (-not (Test-Path $projectDir)) {
        New-Item -ItemType Directory -Path $projectDir -Force | Out-Null
    }

    if (Test-Path $srcFile) {
        Copy-Item -Path $srcFile -Destination $destFile -Force
        Write-Host "Copied $srcFile -> $destFile"
    } else {
        Write-Error "Source file not found: $srcFile"
    }
}
Write-Host "Asset copy completed!"
