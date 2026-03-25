export type FeatureRow = {
  title: string;
  body: string;
  image: string;
  imageLeft: boolean;
};

const p = "/assets/product";

/* Feature images: feat-1.png … feat-9.png match supplied art order (row index). */
export const featureRows: FeatureRow[] = [
  {
    title: "Long Range Operations",
    body: "Cruise-missile level performance delivered affordably — extended operational reach up to 2,000 km with robust performance in dynamic, contested, and degraded environments.",
    image: `${p}/feat-1.png`,
    imageLeft: true,
  },
  {
    title: "Extended Endurance",
    body: "Up to 9 hours of endurance provides operators with a broad operational envelope, supporting long-duration missions, deep-strike profiles, and sustained surveillance in contested environments.",
    image: `${p}/feat-2.png`,
    imageLeft: false,
  },
  {
    title: "Mission Assurance & Redundancy",
    body: "Built on the architecture of the most sophisticated, large-class UAV platforms, our product incorporates full redundancy across power, navigation, and critical systems. That multi-layered resilience ensures the highest safety standards in-flight and maximizes mission assurance — reliably reaching targets while minimizing false launches.",
    image: `${p}/feat-3.png`,
    imageLeft: true,
  },
  {
    title: "Open AI Framework",
    body: "Phoenix LT redefines operational autonomy with a built-in, open AI framework that enables users or third-party integrators to create and implement mission-specific applications in-house. This capability reduces dependency, accelerates innovation cycles, and supports rapid adaptation to evolving battlefield needs.",
    image: `${p}/feat-4.png`,
    imageLeft: false,
  },
  {
    title: "Payload, Range & Versatility",
    body: "Highly versatile platform capable of delivering payloads of up to 50kg across distances of up to 2,000 km with precision and reliability.",
    image: `${p}/feat-5.png`,
    imageLeft: true,
  },
  {
    title: "Advanced Onboard Traffic Management",
    body: "The Phoenix LT is equipped with an advanced onboard computer that autonomously manages UAV traffic, making real-time decisions using data from over 35 integrated sources — enabling safe and precise navigation to targets.",
    image: `${p}/feat-6.png`,
    imageLeft: false,
  },
  {
    title: "Parallel Fleet Launch & Control",
    body: "The streamlined launch and operations platform enables simultaneous, secure communication with unlimited UAVs, ATMS and TMS. Operators can distribute flight plans and mission data to large fleets with one command and execute multi‑vehicle launches in parallel, reducing mission tempo and operator workload.",
    image: `${p}/feat-7.png`,
    imageLeft: true,
  },
  {
    title: "AI Flight Path Optimization",
    body: "Powered by advanced AI engines, the Phoenix LT performs rapid, fully automated flight path optimization — ensuring every mission is executed along the shortest and most efficient route. The system continuously accounts for terrain elevation, ground obstacles, and airborne hazards, delivering uncompromising safety and operational precision.",
    image: `${p}/feat-8.png`,
    imageLeft: false,
  },
  {
    title: "Mission Applications & TMS Integration",
    body: "Phoenix LT empowers integrators and operators to develop custom mission applications from the ground up using the company’s development platform—deploying them directly to the Targeting Management System (TMS) without OEM involvement. This unprecedented autonomy enables agile innovation and seamless integration of niche capabilities with maximum operational intimacy.",
    image: `${p}/feat-9.png`,
    imageLeft: true,
  },
];
