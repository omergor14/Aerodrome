export type SpecRow = { label: string; value: string };
export type SpecSection = { title: string; rows: SpecRow[] };

export const specificationSections: SpecSection[] = [
  {
    title: "Performance",
    rows: [
      { label: "Max Flight Time", value: "9 hours" },
      { label: "Max Speed (Vmax)", value: "122 Knots (60 m/s)" },
      { label: "Optimized Cruise Speed (VR)", value: "76 Knots (38 m/s)" },
      { label: "Stall speed (Vstall)", value: "98 Knots (50 m/s)" },
      { label: "Service Ceiling", value: "8,000 ft. ASL" },
      { label: "Optimized Operational Alt.", value: "2,400 ft. ASL" },
      { label: "Max Pitch Angle (flight)", value: "15 Degrees" },
      { label: "Max Pitch Angle ( T.Guidance)", value: "70 Degrees" },
      { label: "Min. Turn Radius", value: "450 Meters" },
      { label: "Optimized Climb Rate", value: "5 m/s" },
      { label: "Operating Temperature", value: "-20°C to +50°C" },
    ],
  },
  {
    title: "Dimensions",
    rows: [
      { label: "Wingspan", value: "2,500 mm" },
      { label: "Length", value: "3,500 mm" },
      { label: "Empty Weight (No Fuel No WH)", value: "93 Kg." },
      { label: "Max Takeoff Weight", value: "250 Kg." },
      { label: "Max Payload", value: "50 Kg." },
      { label: "Fuel Capacity", value: "107L" },
      { label: "Rocket Booster Weight", value: "5.3 Kg" },
      {
        label: "Box Dimensions (Folded)",
        value: "2,800mm x 1,600mm x 1,950mm",
      },
      { label: "Shipping Weight", value: "225 Kg." },
    ],
  },
  {
    title: "Propulsion",
    rows: [
      { label: "Displacement", value: "550cc" },
      { label: "Configuration", value: "4 Cylinders Boxer Config." },
      { label: "Fuel", value: "MOGAS 95" },
      { label: "Alternator Output", value: "28V 500W" },
      { label: "Start-up", value: "Electronic built-in starter" },
      { label: "RPM Range", value: "1,800-7,500 RPM" },
      { label: "Max. Power", value: "50 Bhp/7,500 RPM" },
      { label: "Ignition System", value: "DC CDI Ignition System" },
      { label: "Cooling Method", value: "Air Cooled" },
      { label: "Propeller Size", value: "2824x3418" },
    ],
  },
  {
    title: "Navigation",
    rows: [
      { label: "Source", value: "GPS, Glonass, Galileo, BeiDou" },
      { label: "Type", value: "HX4-06213, ZED F9P O2B" },
      {
        label: "EW Resilience",
        value: "Optional Visual Nav and Adaptive Antenna (Contact Sales)",
      },
      { label: "RTK", value: "Optional" },
    ],
  },
  {
    title: "Communication",
    rows: [
      { label: "Primary Comm. Method", value: "2.4G WiFi 100Mwh" },
      { label: "Tactical Comm. (Optional)", value: "C-Band 5.8GhZ" },
      { label: "Mission Comm. (Optional)", value: "LTE" },
    ],
  },
  {
    title: "Rocket Launcher",
    rows: [
      { label: "Power", value: "14KNS" },
      { label: "Burning Time", value: "Approx 2.3 Sec." },
      { label: "Release Mechanism", value: "Mechanical Automatic drop-off" },
      { label: "Weight", value: "2.5 Kg." },
    ],
  },
];
