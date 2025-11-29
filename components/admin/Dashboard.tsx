"use client";
import { useState } from "react";
import Tabs from "./Tabs";
import LeadsTable from "./LeadsTable";
import SubscribersTable from "./SubscribersTable";

export default function Dashboard() {
  const [tab, setTab] = useState<"leads" | "subscribers">("leads");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-blue-600">
          Admin Panel – {tab === "leads" ? "Leads" : "Subscribers"}
        </h1>
      </div>

      <Tabs active={tab} onChange={setTab} />

      <div className="mt-5">
        {tab === "leads" ? <LeadsTable /> : <SubscribersTable />}
      </div>
    </div>
  );
}
