export interface Publication {
  title: string;
  venue: string;
  authors: string;
  publisher: string;
  year: number;
  doi: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title: "Transforming Finance: Exploring the Role of Blockchain and Smart Contracts",
    venue: 'Book Chapter in "Fintech Applications in Islamic Finance: AI, Machine Learning, and Blockchain Techniques"',
    authors: "G. Sowmya, R. Sridevi, Sri Ganesh Shiramshetty",
    publisher: "IGI Global",
    year: 2024,
    doi: "10.4018/979-8-3693-1038-0.ch017",
    url: "https://www.igi-global.com/chapter/transforming-finance/334994",
  },
  {
    title: "The Role of Blockchain in Cyber Physical Systems",
    venue: 'Book Chapter in "Navigating Cyber-Physical Systems With Cutting-Edge Technologies"',
    authors: "G. Sowmya, R. Sridevi, K. S. Sadasiva Rao, Sri Ganesh Shiramshetty",
    publisher: "IGI Global",
    year: 2025,
    doi: "10.4018/979-8-3693-5728-6.ch001",
    url: "https://www.igi-global.com/chapter/the-role-of-blockchain-in-cyber-physical-systems/363625",
  },
  {
    title: "A Novel Approach for Smart Agriculture Using IoT and Machine Learning",
    venue: "IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    authors: "Sri Ganesh Shiramshetty, G. Sowmya, R. Sridevi",
    publisher: "IEEE",
    year: 2021,
    doi: "10.1109/CONECCT52877.2021.9622687",
    url: "https://ieeexplore.ieee.org/document/9489208",
  },
]; 