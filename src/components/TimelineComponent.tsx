import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineComponent() {
  const data = [
    {
      title: "2023",
      subPoint: false,
      company: "PWC India",
      post: "Specialist 3",
      jobrole: "Full stack developer",
      content: (
        <div>
          Completed My B.tech and joined PWC India as an Specialist 3! 🥳
        </div>
      ),
    },
    {
      title: "",
      subPoint: true,
      content: (
        <div>
          Developed backend APIs using Node.js and MongoDB, supporting multiple
          front-end applications, ensuring seamless data flow and performance
          optimization.
        </div>
      ),
    },
    {
      title: "",
      subPoint: true,
      content: (
        <div>
          Integrated third-party libraries like Chart.js, Recharts, and D3.js
          for dynamic data visualization, along with payment services like
          Braintree to enable secure transactions and streamline checkout
          experiences.
        </div>
      ),
    },
    {
      title: "",
      subPoint: true,
      content: (
        <div>
          Integrated third-party services (e.g., Braintree , Cloudinary),
          enabling seamless payment processing, file storage etc.
        </div>
      ),
    },
    {
      title: "2024",
      subPoint: false,
      company: "PWC India",
      post: "Associate",
      jobrole: "Full stack developer",
      content: <div>Got a promoted to Associate at PWC India! 🥳🥳</div>,
    },
    {
      title: "",
      subPoint: true,
      content: (
        <div>
          Designed and developed scalable microservices using Node.js &
          Express.js, handling 10K+ concurrent requests efficiently.
        </div>
      ),
    },
    {
      title: "",
      subPoint: true,
      content: (
        <div>
          Optimized UI using state management strategies with Redux and Context
          API, leveraging advanced memoization techniques (React.memo, useMemo),
          service workers for intelligent caching, and performance enhancements
          like lazy loading and code splitting to minimize redundant network
          requests and accelerate load times by 70%.
        </div>
      ),
    },
    {
      title: "",
      subPoint: true,
      content: (
        <div>
          Secured REST APIs using JWT-based authentication for enhanced
          security.
        </div>
      ),
    },
    {
      title: "",
      subPoint: true,
      content: (
        <div>
          Designed and implemented a real-time chat system using WebSockets on
          both backend (Node.js & Express.js) and frontend (React.js), enabling
          seamless bi-directional communication.
        </div>
      ),
    },
    {
      title: "2025",
      subPoint: false,
      company: "PWC India",
      post: "Associate",
      jobrole: "Full stack developer",
      content: <div>Continued my journey with PWC.</div>,
    },
    {
      title: "",
      subPoint: true,
      content: (
        <div>
          Implemented server-side rendering (SSR) with Next.js, reducing initial
          load time by 40%
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
