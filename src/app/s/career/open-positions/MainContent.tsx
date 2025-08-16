"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PeopleIcon } from "@/lib/icons/icons";
import { Clock, MapPin, Pin } from "lucide-react";
import Link from "next/link";
import * as React from "react";

interface Job {
    _id: string;
    category: string;
    role: string;
    applyLink: string;
    location: string;
    salary: string;
    openings: number;
    locationType: string;
    jobType: string;
    openDate: string;
    closeDate: string;
    active: boolean;
}

export default function MainContent() {
    const [jobs, setJobs] = React.useState<Job[]>([]);
    const [selectedDept, setSelectedDept] = React.useState("All Departments");
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/career");
                const json = await res.json();
                setJobs(json.data);
            } catch (error) {
                console.error("Error fetching careers:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const departments = [
        "All Departments",
        ...new Set(jobs.map((job) => job.category)),
    ];

    const filteredJobs =
        selectedDept === "All Departments"
            ? jobs
            : jobs.filter((job) => job.category === selectedDept);

    // ✅ Group by category
    const groupedJobs = filteredJobs.reduce((acc: Record<string, Job[]>, job) => {
        if (!acc[job.category]) acc[job.category] = [];
        acc[job.category].push(job);
        return acc;
    }, {});

    if (loading) {
        return <p className="text-center py-10">Loading open positions...</p>;
    }

    return (
        <section className="mb-20">
            <div className="px-4 md:px-20">
                <div className="flex w-full flex-col gap-14">
                    <h2 className="text-5xl leading-[1.3] font-semibold">Open Positions</h2>

                    {/* ✅ Filter */}
                    <div className="flex flex-wrap items-center justify-start gap-5">
                        <label className="text-base font-semibold text-muted-foreground">
                            Filter
                        </label>

                        <Select value={selectedDept} onValueChange={setSelectedDept}>
                            <SelectTrigger className="w-64">
                                <SelectValue placeholder="All Departments" />
                            </SelectTrigger>
                            <SelectContent>
                                {departments.map((dept) => (
                                    <SelectItem key={dept} value={dept}>
                                        {dept}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* ✅ Category-wise Grouped Jobs */}
                    {Object.keys(groupedJobs).length < 1 ? (
                        <div className="w-full flex items-center justify-center">
                            <p className="text-xl font-medium font-sans2">No Openings Right Now</p>
                        </div>
                    ) : (
                        Object.entries(groupedJobs).map(([category, jobs]) => (
                            <div key={category} className="space-y-6">
                                {/* Category Title */}
                                <h3 className="text-2xl font-semibold pb-2">{category}</h3>

                                {/* Jobs in that category */}
                                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                                    {jobs.map((job) => {
                                        const today = new Date();
                                        const closeDate = new Date(job.closeDate);
                                        const daysLeft = Math.ceil(
                                            (closeDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
                                        );

                                        return (
                                            <Link
                                                key={job._id}
                                                href={job.applyLink}
                                                target="_blank"
                                                className="block rounded-md bg-muted p-5 pb-4 transition-colors hover:bg-muted-2 relative"
                                            >
                                                <div className="mb-8 text-lg font-medium">{job.role}</div>
                                                <div className="mb-5 text-xl font-light flex items-center gap-3">
                                                    <div className="flex items-center gap-1">
                                                        <PeopleIcon />
                                                        {job.openings}
                                                    </div>
                                                    <span className="text-muted-foreground">|</span>
                                                    {job.salary}
                                                </div>
                                                <div className="flex items-center justify-between gap-4">
                                                    {job.locationType === "remote" ? (
                                                        ""
                                                    ) : (
                                                        <div className="text-sm flex items-center gap-1 capitalize font-medium font-sans2">
                                                            <MapPin className="size-4 text-muted-foreground" />
                                                            {job.location}
                                                        </div>
                                                    )}
                                                    <div className="text-sm flex items-center gap-1 capitalize font-medium font-sans2">
                                                        <Pin className="size-4 text-muted-foreground" />
                                                        {job.locationType}
                                                    </div>
                                                    <div className="text-sm flex items-center gap-1 capitalize font-medium font-sans2">
                                                        <Clock className="size-4 text-muted-foreground" />
                                                        {job.jobType}
                                                    </div>
                                                </div>
                                                <div className="text-xs text-red-500 mt-2 absolute top-2 right-2 px-5 py-2 border-red-500 border-2 rounded-full font-medium font-sans2">
                                                    {`${daysLeft} day${daysLeft > 1 ? "s" : ""}`}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
