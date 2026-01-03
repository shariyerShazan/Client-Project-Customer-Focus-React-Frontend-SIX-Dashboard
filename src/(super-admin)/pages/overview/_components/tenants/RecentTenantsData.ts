export interface Tenant {
  id: string;
  name: string;
  domain: string;
  email: string;
  planType: "Growth" | "Enterprise" | "Starter";
  totalUsers: number;
  isActive: boolean;
  createdAt: string;
  avatarColor: string;
}

export const RecentTenantsData: Tenant[] = [
  {
    id: "1",
    name: "Acme Corp",
    domain: "domain@e2e.com",
    email: "acmecorp@gmail.com",
    planType: "Growth",
    totalUsers: 50,
    isActive: true,
    createdAt: "April 14, 2020",
    avatarColor: "bg-purple-100 text-purple-600",
  },
  {
    id: "2",
    name: "Beta Inc",
    domain: "domain@e2e.com",
    email: "acmecorp@gmail.com",
    planType: "Enterprise",
    totalUsers: 50,
    isActive: false,
    createdAt: "April 14, 2020",
    avatarColor: "bg-blue-100 text-blue-600",
  },
  {
    id: "3",
    name: "Gamma Ltd",
    domain: "domain@e2e.com",
    email: "acmecorp@gmail.com",
    planType: "Starter",
    totalUsers: 25,
    isActive: true,
    createdAt: "April 14, 2020",
    avatarColor: "bg-purple-100 text-purple-600",
  },
  {
    id: "4",
    name: "Gamma Ltd",
    domain: "domain@e2e.com",
    email: "acmecorp@gmail.com",
    planType: "Starter",
    totalUsers: 25,
    isActive: true,
    createdAt: "April 14, 2020",
    avatarColor: "bg-purple-100 text-purple-600",
  },
    {
    id: "1",
    name: "Acme Corp",
    domain: "domain@e2e.com",
    email: "acmecorp@gmail.com",
    planType: "Growth",
    totalUsers: 50,
    isActive: true,
    createdAt: "April 14, 2020",
    avatarColor: "bg-purple-100 text-purple-600",
  },
  {
    id: "2",
    name: "Beta Inc",
    domain: "domain@e2e.com",
    email: "acmecorp@gmail.com",
    planType: "Enterprise",
    totalUsers: 50,
    isActive: false,
    createdAt: "April 14, 2020",
    avatarColor: "bg-blue-100 text-blue-600",
  },
  {
    id: "3",
    name: "Gamma Ltd",
    domain: "domain@e2e.com",
    email: "acmecorp@gmail.com",
    planType: "Starter",
    totalUsers: 25,
    isActive: true,
    createdAt: "April 14, 2020",
    avatarColor: "bg-purple-100 text-purple-600",
  },
  {
    id: "4",
    name: "Gamma Ltd",
    domain: "domain@e2e.com",
    email: "acmecorp@gmail.com",
    planType: "Starter",
    totalUsers: 25,
    isActive: true,
    createdAt: "April 14, 2020",
    avatarColor: "bg-purple-100 text-purple-600",
  },
];