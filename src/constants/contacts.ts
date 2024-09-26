interface Contact {
  image: string;
  contact_id: number;
  user_id: number;
  name: string;
  description: string;
  email: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

const contacts: Contact[] = [
  {
    contact_id: 1,
    user_id: 1001,
    name: "John Anderson",
    description: "Project Manager at AlphaCorp",
    email: "john.anderson@alphacorp.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    created_at: "2023-09-15T09:00:00Z",
    updated_at: "2023-09-15T09:00:00Z",
  },
  {
    contact_id: 2,
    user_id: 1002,
    name: "Emily Davis",
    description: "Senior Developer at TechSolutions",
    email: "emily.davis@techsolutions.io",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    created_at: "2023-09-16T10:15:00Z",
    updated_at: "2023-09-16T10:15:00Z",
  },
  {
    contact_id: 3,
    user_id: 1003,
    name: "Michael Thompson",
    description: "Marketing Specialist at MarketGurus",
    email: "michael.thompson@marketgurus.net",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    created_at: "2023-09-17T11:30:00Z",
    updated_at: "2023-09-17T11:30:00Z",
  },
  {
    contact_id: 4,
    user_id: 1004,
    name: "Sarah Johnson",
    description: "UX Designer at Creative Minds",
    email: "sarah.johnson@creativeminds.org",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    created_at: "2023-09-18T12:45:00Z",
    updated_at: "2023-09-18T12:45:00Z",
  },
  {
    contact_id: 5,
    user_id: 1005,
    name: "David Martinez",
    description: "Data Analyst at Insight Analytics",
    email: "david.martinez@insightanalytics.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    created_at: "2023-09-19T14:00:00Z",
    updated_at: "2023-09-19T14:00:00Z",
  },
  {
    contact_id: 6,
    user_id: 1006,
    name: "Olivia Brown",
    description: "HR Manager at PeopleFirst",
    email: "olivia.brown@peoplefirst.co",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    created_at: "2023-09-20T15:15:00Z",
    updated_at: "2023-09-20T15:15:00Z",
  },
  {
    contact_id: 7,
    user_id: 1007,
    name: "James Wilson",
    description: "Financial Advisor at SecureFunds",
    email: "james.wilson@securefunds.biz",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    created_at: "2023-09-21T16:30:00Z",
    updated_at: "2023-09-21T16:30:00Z",
  },
  {
    contact_id: 8,
    user_id: 1008,
    name: "Sophia Taylor",
    description: "Content Writer at WordWorks",
    email: "sophia.taylor@wordworks.info",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    created_at: "2023-09-22T17:45:00Z",
    updated_at: "2023-09-22T17:45:00Z",
  },
  {
    contact_id: 9,
    user_id: 1009,
    name: "William Lee",
    description: "Product Manager at NextGen Tech",
    email: "william.lee@nextgentech.io",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    created_at: "2023-09-23T19:00:00Z",
    updated_at: "2023-09-23T19:00:00Z",
  },
  {
    contact_id: 10,
    user_id: 1010,
    name: "Ava Harris",
    description: "Chief Operating Officer at Global Ventures",
    email: "ava.harris@globalventures.com",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    created_at: "2023-09-24T20:15:00Z",
    updated_at: "2023-09-24T20:15:00Z",
  },
];

export default contacts;
