export type Certificate = {
  id: string;
  title: string;
  institution: string;
  date: string;
  grade: string;
  /** Public path e.g. "/certificates/introduction-to-cyber-security.png" */
  image: string;
};

/**
 * SoftUni certificates — append objects here to add more.
 */
export const certificates: Certificate[] = [
  {
    id: "introduction-to-cyber-security",
    title: "Introduction to Cyber Security",
    institution: "SoftUni",
    date: "September 2025",
    grade: "6.00 / 6.00",
    image: "/certificates/introduction-to-cyber-security.png",
  },
  {
    id: "reconnaissance-fundamentals",
    title: "Reconnaissance Fundamentals",
    institution: "SoftUni",
    date: "November 2025",
    grade: "5.40 / 6.00",
    image: "/certificates/reconnaissance-fundamentals.png",
  },
  {
    id: "system-and-network-compromising",
    title: "System and Network Compromising",
    institution: "SoftUni",
    date: "June 2026",
    grade: "5.54 / 6.00",
    image: "/certificates/system-and-network-compromising.png",
  },
];
