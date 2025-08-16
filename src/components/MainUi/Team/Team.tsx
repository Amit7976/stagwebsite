"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Admin {
  _id: string;
  firstName: string;
  lastName: string;
  department: string;
  image?: string;
}

function Team() {
  const [team, setMembers] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  
  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/team?type=job");
      const data = await res.json();
      if (data.success) {
        setMembers(data.data);
      }
    } catch (error) {
      console.error("Error fetching job team:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 col-span-2">
        <div className="loader"></div>
      </div>
    )
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div>
        <div className="text-start">
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 dark:text-neutral-300 lg:text-5xl">
            Meet Our Team
            <span className="block text-gray-600 dark:text-neutral-400">
              Diverse<span className="text-orange-600">.</span> Skilled<span className="text-orange-600">.</span> United<span className="text-orange-600">.</span>
            </span>
          </h1>
          <p className="mt-4 text-base font-medium text-gray-500 dark:text-neutral-500">
            A group of passionate individuals working together to innovate and
            excel in our industry.
          </p>
        </div>
        <ul role="list" className="grid gap-12 mt-12 lg:grid-cols-3">
          {[...team].reverse().map((team, index) => (
            <li key={index} className="list-none">
              <div className="space-y-4">
                <div className="aspect-[3/2] overflow-hidden rounded-3xl">
                  <Image
                    className="object-cover w-full h-full rounded-2xl hover:scale-105 duration-500"
                    src={team.image || ""}
                    alt={team.firstName +" "+ team.lastName}
                    width={800}
                    height={800}
                  />
                </div>
                <div className="inline-flex items-start justify-between w-full">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-black dark:text-white capitalize">
                      {team.firstName + " " + team.lastName}
                    </h3>
                    <p className="text-base text-gray-500 dark:text-neutral-500">{team.department}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Team;
