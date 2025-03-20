import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { day: "Mon", likes: 120, comments: 45, shares: 20 },
  { day: "Tue", likes: 150, comments: 60, shares: 30 },
  { day: "Wed", likes: 170, comments: 55, shares: 25 },
  { day: "Thu", likes: 130, comments: 50, shares: 20 },
  { day: "Fri", likes: 180, comments: 70, shares: 40 },
  { day: "Sat", likes: 200, comments: 90, shares: 50 },
  { day: "Sun", likes: 220, comments: 100, shares: 60 },
];

const SocialAnalytics = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Likes & Engagement Overview */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Likes & Engagement</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="likes" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="comments" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* Shares Overview */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Shares Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="shares" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialAnalytics;
