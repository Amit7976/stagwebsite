"use client";

import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function MainContent() {
    const departments = [
        "All Departments",
        "Engineering & Development",
        "Design & User Experience",
        "Sales & Marketing",
        "IT & Infrastructure",
    ];

    const positions = [
        {
            category: "Engineering & Development",
            roles: [
                { title: "Front End Developer (Next.Js)", location: "Remote", link: "#" },
                { title: "Backend Developer (Node.JS)", location: "Remote", link: "#" },
                { title: "Full Stack Developer (MERN)", location: "Remote", link: "https://forms.gle/8Dbp2rGe1FzWoxje7" },
            ],
        },
        {
            category: "Design & User Experience",
            roles: [
                { title: "UX Designer", location: "Remote", link: "https://forms.gle/aZcmfjP5fN8EgtXGA" },
                { title: "Graphics Designer", location: "Remote", link: "#" },
            ],
        },
        {
            category: "Sales & Marketing",
            roles: [
                { title: "Sales Executive", location: "Daman, India | Remote", link: "#" },
                { title: "Marketing Specialist", location: "Daman, India | Remote", link: "#" },
                { title: "Digital Marketing", location: "Remote", link: "https://forms.gle/WRnmirBZHDWndb4R6" },
                { title: "Content Creator", location: "Remote", link: "#" },
                { title: "Market Research", location: "Remote", link: "#" },
                { title: "SMO Specialist", location: "Remote", link: "#" },
                { title: "Video Editor", location: "Remote", link: "#" },
            ],
        },
        {
            category: "IT & Infrastructure",
            roles: [
                { title: "Content Writer", location: "Remote", link: "#" },
                { title: "SEO Specialist", location: "Remote", link: "#" },
                { title: "Network Engineer", location: "Remote", link: "#" },
            ],
        },
    ];

    const [selectedDept, setSelectedDept] = React.useState("All Departments");

    const filteredPositions =
        selectedDept === "All Departments"
            ? positions
            : positions.filter((pos) => pos.category === selectedDept);

    return (
        <section className="mb-20">
            <div className="px-4 md:px-20">
                <div className="flex w-full flex-col gap-14">
                    <h2 className="text-5xl leading-[1.3] font-semibold">Open Positions</h2>

                    <div className="flex flex-wrap items-center justify-start gap-5">
                        <label className="text-base font-semibold text-muted-foreground">Filter</label>

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

                    <div className="flex flex-col gap-16">
                        {filteredPositions.map((pos, idx) => (
                            <div key={idx} className="flex w-full flex-col justify-start gap-10">
                                <h3 className="text-4xl leading-none font-semibold">{pos.category}</h3>
                                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                                    {pos.roles.map((role, i) => (
                                        <Link
                                            key={i}
                                            href={role.link}
                                            target="_blank"
                                            className="block rounded-md bg-muted p-5 transition-colors hover:bg-muted-2"
                                        >
                                            <div className="mb-1 text-lg font-semibold">{role.title}</div>
                                            <div className="text-sm text-muted-foreground">{role.location}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
