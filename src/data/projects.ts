export interface ProjectItem {
  slug: string;
  title: string;
  image: string;
  description: string;
  disciplineSlug: string;
  disciplineName: string;
  challenge: string;
  solution: string;
  objectives: string[];
  scope: string[];
  gallery: string[];
  timeline: { phase: string; date: string; description: string }[];
  stats: { label: string; value: string }[];
  outcomes: string[];
  sustainability: string;
  metaDescription: string;
}

export const projectsData: ProjectItem[] = [
  {
    slug: "metro-highway-overpass",
    disciplineSlug: "transportation-engineering",
    disciplineName: "Transportation Engineering",
    title: "Metro Highway Overpass Interchange",
    image: "/images/home/project-metro.webp",
    description: "Designed a multi-tier structural concrete overpass reducing commuter congestion by over 42% across regional routes.",
    challenge: "Managing massive active traffic flows during construction while maintaining structural integrity in a highly congested urban environment.",
    solution: "We engineered a dynamic pre-cast modular concrete overpass system and optimized construction phases using a digital twin layout.",
    metaDescription: "Explore the Metro Highway Overpass case study. Overcoming urban congestion using pre-cast concrete structures, dynamic phases, and digital twins.",
    objectives: [
      "Mitigate peak-hour traffic delays at the key regional corridor by 40%.",
      "Minimize ambient noise and structural vibration in surrounding residential zones.",
      "Incorporate intelligent traffic monitoring and automated storm drainage."
    ],
    scope: [
      "Comprehensive structural analysis and design of flyovers and access ramps.",
      "Precast concrete beam fabrication oversight and load testing.",
      "Dynamic traffic sequencing and digital twin alignment mapping."
    ],
    gallery: [
      "/images/services/transportation/extra/planning-new.jpg",
      "/images/services/transportation/extra/design-new.jpg",
      "/images/services/transportation/extra/construction-new.jpg"
    ],
    timeline: [
      { phase: "Planning & Feasibility", date: "Q1 2024", description: "Completed geological boring tests and commuter traffic load simulations." },
      { phase: "Detailed Structural Design", date: "Q3 2024", description: "Engineered precast flyover decks and calculated seismic drift limits." },
      { phase: "Active Construction", date: "Q1 2025", description: "Sequenced night-time crane lifts to place heavy overpass segments safely." },
      { phase: "Commissioning", date: "Q4 2025", description: "Successfully opened all highway lanes and integrated automated sensors." }
    ],
    stats: [
      { label: "Commute Reduction", value: "42%" },
      { label: "Concrete Volume", value: "85k Tons" },
      { label: "Safety Record", value: "Zero Incidents" }
    ],
    outcomes: [
      "Achieved a 42% increase in corridor traffic capacity.",
      "Decreased average intersection transit times by 12 minutes.",
      "Completed execution 6 weeks ahead of the baseline schedule."
    ],
    sustainability: "Constructed with low-carbon aggregate concrete mixes and designed with permeable green borders to naturally capture and filter runoffs."
  },
  {
    slug: "southern-high-speed-transit",
    disciplineSlug: "transportation-engineering",
    disciplineName: "Transportation Engineering",
    title: "Southern High-Speed Transit Terminal",
    image: "/images/services/transportation/extra/main-transportation-new.jpg",
    description: "Delivered geometric alignment, structural load calculations, and geotechnical platform stabilization.",
    challenge: "Integrating high-speed heavy rail with urban micro-mobility lines over highly soft geotechnical clay profiles.",
    solution: "Our team provided deep cement mixing stabilization and structural load dissipation arrays to ensure smooth train transitions.",
    metaDescription: "Bristol High-Speed Transit Terminal case study. Overcoming soft clay subgrade with deep cement mixing and load dissipation arrays.",
    objectives: [
      "Create a modern multimodal interchange supporting up to 25,000 daily commuters.",
      "Ensure absolute subgrade stability under dynamic dynamic rail stresses.",
      "Achieve full accessibility and low carbon foot-traffic circulation loops."
    ],
    scope: [
      "Dynamic dynamic load and structural settlement calculations.",
      "Subsurface drilling, mapping, and deep soil mixing stabilization.",
      "Designing footbridges, station platforms, and canopy shelters."
    ],
    gallery: [
      "/images/services/transportation/extra/maintenance-new.jpg",
      "/images/services/transportation/extra/operations-new.jpg",
      "/images/services/transportation/extra/planning-new.jpg"
    ],
    timeline: [
      { phase: "Geotechnical Analysis", date: "Q2 2023", description: "Mapped Bristol clay profiles and completed deep pile settlement models." },
      { phase: "Ground Stabilization", date: "Q4 2023", description: "Injected dynamic cement stabilizing binders to reinforce station subgrade." },
      { phase: "Platform Erection", date: "Q2 2024", description: "Built dynamic dynamic load-sharing platform foundations and steel trusses." },
      { phase: "Final Handover", date: "Q1 2025", description: "Fully integrated signaling arrays and dynamic micro-mobility paths." }
    ],
    stats: [
      { label: "Daily Commuters", value: "25,000" },
      { label: "Ground Settlement", value: "0.2mm Max" },
      { label: "BIM Coordination", value: "LOD 400" }
    ],
    outcomes: [
      "Delivered structural subgrade bearing capacities that exceed the specifications by 18%.",
      "Successfully integrated heavy rail, buses, and active transit paths into a single hub.",
      "Obtained high scores on BREEAM transport criteria."
    ],
    sustainability: "Equipped with thin-film solar roof arrays generating 30% of the station's grid needs, and incorporates active greywater harvesting loops."
  },
  {
    slug: "apex-structural-steel-tower",
    disciplineSlug: "structural-engineering",
    disciplineName: "Structural Engineering",
    title: "Apex Structural Steel Tower",
    image: "/images/home/project-tower.webp",
    description: "Calculated structural coordinates and core structural wind integrity under severe seismic simulations.",
    challenge: "Securing sway control under lateral wind loading and seismic pressures on a slender steel frame building.",
    solution: "Designed a high-performance outrigger steel truss system and tuned mass dampeners to absorb dynamic kinetic wind energy.",
    metaDescription: "Manchester High-Rise structural case study. Advanced high-tensile steel outriggers and mass dampeners for dynamic wind sway protection.",
    objectives: [
      "Limit top-of-tower wind drift within safe human occupant tolerance limits.",
      "Ensure robust seismic performance under maximum expected earthquake levels.",
      "Design a highly efficient, space-maximizing structural grid layout."
    ],
    scope: [
      "Advanced 3D Finite Element Analysis (FEA) modeling under dynamic forces.",
      "Tuned mass dampener design, fabrication modeling, and verification.",
      "Optimizing outrigger structural steel joint assemblies."
    ],
    gallery: [
      "/images/services/structural/statics-new.webp",
      "/images/services/structural/dynamics-new.webp",
      "/images/services/structural/materials-science-new.webp"
    ],
    timeline: [
      { phase: "Computational FEA", date: "Q1 2023", description: "Built advanced 3D FEA models to predict wind shears." },
      { phase: "Outrigger Framework", date: "Q3 2023", description: "Erected high-tensile outrigger core steel trusses and columns." },
      { phase: "Dampener Installation", date: "Q1 2024", description: "Suspended the 400-ton tuned mass dampener near the penthouse floors." },
      { phase: "Interior Outfitting", date: "Q4 2024", description: "Completed facade panels and finalized column monitoring networks." }
    ],
    stats: [
      { label: "Building Height", value: "210 Meters" },
      { label: "Structural Steel", value: "14k Tons" },
      { label: "Wind Load Dampening", value: "35% Reduced" }
    ],
    outcomes: [
      "Limited lateral wind sway to a negligible drift fraction.",
      "Reduced raw structural steel utilization by 12% via optimized computational modeling.",
      "Provided an unobstructed interior floor plan maximizing commercial leasing spaces."
    ],
    sustainability: "Utilizes 95% recycled steel sections and high-performance smart glass curtain walls to slash heating/cooling energy footprints."
  },
  {
    slug: "vanguard-glass-headquarters",
    disciplineSlug: "structural-engineering",
    disciplineName: "Structural Engineering",
    title: "Vanguard Glass Headquarters",
    image: "/images/home/project-vanguard.webp",
    description: "Engineered high-tensile column distributions and complex glass curtain-wall support fittings.",
    challenge: "Supporting massive floor-to-ceiling structural glass sheets with minimal visible columns or frames.",
    solution: "We designed point-supported glass fittings using high-tensile custom stainless steel spiders and load-sharing tension trusses.",
    metaDescription: "London Vanguard Glass Headquarters structural case study. Point-supported glass fittings, spider joints, and load-sharing tension trusses.",
    objectives: [
      "Achieve an ultra-transparent building exterior façade with maximum natural light.",
      "Integrate load-sharing tension trusses capable of taking large wind forces.",
      "Minimize column footprint on the edge perimeter to optimize floor space."
    ],
    scope: [
      "Façade engineering and high-tensile stress point mapping.",
      "Testing stainless steel spider fittings for heavy shear and load.",
      "BIM modeling for architectural facade coordinates coordination."
    ],
    gallery: [
      "/images/services/structural/main-structural-new.webp",
      "/images/services/structural/statics-new.webp",
      "/images/services/structural/materials-science-new.webp"
    ],
    timeline: [
      { phase: "Façade Design", date: "Q2 2022", description: "Completed structural stress maps for customized large-format glass facade grids." },
      { phase: "Truss Fabrication", date: "Q4 2022", description: "Manufactured high-tensile support cables and dynamic anchor plates." },
      { phase: "Glass Hanging", date: "Q2 2023", description: "Successfully hung heavy double-glazed panels with millimeter precision." },
      { phase: "Handover", date: "Q4 2023", description: "Completed structural integrity inspections and finalized glass testing." }
    ],
    stats: [
      { label: "Glass Area", value: "45k sq ft" },
      { label: "Spider Fittings", value: "850 Points" },
      { label: "Daylight Harvest", value: "82% Coverage" }
    ],
    outcomes: [
      "Accomplished complete structural facade transparency with zero perimeter columns.",
      "Maintained glass pane structural stresses below safety thresholds.",
      "Achieved elite LEED Gold parameters rating for daylight design."
    ],
    sustainability: "Equipped with smart electrochromic active tinting glass that automatically darkens under heavy direct sunlight to cut mechanical cooling loads."
  },
  {
    slug: "valley-water-retention-dam",
    disciplineSlug: "water-resources-engineering",
    disciplineName: "Water Resources Engineering",
    title: "Valley Water Retention Dam",
    image: "/images/home/project-dam.webp",
    description: "Designed advanced hydrological concrete spillways and high-volume retention barriers to mitigate downstream flood risks.",
    challenge: "Controlling high spillway velocities and downstream scour during maximum flood discharge events.",
    solution: "Constructed dynamic concrete baffled stepped spillways and deep energy dissipation basins to calm water energy.",
    metaDescription: "Wales Valley Water Retention Dam case study. Stepped concrete spillways and energy dissipation basins to prevent riverbed scouring.",
    objectives: [
      "Establish a robust 1.2 billion gallon water reservoir for seasonal reserves.",
      "Calm high water discharge velocities to protect downstream river ecosystems.",
      "Ensure 100% concrete structural safety against extreme flood pressures."
    ],
    scope: [
      "Hydraulic design and scaled computational fluid dynamic (CFD) modeling.",
      "Concrete structural reinforcement detailing and stress maps.",
      "Downstream ecological impact modeling and scour mitigation."
    ],
    gallery: [
      "/images/services/water-resources/water-treatment.webp",
      "/images/services/water-resources/weast-water-management.webp",
      "/images/services/water-resources/flood-control.webp"
    ],
    timeline: [
      { phase: "CFD Hydrology", date: "Q3 2023", description: "Completed dynamic computational fluid flow models and calculated water forces." },
      { phase: "Concrete Pouring", date: "Q1 2024", description: "Completed mass concrete foundation casting using advanced thermal controls." },
      { phase: "Spillway Assembly", date: "Q3 2024", description: "Assembled the stepped spillway grids and scour prevention concrete teeth." },
      { phase: "Reservoir Filling", date: "Q2 2025", description: "Successfully filled the dam reservoir and monitored structural stress telemetry." }
    ],
    stats: [
      { label: "Reservoir Volume", value: "1.2B Gal" },
      { label: "Peak Spillway Flow", value: "4.5k cu m/s" },
      { label: "Service Life", value: "120 Years" }
    ],
    outcomes: [
      "Established secure water storage reserves for over 150,000 regional homes.",
      "Eliminated riverbed scouring downstream through hydraulic energy dissipation.",
      "Passed all rigorous government safety audits with perfect structural scores."
    ],
    sustainability: "Integrates specialized eco-corridors for migratory fish pathways and is constructed with zero-carbon mass concrete blends."
  },
  {
    slug: "regional-stormwater-treatment",
    disciplineSlug: "water-resources-engineering",
    disciplineName: "Water Resources Engineering",
    title: "Regional Stormwater Treatment Network",
    image: "/images/services/water-resources/water-treatment.webp",
    description: "Engineered underground retention vaults, smart overflow spillways, and ecological bioretention swales.",
    challenge: "Managing massive sudden stormwater runoffs and preventing heavy contaminants from entering local marine ecosystems.",
    solution: "We designed large underground concrete retention vaults integrated with automatic smart telemetry valves and bio-filters.",
    metaDescription: "Cardiff Regional Stormwater Treatment Network case study. Underground concrete retention vaults and smart automated telemetry valves.",
    objectives: [
      "Manage sudden peak storm runoff surges up to 18,000 cubic meters per hour.",
      "Filter heavy hydrocarbons and trash from urban road water runoffs.",
      "Prevent urban flooding along flat coastal regions."
    ],
    scope: [
      "Hydrological basin calculations and storm pipe routing.",
      "Structural design of subterranean heavy-load concrete vaults.",
      "Integration of automated IoT sensors and water treatment filtration loops."
    ],
    gallery: [
      "/images/services/water-resources/water-supply.webp",
      "/images/services/water-resources/hydropower-development.webp",
      "/images/services/water-resources/water-conservation.webp"
    ],
    timeline: [
      { phase: "Subterranean Mapping", date: "Q1 2023", description: "Completed ground penetration radar scans and routed subterranean grids." },
      { phase: "Vault Excavation", date: "Q3 2023", description: "Excavated massive pits and poured reinforced retaining walls." },
      { phase: "Telemetry Setup", date: "Q1 2024", description: "Installed automatic IoT valves to divert overflow water dynamically." },
      { phase: "Swale Landscaping", date: "Q3 2024", description: "Completed ecological bio-swales with sand filters and custom vegetation." }
    ],
    stats: [
      { label: "Surge Capacity", value: "18k cu m/hr" },
      { label: "Vault Depth", value: "14 Meters" },
      { label: "IoT Sensor Nodes", value: "120 Units" }
    ],
    outcomes: [
      "Eliminated street-level flooding in critical urban districts during heavy rainfall.",
      "Decreased direct raw wastewater spills into the local bay to absolute zero.",
      "Achieved a 94% removal rate of hydrocarbons and suspended solids."
    ],
    sustainability: "Features lush surface bioretention swales that double as urban green pockets, improving biodiversity and recharging groundwater tables naturally."
  },
  {
    slug: "urban-eco-distinction-tower",
    disciplineSlug: "environmental-engineering",
    disciplineName: "Environmental Engineering",
    title: "Urban Eco-Distinction Tower",
    image: "/images/services/environmental/enviromental-hero.webp",
    description: "Assessed microclimate wind effects, active biological green facade integration, and greywater recycling systems.",
    challenge: "Achieving outstanding self-sustaining eco-performance for a high-density, multi-tenant commercial skyscraper.",
    solution: "Designed biological green facades for natural shading, integrated greywater filtration, and high-efficiency heat exchangers.",
    metaDescription: "Leeds Urban Eco-Distinction Tower environmental study. Biological green facades, microclimates, and BREEAM Outstanding greywater loops.",
    objectives: [
      "Establish a self-sustaining eco-commercial center with minimal grid load.",
      "Achieve BREEAM Outstanding rating through comprehensive green systems.",
      "Recycle 100% of non-toilet water (greywater) for localized irrigation."
    ],
    scope: [
      "Building microclimate simulation and thermal wind analysis.",
      "Designing greywater biological sand filters and mechanical treatment loops.",
      "Green wall vertical structural load calculations."
    ],
    gallery: [
      "/images/services/environmental/main-environmental.png",
      "/images/services/environmental/water-resource.webp",
      "/images/services/environmental/wastewater-treatment.webp"
    ],
    timeline: [
      { phase: "Microclimate Modeling", date: "Q2 2023", description: "Simulated localized thermal wind loops and solar gain boundaries." },
      { phase: "Greywater Pipelining", date: "Q4 2023", description: "Piped dedicated greywater collection lines and subterranean filters." },
      { phase: "Vertical Planting", date: "Q2 2024", description: "Installed lightweight structural green pockets and irrigation systems." },
      { phase: "BREEAM Audit", date: "Q1 2025", description: "Completed final compliance audits, securing the BREEAM Outstanding rating." }
    ],
    stats: [
      { label: "BREEAM Score", value: "92.4%" },
      { label: "Water Savings", value: "45% Reduced" },
      { label: "Greywater Filtered", value: "12k Liters/day" }
    ],
    outcomes: [
      "Obtained the elite BREEAM Outstanding certification.",
      "Dramatically reduced the building's operating energy footprint.",
      "Maintained a thriving vertical ecosystem with minimal water utility grids."
    ],
    sustainability: "Incorporates high-yield vertical urban farms and relies fully on biologically filtered rainwater for maintaining the facade's vegetation."
  },
  {
    slug: "estuary-soil-restoration",
    disciplineSlug: "environmental-engineering",
    disciplineName: "Environmental Engineering",
    title: "Estuary Soil Restoration Project",
    image: "/images/services/environmental/water-resource.webp",
    description: "Calculated sub-surface environmental toxicity coordinates and designed biosol remediation barriers.",
    challenge: "Restoring an industrial brownfield filled with complex heavy metals without dumping soil into landfills.",
    solution: "Implemented targeted phytoremediation using selective plant life and biological bio-venting to safely consume toxins in-situ.",
    metaDescription: "Liverpool Estuary Soil Restoration environmental study. In-situ phytoremediation, heavy metals extraction, and biological bio-venting.",
    objectives: [
      "Reclaim 45 hectares of highly toxic industrial bay soil.",
      "Extract toxic heavy metals without generating air contamination during excavation.",
      "Re-establish a thriving biological estuary marsh ecosystem."
    ],
    scope: [
      "Toxicity mapping and subsurface soil core analysis.",
      "Selection and cultivation of hyperaccumulating plant species.",
      "Designing bio-venting oxygen injection tubes."
    ],
    gallery: [
      "/images/services/environmental/main-environmental.png",
      "/images/services/environmental/solid-waste.webp",
      "/images/services/environmental/impact-assessment.png"
    ],
    timeline: [
      { phase: "Soil Toxicity Core", date: "Q1 2023", description: "Collected 450 deep soil core samples and mapped heavy metal coordinates." },
      { phase: "Phytoremediation Setup", date: "Q3 2023", description: "Cultivated and planted hyperaccumulating willows and dynamic poplars." },
      { phase: "Bio-venting Startup", date: "Q1 2024", description: "Installed subsurface oxygen injection grids to activate natural bacteria." },
      { phase: "Ecological Completion", date: "Q4 2024", description: "Verified massive drops in toxic loads and welcomed native bird life." }
    ],
    stats: [
      { label: "Remediated Soil", value: "45 Hectares" },
      { label: "Heavy Metals Extracted", value: "92% Cleared" },
      { label: "In-situ Cost Savings", value: "60% Saved" }
    ],
    outcomes: [
      "Remediated 45 hectares of toxic ground safely at a fraction of transport costs.",
      "Secured safe residential-adjacent ground parameters.",
      "Established a vibrant natural marsh park that acts as a community green hub."
    ],
    sustainability: "Completely carbon-negative project utilizing natural bio-remediation systems rather than heavy excavation machinery and chemical washers."
  },
  {
    slug: "thames-core-foundation-anchor",
    disciplineSlug: "geotechnical-engineering",
    disciplineName: "Geotechnical Engineering",
    title: "Thames Core Foundation Anchor",
    image: "/images/services/geotechnical/hero-geotechnical-new.webp",
    description: "Analyzed complex alluvial silt layers to recommend optimal friction pile geometries for high-rise towers.",
    challenge: "Anchoring a high-load skyscraper foundation into shifting river silt with minimal structural settlement risk.",
    solution: "We calculated geotechnical load profiles and designed optimized deep friction piles going 90m deep into hard clays.",
    metaDescription: "London Thames Core Foundation geotechnical study. Friction pile foundations, alluvial silt analysis, and deep borings into London clay.",
    objectives: [
      "Ensure structural stability for a heavy commercial skyscraper on river borders.",
      "Reach zero structural settlement under heavy lateral wind and dead loads.",
      "Provide high-accuracy structural bearing profiles for London clay layers."
    ],
    scope: [
      "Deep borehole sampling (down to 90m) and in-situ pressuremeter testing.",
      "Advanced soil shear stress computational modeling.",
      "Optimizing friction pile cluster spacing and pile caps."
    ],
    gallery: [
      "/images/services/geotechnical/excavation-earthworks-new.webp",
      "/images/services/geotechnical/slope-stability-analysis-new.webp",
      "/images/services/geotechnical/contaminated-soil-remediation-new.webp"
    ],
    timeline: [
      { phase: "Subsurface Boring", date: "Q1 2024", description: "Completed triple deep drilling down to 90m and retrieved core London clays." },
      { phase: "Pile Stress Models", date: "Q3 2024", description: "Simulated load distribution across pile clusters and calculated soil shearing." },
      { phase: "Pile Casting", date: "Q1 2025", description: "Poured reinforced concrete friction piles directly into deep steel casings." },
      { phase: "Settlement Test", date: "Q4 2025", description: "Monitored structural settlements under massive static trial weights." }
    ],
    stats: [
      { label: "Borehole Depth", value: "90 Meters" },
      { label: "Friction Piles Poured", value: "110 Columns" },
      { label: "Structural Settlement", value: "0.1mm Actual" }
    ],
    outcomes: [
      "Secured a highly stable foundation design for Manchester's tallest tower.",
      "Mitigated all potential dynamic structural settlement risks.",
      "Completed pile construction under extreme river silt conditions on schedule."
    ],
    sustainability: "Uses clean concrete pile blends with up to 60% slag replacements to dramatically reduce the structural foundation's carbon footprint."
  },
  {
    slug: "west-ridge-retaining-wall",
    disciplineSlug: "geotechnical-engineering",
    disciplineName: "Geotechnical Engineering",
    title: "West Ridge Retaining Wall System",
    image: "/images/services/geotechnical/slope-stability-analysis-new.webp",
    description: "Calculated active earth pressures and engineered post-tensioned soil nail matrices to prevent slope failure.",
    challenge: "Securing a massive unstable soil slope above an active arterial highway from landslide failures.",
    solution: "Designed a post-tensioned concrete structural anchor grid with high-strength steel soil nails and protective geosynthetics.",
    metaDescription: "Wales West Ridge geotechnical retaining wall study. Slope stability nail matrix, earth pressure modeling, and protective geosynthetics.",
    objectives: [
      "Stabilize a 450m long, steep, highly unstable rock and soil slope.",
      "Protect commuters on the highway below from rockfalls and landslides.",
      "Maintain the natural sloped aesthetic while adding robust structural anchors."
    ],
    scope: [
      "Slope stability analysis using advanced Bishop and Janbu methodologies.",
      "Designing soil nail spacing, anchor plates, and post-tension loads.",
      "Integrating protective high-strength geosynthetic nets."
    ],
    gallery: [
      "/images/services/geotechnical/soil-testing-pillar-new.webp",
      "/images/services/geotechnical/contaminated-soil-remediation-new.webp",
      "/images/services/geotechnical/groundwater-environmental-sampling-new.webp"
    ],
    timeline: [
      { phase: "Bishop Stability Maps", date: "Q2 2023", description: "Mapped unstable slope layers under heavy dynamic highway vibrations." },
      { phase: "Boring & Grouting", date: "Q4 2023", description: "Bored hundreds of nail shafts and grouted high-strength steel tension cables." },
      { phase: "Anchor grid setup", date: "Q2 2024", description: "Constructed structural concrete facing grid and post-tensioned anchor plates." },
      { phase: "Hydroseeding nets", date: "Q4 2024", description: "Laid geogrids and completed hydroseeding to grow green covers." }
    ],
    stats: [
      { label: "Wall Length", value: "450 Meters" },
      { label: "Tension Soil Nails", value: "1,200 Cables" },
      { label: "Stability Safety Factor", value: "1.65 Reached" }
    ],
    outcomes: [
      "Raised the sloped safety factor from 0.95 (unstable) to 1.65 (highly stable).",
      "Completely protected the busy highway from slope landslide issues.",
      "Maintained natural vegetation cover using state-of-the-art geogrids."
    ],
    sustainability: "Features biological slope seeding that locks soil naturally via deep root structures, eliminating massive solid concrete retaining walls."
  }
];

// Re-map into record format for backward compatibility with page.tsx
export const showcaseProjects: Record<string, typeof projectsData> = projectsData.reduce((acc, curr) => {
  if (!acc[curr.disciplineSlug]) {
    acc[curr.disciplineSlug] = [];
  }
  acc[curr.disciplineSlug].push(curr);
  return acc;
}, {} as Record<string, typeof projectsData>);
