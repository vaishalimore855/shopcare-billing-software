"use client";

import { useState } from "react";

import LeadsTable from "@/components/admin/LeadsTable";
import SubscribersTable from "@/components/admin/SubscribersTable";
import Header from "@/app/admin/Header";
import LoginForm from "@/components/admin/LoginForm";
export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [activeTab, setActiveTab] = useState<"leads" | "subscribers">("leads");

  // ------------------- LOGIN UI -------------------
  // if (!auth) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-slate-100">
  //       <LoginForm />
  //     </div>
  //   );
  // }

  // return (
  //   <>
  //     <LoginForm />
  //   </>
  // );
  // ------------------- DASHBOARD UI -------------------
  return (
    <div className="min-h-screen bg-gray-100 p-3">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={() => setAuth(false)}
      />
      {/* Leads Table */}
      {activeTab === "leads" && (
        <div className="bg-white  shadow rounded-xl p-2">
          {/* <h2 className="text-xl font-bold mb-4">Leads</h2> */}

          <LeadsTable />
        </div>
      )}

      {/* Subscribers Table */}
      {activeTab === "subscribers" && (
        <div className="bg-white shadow rounded-xl p-6">
          {/* <h2 className="text-xl font-bold mb-4">Subscribers</h2> */}

          <SubscribersTable />
        </div>
      )}
    </div>
  );
}
