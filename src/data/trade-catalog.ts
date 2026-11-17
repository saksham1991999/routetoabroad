export type TradeCategoryId =
  | 'electronics-audio'
  | 'solar-energy'
  | 'ev-automotive'
  | 'machinery-cnc'
  | 'mobile-accessories'
  | 'construction-hardware'
  | 'textiles-apparel'
  | 'packaging-oem';

export interface TradeCategory {
  id: TradeCategoryId;
  name: string;
  cluster: string;
  leadTime: string;
  summary: string;
}

export interface TradeSku {
  id: string;
  sku: string;
  name: string;
  category: TradeCategoryId;
  moq: string;
  fobRange: string;
  port: string;
  leadTime: string;
  compliance: string[];
}

export interface SourcingCluster {
  id: string;
  province: string;
  cities: string;
  ports: string;
  specialties: string;
  notes: string;
}

export interface ComplianceEntry {
  id: string;
  region: string;
  mark: string;
  authority: string;
  appliesTo: string;
  leadTime: string;
  notes: string;
}

export const TRADE_CATEGORIES: TradeCategory[] = [
  {
    id: 'electronics-audio',
    name: 'Electronics & Audio',
    cluster: 'Shenzhen / Dongguan',
    leadTime: '20–30 days',
    summary: 'TWS earbuds, Bluetooth speakers, smart home sensors, and PoE/GaN audio-power hardware.',
  },
  {
    id: 'solar-energy',
    name: 'Solar & Energy Storage',
    cluster: 'Suzhou / Changzhou / Ningbo',
    leadTime: '25–35 days',
    summary: 'N-type TOPCon PV modules, LiFePO4 battery packs, hybrid inverters, and off-grid kits.',
  },
  {
    id: 'ev-automotive',
    name: 'EV & Automotive Parts',
    cluster: 'Guangzhou / Ningbo / Changzhou',
    leadTime: '25–40 days',
    summary: 'AC/DC EV chargers, BLDC hub motors, BMS controllers, and aftermarket lighting assemblies.',
  },
  {
    id: 'machinery-cnc',
    name: 'Machinery & CNC',
    cluster: 'Qingdao / Suzhou / Dongguan',
    leadTime: '30–45 days',
    summary: '3-axis CNC routers, fiber laser cutters, vertical form-fill-seal packers, and hydraulic presses.',
  },
  {
    id: 'mobile-accessories',
    name: 'Mobile Accessories',
    cluster: 'Shenzhen (Bao’an / Longhua)',
    leadTime: '15–22 days',
    summary: 'GaN PD fast chargers, MagSafe power banks, braided USB4 cables, and tempered glass.',
  },
  {
    id: 'construction-hardware',
    name: 'Construction & Hardware',
    cluster: 'Yiwu / Yongkang / Foshan',
    leadTime: '20–30 days',
    summary: 'SS304 architectural hinges, aluminum curtain-wall profiles, LED high-bay fixtures, and fasteners.',
  },
  {
    id: 'textiles-apparel',
    name: 'Textiles & Apparel',
    cluster: 'Guangzhou / Shaoxing / Ningbo',
    leadTime: '22–32 days',
    summary: 'Technical activewear fabrics, combed cotton blanks, workwear uniforms, and woven labels.',
  },
  {
    id: 'packaging-oem',
    name: 'Packaging & OEM Print',
    cluster: 'Yiwu / Guangzhou / Qingdao',
    leadTime: '14–21 days',
    summary: 'Rigid magnetic gift boxes, food-grade kraft pouches, corrugated mailers, and custom molds.',
  },
];

export const TRADE_SKUS: TradeSku[] = [
  {
    id: 'sku-anc-tws',
    sku: 'RTA-EA-101',
    name: 'Hybrid ANC TWS Earbuds (BT 5.4, OEM Case)',
    category: 'electronics-audio',
    moq: '500 pcs',
    fobRange: 'US$8.40 – $12.80',
    port: 'Shenzhen (Yantian)',
    leadTime: '22 days',
    compliance: ['CE', 'RoHS', 'FCC', 'WPC', 'BIS'],
  },
  {
    id: 'sku-bt-soundbar',
    sku: 'RTA-EA-104',
    name: '40W Portable IPX6 Bluetooth Speaker',
    category: 'electronics-audio',
    moq: '300 pcs',
    fobRange: 'US$14.50 – $19.20',
    port: 'Shenzhen (Shekou)',
    leadTime: '25 days',
    compliance: ['CE', 'RoHS', 'FCC', 'WPC', 'BIS'],
  },
  {
    id: 'sku-topcon-panel',
    sku: 'RTA-SE-201',
    name: '580W N-Type TOPCon Bifacial Solar Module',
    category: 'solar-energy',
    moq: '1×20ft FCL (310 pcs)',
    fobRange: 'US$0.10 – $0.13 / W',
    port: 'Ningbo (Beilun)',
    leadTime: '28 days',
    compliance: ['CE', 'UL', 'IEC 61215', 'BIS'],
  },
  {
    id: 'sku-lifepo4-rack',
    sku: 'RTA-SE-205',
    name: '51.2V 100Ah 5.12kWh LiFePO4 Server-Rack Battery',
    category: 'solar-energy',
    moq: '20 units',
    fobRange: 'US$640 – $780',
    port: 'Shanghai (Yangshan)',
    leadTime: '32 days',
    compliance: ['CE', 'UN38.3', 'UL', 'BIS'],
  },
  {
    id: 'sku-ev-wallbox',
    sku: 'RTA-EV-301',
    name: '7.4kW / 22kW Type-2 OCPP 1.6J AC EV Wallbox',
    category: 'ev-automotive',
    moq: '50 units',
    fobRange: 'US$155 – $215',
    port: 'Ningbo / Shenzhen',
    leadTime: '28 days',
    compliance: ['CE', 'RoHS', 'FCC', 'SASO'],
  },
  {
    id: 'sku-bldc-hub',
    sku: 'RTA-EV-306',
    name: '3kW 72V BLDC 2-Wheeler Hub Motor + Sine Controller',
    category: 'ev-automotive',
    moq: '40 sets',
    fobRange: 'US$118 – $152',
    port: 'Ningbo (Beilun)',
    leadTime: '35 days',
    compliance: ['CE', 'RoHS', 'ISO 9001'],
  },
  {
    id: 'sku-fiber-laser',
    sku: 'RTA-MC-401',
    name: '3kW 1530 CNC Fiber Laser Sheet Cutter',
    category: 'machinery-cnc',
    moq: '1 set',
    fobRange: 'US$16,500 – $22,000',
    port: 'Qingdao',
    leadTime: '38 days',
    compliance: ['CE', 'ISO 9001', 'SONCAP'],
  },
  {
    id: 'sku-vffs-packer',
    sku: 'RTA-MC-404',
    name: 'Multi-Head Weigher Vertical Form-Fill-Seal Machine',
    category: 'machinery-cnc',
    moq: '1 line',
    fobRange: 'US$9,800 – $14,200',
    port: 'Guangzhou (Nansha)',
    leadTime: '35 days',
    compliance: ['CE', 'ISO 9001', 'CDSCO'],
  },
  {
    id: 'sku-gan-65w',
    sku: 'RTA-MA-501',
    name: '65W 3-Port GaN PD3.0 Wall Charger (IN/EU/US Plug)',
    category: 'mobile-accessories',
    moq: '500 pcs',
    fobRange: 'US$4.90 – $6.80',
    port: 'Shenzhen (Yantian)',
    leadTime: '18 days',
    compliance: ['CE', 'RoHS', 'FCC', 'UL', 'BIS'],
  },
  {
    id: 'sku-mag-powerbank',
    sku: 'RTA-MA-503',
    name: '10,000mAh Qi2 15W Magnetic Wireless Power Bank',
    category: 'mobile-accessories',
    moq: '500 pcs',
    fobRange: 'US$8.90 – $11.60',
    port: 'Shenzhen (Shekou)',
    leadTime: '20 days',
    compliance: ['CE', 'RoHS', 'FCC', 'UN38.3', 'BIS'],
  },
  {
    id: 'sku-ss304-hinge',
    sku: 'RTA-CH-601',
    name: 'SS304 Heavy-Duty Concealed Door Hinge (Pair)',
    category: 'construction-hardware',
    moq: '1,000 pairs',
    fobRange: 'US$2.40 – $3.85',
    port: 'Ningbo / Guangzhou',
    leadTime: '24 days',
    compliance: ['CE', 'ISO 9001', 'SASO', 'G-Mark'],
  },
  {
    id: 'sku-led-highbay',
    sku: 'RTA-CH-604',
    name: '200W UFO Industrial LED High-Bay (160 lm/W, IP65)',
    category: 'construction-hardware',
    moq: '200 pcs',
    fobRange: 'US$24.00 – $32.50',
    port: 'Guangzhou (Nansha)',
    leadTime: '22 days',
    compliance: ['CE', 'RoHS', 'BIS', 'SASO'],
  },
  {
    id: 'sku-active-fabric',
    sku: 'RTA-TA-701',
    name: '240gsm Nylon-Spandex 4-Way Stretch Interlock Roll',
    category: 'textiles-apparel',
    moq: '1,000 yds',
    fobRange: 'US$2.15 – $2.95 / yd',
    port: 'Ningbo (Beilun)',
    leadTime: '24 days',
    compliance: ['OEKO-TEX', 'ISO 9001'],
  },
  {
    id: 'sku-cotton-tee',
    sku: 'RTA-TA-704',
    name: '260gsm Combed Organic Cotton Oversized Tee (OEM)',
    category: 'textiles-apparel',
    moq: '300 pcs / color',
    fobRange: 'US$3.60 – $4.90',
    port: 'Guangzhou (Huangpu)',
    leadTime: '26 days',
    compliance: ['OEKO-TEX', 'PVOC'],
  },
  {
    id: 'sku-rigid-box',
    sku: 'RTA-PK-801',
    name: 'Custom Foil-Stamped Magnetic Rigid Gift Box',
    category: 'packaging-oem',
    moq: '1,000 pcs',
    fobRange: 'US$0.95 – $1.85',
    port: 'Shenzhen / Yiwu',
    leadTime: '16 days',
    compliance: ['FSC', 'ISO 9001'],
  },
  {
    id: 'sku-kraft-pouch',
    sku: 'RTA-PK-803',
    name: 'Food-Grade Stand-Up Kraft Barrier Pouch + Valve',
    category: 'packaging-oem',
    moq: '5,000 pcs',
    fobRange: 'US$0.07 – $0.14',
    port: 'Qingdao / Ningbo',
    leadTime: '18 days',
    compliance: ['FDA', 'ISO 9001', 'CDSCO'],
  },
];

export const SOURCING_CLUSTERS: SourcingCluster[] = [
  {
    id: 'guangdong',
    province: 'Guangdong',
    cities: 'Shenzhen · Guangzhou · Dongguan · Foshan',
    ports: 'Yantian, Shekou, Nansha',
    specialties: 'Consumer electronics, audio, GaN chargers, EV chargers, apparel, architectural hardware',
    notes: 'Fastest prototyping turnaround (7–10 days) and direct air-freight links via CAN/HKG/SZX.',
  },
  {
    id: 'zhejiang',
    province: 'Zhejiang',
    cities: 'Yiwu · Ningbo · Shaoxing · Yongkang',
    ports: 'Ningbo-Zhoushan (Beilun)',
    specialties: 'General hardware, textiles, packaging, small-MOQ consolidation, automotive aftermarket',
    notes: 'Ideal for mixed-SKU LCL consolidation out of Yiwu and deep-water FCL departures from Ningbo.',
  },
  {
    id: 'jiangsu',
    province: 'Jiangsu',
    cities: 'Suzhou · Changzhou · Wuxi · Kunshan',
    ports: 'Shanghai (Yangshan), Taicang',
    specialties: 'Solar PV modules, LiFePO4 storage, precision CNC tooling, industrial automation',
    notes: 'Tier-1 engineering clusters with ISO/UL-certified factories and strict export QC.',
  },
  {
    id: 'shandong',
    province: 'Shandong',
    cities: 'Qingdao · Jinan · Weifang',
    ports: 'Qingdao (Qianwan)',
    specialties: 'Heavy CNC machinery, laser cutters, food processing lines, flexible packaging',
    notes: 'Lower factory overhead for heavy capital equipment and direct ocean routes to Nhava Sheva & Mundra.',
  },
];

export const COMPLIANCE_MATRIX: ComplianceEntry[] = [
  {
    id: 'global-ce-rohs',
    region: 'EU / UK / Global',
    mark: 'CE · RoHS · UKCA',
    authority: 'EU Notified Bodies',
    appliesTo: 'Electronics, machinery, solar, EV chargers, LED lighting',
    leadTime: '2–4 weeks',
    notes: 'EMC + LVD directives and hazardous-substance testing verified before shipment.',
  },
  {
    id: 'us-fcc-ul',
    region: 'North America',
    mark: 'FCC · UL / ETL',
    authority: 'FCC / UL Solutions',
    appliesTo: 'Wireless audio, GaN chargers, battery packs, industrial equipment',
    leadTime: '3–5 weeks',
    notes: 'FCC Part 15 ID/SDoC for RF devices; UL 2054 / UL 9540 for lithium storage.',
  },
  {
    id: 'india-bis',
    region: 'India',
    mark: 'BIS (CRS / ISI)',
    authority: 'Bureau of Indian Standards',
    appliesTo: 'Power banks, chargers, LED drivers, solar modules, lithium cells',
    leadTime: '4–8 weeks',
    notes: 'Mandatory factory registration + Indian lab sample testing prior to customs clearance.',
  },
  {
    id: 'india-wpc-cdsco',
    region: 'India',
    mark: 'WPC (ETA) · CDSCO',
    authority: 'DoT / CDSCO',
    appliesTo: 'Bluetooth/Wi-Fi devices (WPC); medical/food-contact packaging (CDSCO)',
    leadTime: '2–6 weeks',
    notes: 'RF test report from accredited lab required for WPC Equipment Type Approval.',
  },
  {
    id: 'me-saso-gmark',
    region: 'GCC / Middle East',
    mark: 'SASO (SABER) · G-Mark',
    authority: 'SASO / GSO',
    appliesTo: 'Electrical appliances, EV chargers, hardware, low-voltage gear',
    leadTime: '2–3 weeks',
    notes: 'Product Certificate of Conformity (PCoC) + Shipment CoC issued via SABER portal.',
  },
  {
    id: 'africa-soncap-pvoc',
    region: 'Africa',
    mark: 'SONCAP · PVOC',
    authority: 'SON / KEBS / TBS',
    appliesTo: 'Machinery, electronics, textiles, construction hardware',
    leadTime: '1–2 weeks',
    notes: 'Pre-shipment inspection (PSI) by SGS/Intertek/Bureau Veritas at Chinese load port.',
  },
];
