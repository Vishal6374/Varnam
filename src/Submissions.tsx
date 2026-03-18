import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

const Submissions: React.FC = () => {
  const [accessCode, setAccessCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const correctCode = "0000";

  useEffect(() => {
    if (isAuthorized) {
      fetchSubmissions();
    }
  }, [isAuthorized]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "registrations"),
        orderBy("submittedAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAccessCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === correctCode) {
      setIsAuthorized(true);
    } else {
      alert("Invalid access code.");
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#171012] flex items-center justify-center p-6 font-sans">
        <div className="bg-[#d9d9d91a] backdrop-blur-md border border-white/20 p-12 rounded-2xl shadow-2xl w-full max-w-md text-center">
          <h1 className="font-melodrama text-4xl text-white italic mb-8">Admin Access</h1>
          <form onSubmit={handleAccessCheck} className="space-y-6">
            <input
              type="password"
              placeholder="Enter Code"
              className="w-full bg-[#d9d9d9] rounded-lg px-6 py-4 text-black text-xl text-center focus:ring-2 focus:ring-orange-500 transition-all font-sans"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-melodrama text-2xl italic py-4 rounded-lg transition-all shadow-lg"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#171012] p-8 md:p-12 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="font-melodrama text-5xl italic">Form Submissions</h1>
          <button
            onClick={() => {
              const csvContent = "data:text/csv;charset=utf-8," 
                + "Name,SIN,Department,Year,Mobile,Email,Events,Team\\n"
                + submissions.map(s => `"${s.fullName}","${s.sinNumber}","${s.department}","${s.yearOfStudy}","${s.mobileNumber}","${s.emailAddress}","${s.registerFor?.join(", ")}","${s.teamMembers?.replace(/\\n/g, " ")}"`).join("\\n");
              const encodedUri = encodeURI(csvContent);
              const link = document.createElement("a");
              link.setAttribute("href", encodedUri);
              link.setAttribute("download", "varnam_registrations.csv");
              document.body.appendChild(link);
              link.click();
            }}
            className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-lg flex items-center gap-2 transition-all font-melodrama italic text-xl"
          >
            Export to CSV
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-24 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-2xl text-white/50 italic">No registrations found yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 shadow-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/10 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-melodrama text-xl italic font-normal">S.No</th>
                  <th className="px-6 py-4 font-melodrama text-xl italic font-normal">Full Name</th>
                  <th className="px-6 py-4 font-melodrama text-xl italic font-normal">Sin Number</th>
                  <th className="px-6 py-4 font-melodrama text-xl italic font-normal">Dept / Year</th>
                  <th className="px-6 py-4 font-melodrama text-xl italic font-normal">Contact</th>
                  <th className="px-6 py-4 font-melodrama text-xl italic font-normal">Events</th>
                  <th className="px-6 py-4 font-melodrama text-xl italic font-normal">Team</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s, idx) => (
                  <tr key={s.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white/50">{idx + 1}</td>
                    <td className="px-6 py-4 font-medium">{s.fullName}</td>
                    <td className="px-6 py-4 font-mono text-sm text-orange-400">{s.sinNumber}</td>
                    <td className="px-6 py-4 text-sm text-white/80">{s.department} (Year {s.yearOfStudy})</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                       <div>{s.mobileNumber}</div>
                       <div className="opacity-50">{s.emailAddress}</div>
                    </td>
                    <td className="px-6 py-4">
                       <div className="flex flex-wrap gap-2">
                         {s.registerFor?.map((event: string) => (
                           <span key={event} className="bg-orange-500/20 text-orange-400 text-[11px] px-2 py-1 rounded border border-orange-500/30 uppercase font-mono">
                             {event}
                           </span>
                         ))}
                       </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-white/60 max-w-xs truncate" title={s.teamMembers}>
                      {s.teamMembers || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Submissions;
