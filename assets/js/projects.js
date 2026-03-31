/* =============================================
   PROJECTS.JS — Project Data & Rendering
   Muhammad Muti-ur-Rauf | PV Designer Portfolio
   ============================================= */

// ====================================================
// STATIC PROJECT DATA (from CSV)
// These will be loaded from Supabase once connected.
// Fallback data is used when Supabase is not configured.
// ====================================================
const PROJECTS_DATA = [
  // ---- INDUSTRIAL (18 projects) ----
  {
    id: 1,
    category: 'Industrial',
    title: '504kW Solar Design | L2 + L5 Hybrid Structure | PVsyst + SKETCHUP',
    youtube_url: 'https://www.youtube.com/watch?v=AODJblfijxs',
    description: 'A comprehensive 504kW hybrid solar system design combining L2 ground-mount and L5 elevated structures. This industrial project demonstrates advanced structural engineering using SketchUp for 3D modeling and PVsyst for energy yield simulation and performance analysis.',
    drawing_link: '',
    thumbnail_url: `https://img.youtube.com/vi/AODJblfijxs/hqdefault.jpg`,
    featured: true
  },
  {
    id: 2,
    category: 'Industrial',
    title: '2MW Solar Power Plant Design | AgriTech Daudkhel Mianwali | PVsyst Simulation + Layout',
    youtube_url: 'https://www.youtube.com/watch?v=je0AqPorjNs',
    description: 'Large-scale 2MW solar power plant design for AgriTech facility in Daudkhel, Mianwali. Includes complete PVsyst energy simulation, shade analysis, and detailed SketchUp layout. Focused on maximizing agricultural land usage with smart solar structure placement.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/je0AqPorjNs/hqdefault.jpg',
    featured: true
  },
  {
    id: 3,
    category: 'Industrial',
    title: '715 Panel Solar Design | Toraiz & Brothers | L2 Structure Industrial PV Layout',
    youtube_url: 'https://www.youtube.com/watch?v=bGfBv_eO3SA',
    description: 'Industrial PV layout design for Toraiz & Brothers featuring 715 solar panels on an L2 structure. This project covers the complete design workflow including panel planning, structural layout, shadow analysis, and production simulation for the industrial facility.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/bGfBv_eO3SA/hqdefault.jpg',
    featured: false
  },
  {
    id: 4,
    category: 'Industrial',
    title: '100kW Industrial Solar System Design | Factory/Warehouse Solar Layout | Complete PV Planning',
    youtube_url: 'https://www.youtube.com/watch?v=4BQ8iAqcrmE',
    description: 'Complete 100kW solar system design for a factory and warehouse complex. This project demonstrates professional PV planning including site assessment, panel layout optimization, string sizing, and energy yield analysis tailored for industrial electricity demand.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/4BQ8iAqcrmE/hqdefault.jpg',
    featured: false
  },
  {
    id: 5,
    category: 'Industrial',
    title: 'Stylo Warehouse Raiwind | 150KW Solar Installation | Trina 620W | H125 | SketchUp Design',
    youtube_url: 'https://www.youtube.com/watch?v=YSEcwkzr8AA',
    description: 'Professional 150kW solar installation design for Stylo Warehouse in Raiwind using Trina 620W panels on H125 mounting structure. Full SketchUp 3D design with detailed layout, cabling plan, and PVsyst performance simulation for this industrial warehouse.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/YSEcwkzr8AA/hqdefault.jpg',
    featured: false
  },
  {
    id: 6,
    category: 'Industrial',
    title: 'L4 Elevated Shell Roof Structure – Steel Frame Design | BOP Layout & SketchUp Design',
    youtube_url: 'https://www.youtube.com/watch?v=8c-ydCaHhJM',
    description: 'Advanced L4 elevated shell roof steel frame solar structure design. This project showcases the balance of power (BOP) layout combined with detailed SketchUp 3D modeling for an industrial elevated rooftop installation, optimizing space and energy output.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/8c-ydCaHhJM/hqdefault.jpg',
    featured: false
  },
  {
    id: 7,
    category: 'Industrial',
    title: '34.6kWp Solar PV Design & Near Shading Analysis | Lahore Continental Hotel',
    youtube_url: 'https://www.youtube.com/watch?v=GZ9Z1JFOHHg',
    description: 'Precision 34.6kWp solar PV design for Lahore Continental Hotel featuring rigorous near-shading analysis. This project demonstrates how to handle complex rooftop geometry and nearby obstructions while achieving maximum energy production with smart panel placement.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/GZ9Z1JFOHHg/hqdefault.jpg',
    featured: false
  },
  {
    id: 8,
    category: 'Industrial',
    title: 'Industrial Solar Power: 300kW L4 Elevated Structure at Hafiz Tannery, Kasur',
    youtube_url: 'https://www.youtube.com/watch?v=d_lvS51ug7k',
    description: 'Large-scale 300kW L4 elevated solar structure design for Hafiz Tannery in Kasur. This industrial project includes complete PV system planning, structural design for elevated mounting on the tannery rooftop, and comprehensive PVsyst simulation results.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/d_lvS51ug7k/hqdefault.jpg',
    featured: false
  },
  {
    id: 9,
    category: 'Industrial',
    title: 'Galaxy Paper Mill Solar Design | L2 Ground Mount + L4 Elevated Roof | 600kW Industrial Project',
    youtube_url: 'https://www.youtube.com/watch?v=UnpP3lPzrW8',
    description: 'Complex 600kW dual-structure solar design for Galaxy Paper Mill combining L2 ground-mount and L4 elevated roof installations. This industrial project maximizes energy generation by utilizing both available ground space and rooftop area effectively.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/UnpP3lPzrW8/hqdefault.jpg',
    featured: true
  },
  {
    id: 10,
    category: 'Industrial',
    title: 'FFC Mirpur Mathelo Solar Design | 1MW Industrial Project | PVsyst + SketchUp',
    youtube_url: 'https://www.youtube.com/watch?v=MtVMrm_MA8E',
    description: '1MW industrial solar design for FFC (Fauji Fertilizer Company) in Mirpur Mathelo. This prestigious project includes comprehensive PVsyst energy modeling and detailed SketchUp 3D layout for one of Pakistan\'s leading industrial corporations.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/MtVMrm_MA8E/hqdefault.jpg',
    featured: false
  },
  {
    id: 11,
    category: 'Industrial',
    title: '1000 kW Solar Plant Design in Pakistan | Kamal Textile Mills | PV Designer Portfolio',
    youtube_url: 'https://www.youtube.com/watch?v=TTU8UANBVEc',
    description: 'Impressive 1MW solar plant design for Kamal Textile Mills. This comprehensive industrial PV project showcases complete site design, panel layout, structural engineering, string configuration, and detailed PVsyst simulation for Pakistan\'s textile manufacturing sector.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/TTU8UANBVEc/hqdefault.jpg',
    featured: false
  },
  {
    id: 12,
    category: 'Industrial',
    title: 'Capital Smart City, 2 MW Car Port Structure',
    youtube_url: 'https://www.youtube.com/watch?v=iBZ3C6z7lQQ',
    description: 'Innovative 2MW solar carport structure design for Capital Smart City. This landmark project combines functional parking infrastructure with energy generation, demonstrating cutting-edge carport solar design for Pakistan\'s most prestigious smart city development.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/iBZ3C6z7lQQ/hqdefault.jpg',
    featured: true
  },
  {
    id: 13,
    category: 'Industrial',
    title: 'Munir Industry Solar Design | Elevated Structure + Continuous Rail (1MW Industrial Project)',
    youtube_url: 'https://www.youtube.com/watch?v=JDtnyUasUag',
    description: '1MW industrial solar design for Munir Industry featuring elevated structure with continuous rail mounting system. This advanced project demonstrates how continuous rail mounting optimizes installation efficiency while maintaining structural integrity for large industrial systems.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/JDtnyUasUag/hqdefault.jpg',
    featured: false
  },
  {
    id: 14,
    category: 'Industrial',
    title: '200kW Solar Design | L4 Structure Elevated on Roof + L2 Ground Mount | Al Rehman Paper Mills',
    youtube_url: 'https://www.youtube.com/watch?v=ewPz4iNii1g',
    description: '200kW hybrid solar design for Al Rehman Paper Mills combining L4 elevated roof structure and L2 ground mount. This project maximizes energy production by intelligently utilizing rooftop and ground space with separate structural systems optimized for each area.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/ewPz4iNii1g/hqdefault.jpg',
    featured: false
  },
  {
    id: 15,
    category: 'Industrial',
    title: '200kW Industrial Solar System | P1 Structure Design | PV Designer Project',
    youtube_url: 'https://www.youtube.com/watch?v=3CRt7RACdqk',
    description: 'Professional 200kW industrial solar system design on P1 mounting structure. This project demonstrates the P1 structure design methodology for industrial rooftops, covering panel layout, structural calculations, and complete PV system documentation.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/3CRt7RACdqk/hqdefault.jpg',
    featured: false
  },
  {
    id: 16,
    category: 'Industrial',
    title: '4MW Solar Power Plant Design | Mukhtargarh Pakistan | PVsyst Utility Scale Project',
    youtube_url: 'https://www.youtube.com/watch?v=f6L_zKtW2Pc',
    description: 'Utility-scale 4MW solar power plant design for Mukhtargarh, Pakistan. This major project represents the pinnacle of industrial PV design, featuring comprehensive PVsyst simulation, large-scale ground-mount layout planning, and utility-grade system documentation.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/f6L_zKtW2Pc/hqdefault.jpg',
    featured: true
  },
  {
    id: 17,
    category: 'Industrial',
    title: '2MW Ground Mounted Solar Design | P1 Structure (2ft Elevation) | PV Designer Project',
    youtube_url: 'https://www.youtube.com/watch?v=ukHutBC_fxs',
    description: '2MW ground-mounted solar system design using P1 structure with 2ft elevation. This industrial project covers the complete design process for large-scale ground-mount installations, including site survey interpretation, panel layout, and structural design.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/ukHutBC_fxs/hqdefault.jpg',
    featured: false
  },
  {
    id: 18,
    category: 'Industrial',
    title: '2 MW Solar PV Design | Galaxy Paper Mill Project',
    youtube_url: 'https://www.youtube.com/watch?v=XibDHNRrbdw',
    description: 'Second phase 2MW solar PV design expansion for Galaxy Paper Mill. Building on the previous 600kW installation, this project demonstrates phased industrial solar expansion, optimizing the existing infrastructure for maximum renewable energy generation.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/XibDHNRrbdw/hqdefault.jpg',
    featured: false
  },

  // ---- COMMERCIAL (20 projects) ----
  {
    id: 19,
    category: 'Commercial',
    title: 'Advanced Solar Structure Design – Multi-Level Elevated PV System Explained',
    youtube_url: 'https://www.youtube.com/watch?v=-0M-NmksPls',
    description: 'In-depth walkthrough of an advanced multi-level elevated solar PV system design. This commercial project showcases complex structural engineering for multi-story buildings where different levels require different mounting approaches and tilt angles.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/-0M-NmksPls/hqdefault.jpg',
    featured: true
  },
  {
    id: 20,
    category: 'Commercial',
    title: 'Heavy Elevated Solar Structure – Large Rooftop PV Design | Full Layout',
    youtube_url: 'https://www.youtube.com/watch?v=PUSdvrg7K2k',
    description: 'Professional design for a large commercial rooftop with heavy elevated solar structure. This project demonstrates how to handle substantial structural loads on large commercial rooftops while optimizing panel count and energy output.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/PUSdvrg7K2k/hqdefault.jpg',
    featured: false
  },
  {
    id: 21,
    category: 'Commercial',
    title: '30 kW Solar Design – P6 Elevated Structure | Hotel Project PV System',
    youtube_url: 'https://www.youtube.com/watch?v=pnHt1XdSRHg',
    description: '30kW solar system design for a hotel using P6 elevated mounting structure. This commercial hospitality project demonstrates how solar installations can be aesthetically integrated into hotel rooftops while meeting the high energy demands of hospitality facilities.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/pnHt1XdSRHg/hqdefault.jpg',
    featured: false
  },
  {
    id: 22,
    category: 'Commercial',
    title: 'Hybrid Solar Design – L2 + P2 Elevated Structure | Max Output Layout',
    youtube_url: 'https://www.youtube.com/watch?v=lDivBLXLPdA',
    description: 'Hybrid commercial solar design combining L2 flat and P2 elevated structures to maximize energy output. This project demonstrates how mixing structure types on the same rooftop can significantly increase system capacity and energy production.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/lDivBLXLPdA/hqdefault.jpg',
    featured: false
  },
  {
    id: 23,
    category: 'Commercial',
    title: '45 kW Solar Carport Design – Ground Mounted System | PVsyst Results',
    youtube_url: 'https://www.youtube.com/watch?v=lfG6HRPg7B0',
    description: '45kW solar carport design for commercial parking area. This innovative project combines parking functionality with solar generation, featuring complete PVsyst simulation results and detailed structural design for the commercial carport installation.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/lfG6HRPg7B0/hqdefault.jpg',
    featured: false
  },
  {
    id: 24,
    category: 'Commercial',
    title: 'Solar Car Parking Design – Elevated PV Structure | Full Layout Explained',
    youtube_url: 'https://www.youtube.com/watch?v=NjU3IMSOjec',
    description: 'Comprehensive solar car parking design featuring elevated PV structure. This commercial project covers the complete layout design for a solar-shaded parking facility, balancing car clearance requirements with maximum solar panel coverage.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/NjU3IMSOjec/hqdefault.jpg',
    featured: true
  },
  {
    id: 25,
    category: 'Commercial',
    title: '40 kW Solar Design – P3 Elevated Structure | Complete PV System Layout',
    youtube_url: 'https://www.youtube.com/watch?v=xq_VunlLkTU',
    description: 'Complete 40kW commercial solar system design using P3 elevated mounting structure. This project covers the full design workflow from site assessment to final PV system documentation, demonstrating professional commercial solar design methodology.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/xq_VunlLkTU/hqdefault.jpg',
    featured: false
  },
  {
    id: 26,
    category: 'Commercial',
    title: '3 Solar Design Options – Which Layout is Best? | Rooftop PV Comparison',
    youtube_url: 'https://www.youtube.com/watch?v=_YZmGTf3FL0',
    description: 'Comparative analysis of three different solar layout options for a commercial rooftop. This educational project demonstrates how PV designers evaluate multiple design alternatives and select the optimal solution based on energy yield, cost, and structural feasibility.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/_YZmGTf3FL0/hqdefault.jpg',
    featured: false
  },
  {
    id: 27,
    category: 'Commercial',
    title: '22.5 kW Solar Design – L2 Structure | MG Motors Rooftop Project',
    youtube_url: 'https://www.youtube.com/watch?v=F1FasIroV6s',
    description: '22.5kW commercial solar installation for MG Motors showroom rooftop using L2 flat structure. This automotive showroom project demonstrates professional rooftop PV design for commercial premises, balancing aesthetic requirements with energy performance.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/F1FasIroV6s/hqdefault.jpg',
    featured: false
  },
  {
    id: 28,
    category: 'Commercial',
    title: 'Rooftop Solar Design – Multi-Building Layout | Complete PV System Explained',
    youtube_url: 'https://www.youtube.com/watch?v=G5ClKF60s1w',
    description: 'Complex multi-building commercial solar design coordinating PV systems across several connected rooftops. This project demonstrates advanced string planning, cable routing, and central inverter placement for a multi-building commercial solar installation.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/G5ClKF60s1w/hqdefault.jpg',
    featured: false
  },
  {
    id: 29,
    category: 'Commercial',
    title: '128 kW Solar Design Comparison – L2 vs P8 Structure | Which is Better?',
    youtube_url: 'https://www.youtube.com/watch?v=-e-7WOZLQqU',
    description: 'Detailed 128kW commercial solar design comparison between L2 standard and P8 elevated structures. This analytical project helps clients understand the trade-offs between different mounting systems in terms of yield, cost, and installation complexity.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/-e-7WOZLQqU/hqdefault.jpg',
    featured: false
  },
  {
    id: 30,
    category: 'Commercial',
    title: '68kW Solar Design | L2 Structure Layout | Kahna Nau Project',
    youtube_url: 'https://www.youtube.com/watch?v=TyrNu-iufBI',
    description: '68kW commercial solar design for a business facility in Kahna Nau using standard L2 structure. This project demonstrates efficient space utilization on a mid-size commercial rooftop with optimal panel orientation and string configuration.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/TyrNu-iufBI/hqdefault.jpg',
    featured: false
  },
  {
    id: 31,
    category: 'Commercial',
    title: '205 kW Solar System Design | Hotel Project | PVsyst Simulation + Layout',
    youtube_url: 'https://www.youtube.com/watch?v=jVTDaEEiObU',
    description: '205kW solar system design for a hotel complex with complete PVsyst simulation and detailed layout. This large commercial hospitality project covers the energy needs of a full-service hotel, demonstrating how solar can significantly reduce operational energy costs.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/jVTDaEEiObU/hqdefault.jpg',
    featured: true
  },
  {
    id: 32,
    category: 'Commercial',
    title: 'Hospital Solar Project 151kW – PVsyst Report + Layout Design',
    youtube_url: 'https://www.youtube.com/watch?v=XUfxPgq-JfQ',
    description: '151kW solar project for a hospital with comprehensive PVsyst report and layout design. Healthcare facilities have critical energy requirements, and this project demonstrates how to design a reliable solar system that supports hospital operations.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/XUfxPgq-JfQ/hqdefault.jpg',
    featured: false
  },
  {
    id: 33,
    category: 'Commercial',
    title: 'Solar Parking Design | Elevated Structure with Car Clearance | Full Layout',
    youtube_url: 'https://www.youtube.com/watch?v=ZS234BeEBy0',
    description: 'Commercial solar parking design with elevated structure ensuring proper car clearance. This project balances the structural requirements for safe vehicle access with maximum solar panel coverage, creating a functional and profitable solar carport system.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/ZS234BeEBy0/hqdefault.jpg',
    featured: false
  },
  {
    id: 34,
    category: 'Commercial',
    title: 'All L2 Solar Design | Industrial Rooftop Layout | Standard Structure System',
    youtube_url: 'https://www.youtube.com/watch?v=cy8XMXpu0uw',
    description: 'Commercial solar design using all L2 standard flat structures for a large rooftop. This project showcases how a uniform L2 structure system can be efficiently implemented across a large commercial rooftop with consistent row spacing and cable management.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/cy8XMXpu0uw/hqdefault.jpg',
    featured: false
  },
  {
    id: 35,
    category: 'Commercial',
    title: '125kW Solar Elevated Structure | Industrial Rooftop Design | Full Layout',
    youtube_url: 'https://www.youtube.com/watch?v=sSsvF7ibhbc',
    description: '125kW elevated solar structure design for a commercial industrial rooftop. This project features a complete elevated mounting system that maximizes air circulation under panels while optimizing tilt angle for peak annual energy production.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/sSsvF7ibhbc/hqdefault.jpg',
    featured: false
  },
  {
    id: 36,
    category: 'Commercial',
    title: '100kW Solar Design for Cold Storage | Hybrid Elevated + Rooftop Layout | PVsyst Results',
    youtube_url: 'https://www.youtube.com/watch?v=JDyjvgPfY-U',
    description: '100kW hybrid solar design for a cold storage facility combining elevated and flat rooftop mounting systems. Cold storage presents unique demands for reliable baseload power generation, demonstrated through detailed PVsyst simulation results.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/JDyjvgPfY-U/hqdefault.jpg',
    featured: false
  },
  {
    id: 37,
    category: 'Commercial',
    title: '50kW Solar Design | Commercial Rooftop System | Z Channel P1 Structure',
    youtube_url: 'https://www.youtube.com/watch?v=PMauPRB_sVg',
    description: '50kW commercial rooftop solar system using Z-channel P1 mounting structure. This project demonstrates the Z-channel system\'s advantages for commercial installations, providing a cost-effective yet robust mounting solution for mid-size commercial solar projects.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/PMauPRB_sVg/hqdefault.jpg',
    featured: false
  },
  {
    id: 38,
    category: 'Commercial',
    title: 'Solar Car Parking Design | 16 Panel Structure | SketchUp Solar Canopy',
    youtube_url: 'https://www.youtube.com/watch?v=0yIvQu7DZEU',
    description: 'Compact commercial solar carport design featuring a 16-panel elevated solar canopy. This SketchUp-detailed project shows how a compact solar car parking structure can be elegantly designed for smaller commercial parking areas while maintaining functionality.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/0yIvQu7DZEU/hqdefault.jpg',
    featured: false
  },

  // ---- RESIDENTIAL (11 projects) ----
  {
    id: 39,
    category: 'Residential',
    title: 'Elevated Solar Canopy Design | Large Span Residential Solar Structure | Full Layout',
    youtube_url: 'https://www.youtube.com/watch?v=Pn1Lqm5r_bk',
    description: 'Large-span elevated solar canopy design for a premium residential property. This project demonstrates how a solar canopy can serve dual purposes as both a functional shade structure and energy generator, adding both aesthetic and monetary value to the home.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/Pn1Lqm5r_bk/hqdefault.jpg',
    featured: true
  },
  {
    id: 40,
    category: 'Residential',
    title: 'Dual Solar Design | L2 + P1 Structure for Home | Smart Residential Solar Setup',
    youtube_url: 'https://www.youtube.com/watch?v=u0rKa2oJ-G8',
    description: 'Smart residential solar design combining L2 flat and P1 elevated structures on a home rooftop. This project shows how to maximize rooftop coverage by mixing structure types to accommodate different areas of a residential roof.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/u0rKa2oJ-G8/hqdefault.jpg',
    featured: false
  },
  {
    id: 41,
    category: 'Residential',
    title: 'Residential Solar Project | P4 Elevated Structure Design | Smart Home Solar System',
    youtube_url: 'https://www.youtube.com/watch?v=5l-8JqZie9Q',
    description: 'Smart home solar system using P4 elevated structure. This residential project demonstrates the P4 elevated design for homes with limited roof space, achieving higher tilt angles to maximize winter energy production for Pakistani residential load profiles.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/5l-8JqZie9Q/hqdefault.jpg',
    featured: false
  },
  {
    id: 42,
    category: 'Residential',
    title: 'DHA 15KW Elevated System | P2 Elevated Solar Structure | Wide Rooftop Layout',
    youtube_url: 'https://www.youtube.com/watch?v=XHK2-8uDpFY',
    description: '15kW elevated solar system design for a DHA residential property using P2 structure. This premium residential project features a wide rooftop layout that elegantly accommodates the solar system while maintaining the aesthetic standards of DHA architecture.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/XHK2-8uDpFY/hqdefault.jpg',
    featured: true
  },
  {
    id: 43,
    category: 'Residential',
    title: 'P1 Elevated Solar Structure | Long Series Rooftop Design | Smart Solar Setup',
    youtube_url: 'https://www.youtube.com/watch?v=tOBBL5js9RA',
    description: 'P1 elevated solar structure design for a long residential rooftop. This project demonstrates how to design a continuous row-style solar system across elongated rooftops, optimizing panel count and maintaining proper inter-row spacing for a typical Pakistani house.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/tOBBL5js9RA/hqdefault.jpg',
    featured: false
  },
  {
    id: 44,
    category: 'Residential',
    title: 'L5 Elevated Solar Structure | High Capacity Rooftop Design | Smart Energy Solution',
    youtube_url: 'https://www.youtube.com/watch?v=CMufF9dHSl8',
    description: 'High-capacity L5 elevated solar structure for residential energy independence. This project features one of the tallest residential mounting configurations, ideal for rooftops where maximum airflow and tilt angle are priorities for peak energy performance.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/CMufF9dHSl8/hqdefault.jpg',
    featured: false
  },
  {
    id: 45,
    category: 'Residential',
    title: 'P3 Elevated Solar Structure Design | Smart Roof Installation | Compact High Output System',
    youtube_url: 'https://www.youtube.com/watch?v=8kiGxvMgajo',
    description: 'Compact P3 elevated solar structure design for a smart residential installation. This project maximizes energy output on a limited rooftop area using the P3 structure\'s optimal tilt angle, achieving excellent performance for urban residential solar installations.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/8kiGxvMgajo/hqdefault.jpg',
    featured: false
  },
  {
    id: 46,
    category: 'Residential',
    title: 'P3 Elevated Solar Design – Dual Row Rooftop System | Complete PV Layout',
    youtube_url: 'https://www.youtube.com/watch?v=i6j5a_KsOyE',
    description: 'P3 elevated dual-row solar system design for a residential rooftop. This project demonstrates how to design a two-row solar array with proper inter-row shading clearance on standard residential rooftops, achieving balanced energy production throughout the year.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/i6j5a_KsOyE/hqdefault.jpg',
    featured: false
  },
  {
    id: 47,
    category: 'Residential',
    title: 'P3 Elevated Solar Design – 17 Panel Rooftop System | Compact PV Layout',
    youtube_url: 'https://www.youtube.com/watch?v=vqKjb5WQQS0',
    description: 'Compact 17-panel P3 elevated solar design for a residential rooftop. This project shows how to efficiently fit 17 solar panels in a P3 elevated configuration, achieving optimal energy production for a typical household energy consumption profile.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/vqKjb5WQQS0/hqdefault.jpg',
    featured: false
  },
  {
    id: 48,
    category: 'Residential',
    title: 'P4 Elevated Solar Design – 24 Panel Rooftop System | Compact PV Layout',
    youtube_url: 'https://www.youtube.com/watch?v=nk0C3TgggKg',
    description: '24-panel P4 elevated solar system for a residential property. With 24 panels on a P4 structure, this project delivers substantial energy generation for larger homes, demonstrating proper row spacing calculations and cable management for residential PV systems.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/nk0C3TgggKg/hqdefault.jpg',
    featured: false
  },
  {
    id: 49,
    category: 'Residential',
    title: 'Small Solar Structure Design – 6 Panel Elevated System | Compact PV Layout',
    youtube_url: 'https://www.youtube.com/watch?v=AheEnBNH_jQ',
    description: 'Compact 6-panel elevated solar structure design for small residential applications. This project demonstrates that even small solar installations benefit from professional design, covering panel selection, tilt optimization, and single-string system configuration.',
    drawing_link: '',
    thumbnail_url: 'https://img.youtube.com/vi/AheEnBNH_jQ/hqdefault.jpg',
    featured: false
  }
];

// ====================================================
// YOUTUBE UTILITIES
// ====================================================
function getYouTubeVideoId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function getYouTubeThumbnail(url, quality = 'hqdefault') {
  const id = getYouTubeVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/${quality}.jpg` : null;
}

function getYouTubeEmbedUrl(url) {
  const id = getYouTubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}?rel=0&autoplay=1` : null;
}

// ====================================================
// RENDER PROJECT CARD
// ====================================================
function renderProjectCard(project) {
  const thumb = project.thumbnail_url || getYouTubeThumbnail(project.youtube_url) || 'assets/images/placeholder.jpg';
  const catClass = project.category.toLowerCase();
  const desc = project.description || 'Professional solar PV design project by Muhammad Muti-ur-Rauf.';
  const shortDesc = desc.length > 120 ? desc.slice(0, 117) + '...' : desc;
  const vidId = getYouTubeVideoId(project.youtube_url);

  return `
    <article class="project-card reveal" data-category="${catClass}" data-id="${project.id}">
      <div class="video-embed-container" data-video-id="${vidId}" onclick="openVideoModal(${project.id})">
        <img class="video-thumbnail" src="${thumb}" alt="${project.title}" loading="lazy"
             onerror="this.src='assets/images/placeholder.jpg'">
        <div class="video-thumb-overlay">
          <div class="yt-play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="card-body" style="flex:1; display:flex; flex-direction:column;">
        <div class="card-header-row">
          <span class="badge badge-${catClass}">${project.category}</span>
          ${project.featured ? '<span class="badge" style="background:rgba(245,158,11,0.12);color:#92400e;border:1px solid rgba(245,158,11,0.25);">⭐ Featured</span>' : ''}
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${shortDesc}</p>
        <div class="project-card-actions">
          <button class="btn btn-primary btn-sm" onclick="openVideoModal(${project.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Watch Video
          </button>
          <a href="${project.youtube_url}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.763-1.763C18.265 5.007 12 5 12 5s-6.265-.007-7.83.44a2.506 2.506 0 0 0-1.763 1.763C2 8.768 2 12 2 12s0 3.232.407 4.797a2.506 2.506 0 0 0 1.763 1.763C5.735 19 12 19 12 19s6.265.007 7.83-.44a2.506 2.506 0 0 0 1.763-1.763C22 15.232 22 12 22 12s0-3.232-.407-4.797zM10 15V9l5.2 3-5.2 3z"/></svg>
            YouTube
          </a>
          ${project.drawing_link ? `
          <a href="${project.drawing_link}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Drawing
          </a>` : ''}
        </div>
      </div>
    </article>
  `;
}

// ====================================================
// VIDEO MODAL
// ====================================================
function openVideoModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('video-modal');
  const title = document.getElementById('modal-project-title');
  const frame = document.getElementById('modal-video-frame');
  const catBadge = document.getElementById('modal-category');
  const ytLink = document.getElementById('modal-yt-link');
  const drawingLink = document.getElementById('modal-drawing-link');
  const desc = document.getElementById('modal-description');

  if (title) title.textContent = project.title;
  if (catBadge) {
    catBadge.textContent = project.category;
    catBadge.className = `badge badge-${project.category.toLowerCase()}`;
  }
  if (frame) frame.src = getYouTubeEmbedUrl(project.youtube_url);
  if (ytLink) ytLink.href = project.youtube_url;
  if (drawingLink) {
    if (project.drawing_link) {
      drawingLink.href = project.drawing_link;
      drawingLink.style.display = 'flex';
    } else {
      drawingLink.style.display = 'none';
    }
  }
  if (desc) desc.textContent = project.description;

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const frame = document.getElementById('modal-video-frame');
  if (frame) frame.src = '';
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('video-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeVideoModal();
    });
  }
});

// ====================================================
// STATS COUNTER ANIMATION
// ====================================================
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// Export
window.ProjectsLib = {
  data: PROJECTS_DATA,
  renderCard: renderProjectCard,
  getVideoId: getYouTubeVideoId,
  getThumbnail: getYouTubeThumbnail,
  getEmbedUrl: getYouTubeEmbedUrl,
  openModal: openVideoModal,
  closeModal: closeVideoModal,
  initCounters
};
