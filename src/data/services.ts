export type SectionType = 'text-image-grid' | 'accordion' | 'text-block' | 'list-block';

export interface ServiceSectionItem {
  title?: string;
  description?: string;
  image?: string;
  details?: string[];
}

export interface ServiceSection {
  type: SectionType;
  title: string;
  content?: string;
  image?: string;
  items?: ServiceSectionItem[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  sections: ServiceSection[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "transportation-engineering": {
    slug: "transportation-engineering",
    title: "Transportation Engineering",
    description: "We create transportation infrastructure for community needs, including roads, highways, and bridges.",
    longDescription: "Transportation Engineering is a multifaceted field encompassing transportation systems' planning, design, construction, maintenance, and operation. It is essential to ensure that people and goods are transported in a safe, efficient, and environmentally responsible manner. Promoting economic expansion and enhancing the general well-being of society.",
    image: "/images/services/transportation/hero-transportation.webp",
    sections: [
      {
        type: "text-image-grid",
        title: "Important Topics in Transportation Engineering",
        image: "/images/services/transportation/main-transportation.webp",
        items: [
          { title: "Planning", description: "Transportation engineers analyse demographic, economic, and environmental factors to develop long-term transportation plans that align with the needs and growth of communities. They evaluate existing transportation infrastructure and identify areas for improvement, considering factors such as traffic congestion, road capacity, and public transportation options.", image: "/images/services/transportation/planning.webp", details: ["Demographic and land-use analysis to forecast travel demand", "Traffic volume studies and Level of Service (LOS) assessments", "Multi-modal corridor planning integrating bus, rail, and active travel", "Environmental impact screening and route feasibility studies", "Long-range transportation plan (LRTP) development and compliance"] },

          { title: "Design", description: "Transportation engineers translate transportation plans into concrete designs for roads, bridges, highways, railways, airports, and other transportation facilities. They consider traffic flow, safety, environmental impact, and aesthetic appeal.", image: "/images/services/transportation/design.webp", details: ["Geometric road alignment and profile design to AASHTO standards", "Interchange and intersection control design for optimal traffic flow", "Pavement structure design using CBR and mechanistic-empirical methods", "Drainage and stormwater management system integration", "Signage, marking, and lighting plans for road safety compliance"] },
          { title: "Construction", description: "Transportation engineers collaborate with construction teams to oversee the safe and efficient construction of transportation infrastructure projects. They monitor the quality of materials and craft, ensure adherence to design specifications, and manage project schedules and budgets.", image: "/images/services/transportation/construction.webp", details: ["Contractor oversight and quality assurance testing during earthworks", "Material certification and compliance with project specifications", "Progress schedule monitoring using Primavera P6 or MS Project", "Construction site safety audits and regulatory compliance checks", "Contract administration and change order management"] },
          { title: "Maintenance", description: "Transportation engineers develop and implement maintenance strategies for existing transportation infrastructure to ensure its continued functionality and safety. They assess the condition of roads, bridges, and other structures, identifying areas that require repair or replacement.", image: "/images/services/transportation/maintenance.webp", details: ["Pavement condition index (PCI) surveys and deterioration modeling", "Preventive maintenance programming — crack sealing, micro-surfacing", "Bridge inspection schedules per AASHTO and FHWA standards", "Asset management systems for lifecycle cost optimization", "Emergency response and incident restoration planning"] },
          { title: "Operations", description: "Transportation engineers analyse traffic patterns, develop traffic control strategies, and implement intelligent transportation systems (ITS) to manage traffic congestion, improve safety, and enhance the overall efficiency of transportation systems.", image: "/images/services/transportation/operation.webp", details: ["Adaptive traffic signal control (ATSC) implementation", "Real-time incident detection and traffic management center operations", "Variable Message Sign (VMS) and road weather information systems", "Freight movement optimization and commercial vehicle routing", "Connected vehicle (V2X) technology integration for smart corridors"] }
        ]
      },
      {
        type: "accordion",
        title: "Transportation Engineering and Sustainable Development",
        content: "Transportation Engineering plays a major role in advancing sustainable development by reducing transportation systems' environmental impact. Transportation engineers are increasingly incorporating sustainable practices into their designs and operations, including:",
        items: [
          { title: "Enhancing public transportation options", description: "Encouraging public transportation reduces reliance on private cars, lowering emissions and improving air quality." },
          { title: "Creating Infrastructure for Bicycles and Foot Traffic", description: "Providing safe and convenient pathways for pedestrians and cyclists encourages active transportation, reducing automobile reliance." },
          { title: "Improving fuel efficiency", description: "Designing vehicles and transportation networks prioritising fuel efficiency can significantly reduce greenhouse gas emissions." },
          { title: "Integrating renewable energy", description: "Utilising renewable energy sources, such as solar and wind power, for transportation infrastructure can reduce reliance on fossil fuels." }
        ]
      },
      {
        type: "accordion",
        title: "Transportation Engineering and the Future",
        content: "As societies become increasingly interconnected and urbanised, the demand for efficient and sustainable transportation systems will continue to grow. Transportation engineers will play a critical role in addressing these challenges by:",
        items: [
          { title: "Developing intelligent transportation systems", description: "Leveraging technology to optimise traffic flow, enhance route planning, and improve real-time information for travellers." },
          { title: "Investing in alternative modes of transportation", description: "Exploring the potential of autonomous vehicles, electric vehicles, and hyperloop technology to revolutionise transportation." },
          { title: "Prioritising equity and accessibility", description: "Ensuring that transportation systems are accessible to all, regardless of income, location, or ability." }
        ]
      },
      {
        type: "list-block",
        title: "Key Indicators & Smart Technologies We Integrate",
        content: "We integrate cutting-edge materials and technologies to elevate modern civil transportation planning, achieving elite operations parameters:",
        items: [
          { description: "Dynamic Traffic Management: Real-time traffic load monitoring and adaptive signaling." },
          { description: "Digital Twins & Asset Tracking: Building virtual blueprints for predictive road maintenance." },
          { description: "Low-Carbon Pavements: Utilizing eco-conscious, high-performance concrete and asphalt mixes." },
          { description: "Multimodal Terminal Planning: Streamlining passenger transitions between buses, rail, and micro-mobility." }
        ]
      },
      {
        type: "text-block",
        title: "Conclusion",
        items: [
          { description: "The demands and challenges of a changing society drive evolution and adaptation in Transportation Engineering. Transportation engineers utilise scientific principles and technological advancements to shape the future of mobility. Their work ensures a more sustainable, efficient, and fair transportation system." }
        ]
      }
    ]
  },
  "structural-engineering": {
    slug: "structural-engineering",
    title: "Structural Engineering",
    description: "We provide structural analysis and design for bridges, buildings, and other constructions to guarantee safety and stability.",
    longDescription: "Structural engineering is a captivating and vital field that encompasses the design, analysis, and construction of structures to guarantee their safety, functionality, and aesthetic appeal. It plays an indispensable role in our built environment, from towering skyscrapers to intricate bridges, enabling us to create spaces that support our lives and activities. A branch of civil engineering called structural engineering is concerned with evaluating and creating structures that can endure the loads and pressures they are subjected to internally and externally. These forces can come from external sources like gravity, wind, and earthquakes, or internal sources such as the structure's weight and the loads it is designed to bear.",
    image: "/images/services/structural/structural-hero-pure.webp",
    sections: [
      {
        type: "text-image-grid",
        title: "Principles of Structural Engineering",
        content: "Structural engineers use a variety of concepts and methods to guarantee the stability and safety of structures. These principles are based on the fundamental laws of physics, including:",
        image: "/images/services/structural/main-structural-new.webp",
        items: [
          { title: "Statics", description: "The study of forces in equilibrium, ensuring that structures are stable and not under excessive strain.", image: "/images/services/structural/statics-new.webp", details: ["Free body diagram analysis and force resolution for complex load paths", "Truss and frame analysis using method of sections and joints", "Support reaction calculations for beams, columns, and connections", "Dead load, live load, wind, and snow load combination checks per ASCE 7", "Stability verification against overturning and sliding failure modes"] },
          { title: "Dynamics", description: "The study of motion and forces while considering how structures are affected by wind, earthquakes, and other dynamic loads.", image: "/images/services/structural/dynamics-new.webp", details: ["Modal analysis and natural frequency determination for structures", "Seismic response spectrum analysis per IBC and ASCE 7 requirements", "Wind-induced vibration and flutter analysis for tall structures", "Time-history analysis for nonlinear dynamic structural behavior", "Damping system design including tuned mass dampers (TMD)"] },
          { title: "Materials Science", description: "Understanding the properties of materials, such as steel, concrete, and wood, to select the most appropriate materials for specific structures.", image: "/images/services/structural/materials-science-new.webp", details: ["Concrete mix design and compressive strength specification (f'c)", "Structural steel grade selection and weld connection design", "Timber species and grading for engineered wood product systems", "Composite deck and floor system design for steel-concrete structures", "Material durability assessment for corrosion and fatigue resistance"] }
        ]
      },
      {
        type: "accordion",
        title: "Types of Structures",
        content: "Structural engineers deal with a diverse range of structures, ensuring absolute load bearing safety across distinct builds:",
        items: [
          { title: "Building Structures", description: "High-rise buildings, skyscrapers, residential buildings, and other structures that house people and activities." },
          { title: "Bridge Structures", description: "Bridges that span rivers, roads, and other obstacles, ensuring safe passage for vehicles and pedestrians." },
          { title: "Civil Engineering Structures", description: "Dams, tunnels, roads, and other infrastructure that support our transportation and water systems." },
          { title: "Industrial Structures", description: "Power plants, refineries, and other industrial facilities that require specialised structural solutions." }
        ]
      },
      {
        type: "accordion",
        title: "Structural Engineering and Sustainable Design",
        content: "Modern structural engineers lead the charge in sustainable construction, selecting materials and methods that reduce environmental impact while maintaining integrity:",
        items: [
          { title: "Mass Timber & Low-Carbon Concrete", description: "Using timber as a primary structural element and optimizing cement replacements to drastically reduce embodied carbon in buildings." },
          { title: "Adaptive Reuse of Structures", description: "Retrofitting and reinforcing existing frameworks rather than demolishing, saving energy and raw materials." },
          { title: "Optimization for Material Efficiency", description: "Leveraging generative design and advanced computational engineering to minimize raw steel and concrete consumption." }
        ]
      },
      {
        type: "list-block",
        title: "Key Indicators & Advanced Methodologies We Integrate",
        content: "We integrate cutting-edge materials and technologies to elevate structural planning, achieving elite safety and sustainability parameters:",
        items: [
          { description: "Performance-Based Seismic Design: Simulating earthquake forces to ensure structural durability and occupant safety." },
          { description: "Advanced Finite Element Analysis (FEA): Utilizing high-fidelity computational modeling to predict stress distribution and behavior under loads." },
          { description: "BIM & Digital Twin Integration: Creating comprehensive 3D digital models for seamless design coordination and lifecycle asset tracking." },
          { description: "Ultra-High Performance Concrete (UHPC): Specifying advanced composite materials for structures requiring exceptional strength and longevity." }
        ]
      },
      {
        type: "text-block",
        title: "Conclusion",
        items: [
          { description: "Structural engineers are integral to creating and maintaining our built environment. They ensure that structures are safe, efficient, and visually appealing. Their work is crucial in building sustainable and resilient communities, providing us with a secure and supportive space for living, working, and connecting with others." }
        ]
      }
    ]
  },
  "water-resources-engineering": {
    slug: "water-resources-engineering",
    title: "Water Resources Engineering",
    description: "We design and manage water supply, wastewater treatment, and stormwater systems to protect the environment and support sustainable growth.",
    longDescription: "Water is an indispensable element of life and a valuable resource that we must use judiciously. The topics of the specialist field of water resources engineering are planning, designing, building, running, and managing water resources. Water resources engineers work to ensure that we have an enduring supply of pure, clean water for drinking, agriculture, industry, and other purposes.",
    image: "/images/services/water-resources/hero-water.webp",
    sections: [
      {
        type: "text-image-grid",
        title: "Scope of Water Resources Engineering",
        content: "Water resources engineering is a broad field that encompasses a wide range of activities. The key areas of focus include:",
        image: "/images/services/water-resources/main-water.png",
        items: [
          { title: "Water supply", description: "Designing and constructing water supply systems, such as dams, reservoirs, and pipelines, to collect, store, and transport water from sources to users.", image: "/images/services/water-resources/water-supply.webp", details: ["Hydraulic network modeling using EPANET for pressure-flow analysis", "Pumping station and booster design to meet distribution demands", "Water storage tank sizing and siting for peak demand buffering", "Transmission main alignment and pipe material selection", "Water quality monitoring and residual chlorine compliance management"] },
          { title: "Water treatment", description: "Developing and implementing technologies to purify water to safe drinking standards.", image: "/images/services/water-resources/water-treatment.webp", details: ["Coagulation, flocculation, sedimentation, and filtration process design", "Disinfection system design — chlorination, UV, and ozonation", "Membrane filtration (MF, UF, NF, RO) for advanced treatment", "Taste and odour control using activated carbon adsorption", "Compliance with EPA and WHO drinking water quality standards"] },
          { title: "Wastewater management", description: "Designing and operating wastewater treatment systems to remove pollutants and dispose of wastewater environmentally soundly.", image: "/images/services/water-resources/weast-water-management.webp", details: ["Activated sludge and biological nutrient removal (BNR) system design", "Sewer network hydraulic modelling and capacity assessment", "Biosolids management — anaerobic digestion and land application", "Effluent discharge compliance with NPDES permit requirements", "Sewer condition assessment using CCTV and rehabilitation planning"] },
          { title: "Flood control", description: "To protect communities from floods, designing and constructing structures, such as levees and dams.", image: "/images/services/water-resources/flood-control.webp", details: ["Flood frequency analysis and 100-year return period hydrograph development", "Detention basin and retention pond design for peak flow attenuation", "Levee and floodwall structural design per USACE standards", "Dam safety risk assessments and failure mode analysis", "Floodplain mapping and FEMA LOMA/LOMC application support"] },
          { title: "Hydropower development", description: "Harnessing the energy of flowing water to generate electricity.", image: "/images/services/water-resources/hydropower-development.webp", details: ["Run-of-river and reservoir hydropower feasibility assessments", "Turbine selection — Pelton, Francis, Kaplan based on head and flow", "Penstock and powerhouse civil structure design", "Environmental flow requirement analysis to protect downstream ecosystems", "Grid interconnection studies and power purchase agreement structuring"] },
          { title: "Water conservation", description: "Promoting measures to reduce water consumption and improve water use efficiency.", image: "/images/services/water-resources/water-conservation.webp", details: ["Water audit and loss reduction — non-revenue water (NRW) analysis", "Demand management programs for residential and industrial users", "Rainwater harvesting and greywater recycling system design", "Drip irrigation and precision agriculture water system optimization", "Public awareness campaign design and water metering strategy"] }
        ]
      },
      {
        type: "accordion",
        title: "Techniques of Water Resources Engineering",
        content: "Water resources engineers use various scientific tools and engineering techniques to solve complex hydric resource challenges:",
        items: [
          { title: "Hydrology", description: "Studying the movement, distribution, and storage of water in the Earth's surface and subsurface." },
          { title: "Hydraulics", description: "Studying the flow of water in channels, conduits, and pipes to optimize design." },
          { title: "Geotechnical engineering", description: "Studying soil and rock properties to design and construct stable water infrastructure like dams and reservoirs." },
          { title: "Environmental engineering", description: "Assessing the environmental impacts of water resource projects and developing mitigation strategies." }
        ]
      },
      {
        type: "accordion",
        title: "Water Resources Engineering Difficulties",
        content: "The world is facing numerous challenges about its water resources, including scarcity, pollution, and inadequate sanitation:",
        items: [
          { title: "Population growth", description: "The growing global population is exponentially increasing demand for fresh water resources." },
          { title: "Climate change", description: "Changes in precipitation patterns and more extreme weather events affect water availability and quality." },
          { title: "Water pollution", description: "Pollution from industrial and agricultural activities is degrading water quality." },
          { title: "Water scarcity", description: "Some regions are experiencing chronic water shortages, expected to worsen in the coming decades." }
        ]
      },
      {
        type: "list-block",
        title: "Key Indicators & Smart Water Technologies We Integrate",
        content: "We integrate cutting-edge materials and technologies to elevate water resource planning, achieving elite treatment and distribution parameters:",
        items: [
          { description: "Smart Water Grid Technology: Utilizing IoT sensors and flow meters to optimize water distribution and instantly detect leaks." },
          { description: "Sustainable Drainage Systems (SuDS): Designing green infrastructure to manage stormwater runoff, preventing urban flooding." },
          { description: "Advanced Reverse Osmosis: Integrating low-energy membrane filtration systems for wastewater reclamation and purification." },
          { description: "Hydrological Modeling & GIS: Building predictive models to map flood plains and optimize watershed management strategies." }
        ]
      },
      {
        type: "text-block",
        title: "Conclusion",
        items: [
          { description: "Water resources engineers are critical in addressing these challenges and ensuring a sustainable future. They work on developing innovative solutions to conserve water, improve water quality, and increase water availability. They also collaborate with stakeholders to develop and implement water resource management plans." }
        ]
      }
    ]
  },
  "environmental-engineering": {
    slug: "environmental-engineering",
    title: "Environmental Engineering",
    description: "We evaluate and address the ecological impacts of development projects, ensuring compliance with environmental regulations.",
    longDescription: "Environmental engineering is a crucial discipline that applies scientific and engineering principles to protect and manage our environment for the benefit of human health and ecosystems. It encompasses various activities, from designing and operating wastewater treatment plants to developing sustainable energy solutions. Environmental engineers play a crucial role in solving issues like air pollution, water scarcity, and climate change.",
    image: "/images/services/environmental/enviromental-hero.webp",
    sections: [
      {
        type: "text-image-grid",
        title: "Key Areas of Environmental Engineering",
        image: "/images/services/environmental/main-environmental.png",
        items: [
          { title: "Water Resource Management", description: "Environmental engineers ensure the adequate supply of pure, safe drinking water for human use and pollution prevention for water bodies. They design and operate water treatment plants, develop efficient irrigation systems, and research water conservation techniques.", image: "/images/services/environmental/water-resource.webp", details: ["Watershed protection zone delineation and buffer management", "Source water quality monitoring and early-warning sensor networks", "Constructed wetland design for natural water polishing", "Agricultural runoff mitigation using best management practices (BMPs)", "Integrated water resources management (IWRM) framework development"] },
          { title: "Wastewater Treatment and Management", description: "Environmental engineers are crucial in managing wastewater from households, industries, and agricultural operations. They design and operate wastewater treatment facilities that remove contaminants and purify the water before discharging it into the environment.", image: "/images/services/environmental/wastewater-treatment.webp", details: ["Effluent characterisation and treatability study planning", "Membrane bioreactor (MBR) and MBBR technology selection", "Industrial pre-treatment standards compliance program design", "Sludge dewatering and biogas capture system integration", "Reclaimed water reuse program for irrigation and industrial cooling"] },
          { title: "Solid Waste Management", description: "Environmental engineers tackle the growing issue of solid waste disposal, ensuring proper handling and disposal of hazardous and non-hazardous waste to minimise environmental harm. They develop recycling and composting programs to reduce the volume of waste sent to landfills.", image: "/images/services/environmental/solid-waste.webp", details: ["Integrated solid waste management (ISWM) master plan development", "Sanitary landfill cell design with leachate collection and liner systems", "Material recovery facility (MRF) layout and equipment specification", "Hazardous waste manifest tracking and regulatory compliance", "Composting and anaerobic digestion facility design for organics diversion"] },
          { title: "Environmental Impact Assessment (EIA)", description: "Environmental engineers conduct EIAs To assess how suggested initiatives might affect the environment, such as construction, mining, or industrial development. This helps to prevent or mitigate adverse environmental effects.", image: "/images/services/environmental/impact-assessment.png", details: ["Baseline environmental data collection — air, water, soil, biodiversity", "Significance matrix preparation and impact prediction modeling", "Mitigation hierarchy application — avoid, minimize, restore, offset", "Stakeholder engagement and public consultation process management", "Environmental management plan (EMP) and monitoring compliance reporting"] }
        ]
      },
      {
        type: "accordion",
        title: "Environmental Engineering and Sustainable Development",
        content: "Environmental engineering is at the forefront of sustainable development, focusing on long-term ecological balance and green solutions:",
        items: [
          { title: "Renewable Energy Integration", description: "Incorporating solar, wind, and waste-to-energy technologies to power municipal treatment facilities and offset emissions." },
          { title: "Circular Economy & Resource Recovery", description: "Turning waste streams into valuable resources by reclaiming energy, nutrients, and water from municipal and industrial byproducts." },
          { title: "Carbon Capture & Offset Strategies", description: "Designing biological and physical systems to capture carbon emissions and restore natural ecological sinks." }
        ]
      },
      {
        type: "accordion",
        title: "Environmental Engineering and the Future",
        content: "As global climates change and populations grow, environmental engineering faces new horizons and challenges:",
        items: [
          { title: "Climate Resilience Planning", description: "Developing robust infrastructure designed to withstand severe weather events and rising sea levels." },
          { title: "Microplastic & Emerging Contaminant Removal", description: "Implementing advanced oxidation and bio-filtration to tackle microplastics, PFAS, and other complex pollutants." },
          { title: "Smart Environmental Monitoring", description: "Using AI-driven sensor arrays to track air and water quality in real time across urban centers." }
        ]
      },
      {
        type: "list-block",
        title: "Key Indicators & Eco-Technologies We Integrate",
        content: "We integrate cutting-edge materials and technologies to elevate environmental planning, achieving elite sustainability parameters:",
        items: [
          { description: "Sewage Treatment & Contaminant Removal: Deploying advanced bioreactors to remove toxic compounds from wastewater." },
          { description: "Smart Grids & Energy Optimization: Customizing automated electrical grids to lower baseline carbon footprints." },
          { description: "Biological Soil Remediation: Implementing phytoremediation and bio-venting to restore contaminated industrial brownfields." },
          { description: "Zero-Waste Facility Modeling: Designing closed-loop systems to eliminate landfill waste through comprehensive recycling pipelines." }
        ]
      },
      {
        type: "text-block",
        title: "Conclusion",
        items: [
          { description: "Environmental engineering is critical in addressing pressing environmental challenges and contributing to a more livable environment. Environmental engineers drive technological innovations that protect our air, water, and land resources. They are essential partners in creating a more sustainable, resilient, and healthy world." }
        ]
      }
    ]
  },
  "geotechnical-engineering": {
    slug: "geotechnical-engineering",
    title: "Geotechnical Engineering",
    description: "We conduct soil and rock investigations to provide foundation design recommendations and ensure the stability of structures.",
    longDescription: "Geotechnical engineering, also known as geotechnics, is a crucial branch of civil engineering that studies the behaviour of earth materials, particularly soils and rocks. It encompasses various applications, from designing foundations for buildings and structures to managing soil erosion and landslides. Geotechnical engineers play a role in ensuring infrastructure projects' safe and sustainable construction.",
    image: "/images/services/geotechnical/hero-geotechnical-new.webp",
    sections: [
      {
        type: "text-image-grid",
        title: "Applications of Geotechnical Engineering",
        content: "The applications of geotechnical engineering extend far beyond basic support. Geotechnical engineers are involved in a wide range of complex projects, including:",
        image: "/images/services/geotechnical/soil-testing-pillar-new.webp",
        items: [
          { title: "Excavation and earthworks", description: "Designing and managing excavations for tunnels, foundations, and other structures.", image: "/images/services/geotechnical/excavation-earthworks-new.webp", details: ["Sheet pile, soldier pile, and secant pile retaining wall design", "Dewatering system design to control groundwater during excavation", "Earth pressure coefficient analysis using Rankine and Coulomb theories", "Cut and fill volume calculations and mass haul optimization", "Sequential excavation method (SEM) planning for tunnel safety"] },
          { title: "Slope stability analysis", description: "Assessing and mitigating the risk of landslides for embankments, dams, and road cuts.", image: "/images/services/geotechnical/slope-stability-analysis-new.webp", details: ["Limit equilibrium analysis using Bishop, Spencer, and Morgenstern-Price", "Finite element slope stability modeling for complex geometries", "Rainfall infiltration sensitivity analysis and groundwater table effects", "Ground anchors, soil nails, and rockbolt reinforcement design", "Early warning monitoring — piezometers, inclinometers, and rain gauges"] },
          { title: "Remediation of contaminated soils", description: "Designing and implementing solutions for contaminated sites to protect human health and the environment.", image: "/images/services/geotechnical/contaminated-soil-remediation-new.webp", details: ["Phase I and Phase II environmental site assessment (ESA) management", "Risk-based corrective action (RBCA) framework development", "In-situ chemical oxidation (ISCO) and bioremediation system design", "Soil vapor extraction and air sparging for volatile organic compounds", "Containment barrier and cap design for long-term site management"] },
          { title: "Groundwater management", description: "Designing and implementing drainage systems to control groundwater flow and prevent erosion.", image: "/images/services/geotechnical/groundwater-environmental-sampling-new.webp", details: ["Aquifer characterisation using pump tests and slug tests", "Groundwater flow modeling with MODFLOW for drawdown prediction", "French drain and sub-surface drainage system design", "Wellhead protection zone delineation for potable water sources", "Groundwater contamination plume monitoring and remediation tracking"] },
          { title: "Geosynthetics", description: "Utilising geosynthetic materials, such as geotextiles and geomembranes, to reinforce soils, stabilise slopes, and enhance drainage.", image: "/images/services/geotechnical/geosynthetics-soil-stabilization.webp", details: ["Geotextile specification for filtration, separation, and reinforcement", "HDPE geomembrane liner system design for containment applications", "Geonet and geocomposite drainage layer design for landfill caps", "Geogrid-reinforced retaining wall and embankment design", "Installation inspection, seam testing, and CQA documentation"] }
        ]
      },
      {
        type: "accordion",
        title: "Pillars of Geotechnical Engineering",
        content: "Geotechnical engineering relies on core pillars of subsurface science to ensure structural stability and risk mitigation:",
        items: [
          { title: "Foundation Design", description: "Designing spread footings, piles, and deep foundations to transfer structural loads safely to the earth." },
          { title: "Soil & Rock Mechanics", description: "Analyzing stress, strain, and deformation behavior of earth materials under complex loading conditions." },
          { title: "Subsurface Site Investigations", description: "Drilling boreholes, collecting samples, and conducting in-situ tests to map geological profiles." },
          { title: "Environmental Geotechnics", description: "Evaluating landslide, erosion, and groundwater contamination risks to protect surrounding ecosystems." }
        ]
      },
      {
        type: "accordion",
        title: "Geotechnical Engineering and the Future",
        content: "Innovative methodologies are shaping the future of underground engineering, enhancing resiliency and resource efficiency:",
        items: [
          { title: "Seismic Ground Improvement", description: "Developing advanced soil compaction and grouting methods to mitigate liquefaction risks during earthquakes." },
          { title: "Bio-mediated Geotechnics", description: "Utilizing micro-organisms to strengthen weak soils naturally, reducing cement usage." },
          { title: "Real-Time Geo-Monitoring", description: "Deploying automated telemetry and fiber-optic sensors to monitor tunnel and slope stability in real time." }
        ]
      },
      {
        type: "list-block",
        title: "Key Indicators & Smart Geotechnical Technologies",
        content: "We integrate cutting-edge materials and technologies to elevate geotechnical planning, achieving elite structural stability parameters:",
        items: [
          { description: "Automated Inclinometer Systems: Tracking slope movement and structural shift in real-time." },
          { description: "Smart Grouting Techniques: Computer-controlled injection of stabilizers to reinforce underground voids." },
          { description: "Geosynthetic Reinforcement: Incorporating advanced geotextiles to enhance structural load capacity." },
          { description: "Digital Subsurface Mapping: Creating high-fidelity 3D geological models for precise engineering coordinates." }
        ]
      },
      {
        type: "text-block",
        title: "Conclusion",
        items: [
          { description: "Geotechnical engineering is a cornerstone of sustainable development, ensuring the safe and efficient construction of infrastructure supporting our growing communities without compromising the environment. As the demand for infrastructure grows, the role of geotechnical engineers will become even more crucial in ensuring that our built environment is resilient, sustainable, and environmentally responsible." }
        ]
      }
    ]
  }
};


