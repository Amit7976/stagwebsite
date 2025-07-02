import React from "react";
import Image from "next/image";
function Team() {
  const team = [
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80",
      post: "Creator of Windstatic.com",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Melonia Tusk",
      image:
        "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80",
      post: "Founder of Fesla",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2073&amp;q=80",
      post: "Director at Pettersson Industries",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80",
      post: "Creator of Windstatic.com",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2073&amp;q=80",
      post: "Director at Pettersson Industries",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80",
      post: "Creator of Windstatic.com",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Melonia Tusk",
      image:
        "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80",
      post: "Founder of Fesla",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2073&amp;q=80",
      post: "Director at Pettersson Industries",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80",
      post: "Creator of Windstatic.com",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Melonia Tusk",
      image:
        "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80",
      post: "Founder of Fesla",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2073&amp;q=80",
      post: "Director at Pettersson Industries",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80",
      post: "Creator of Windstatic.com",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Melonia Tusk",
      image:
        "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80",
      post: "Founder of Fesla",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
    {
      name: "Michael Andreuzza",
      image:
        "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2073&amp;q=80",
      post: "Director at Pettersson Industries",
      instagram: "sed",
      tweeter: "serfd",
      linkedin: "srf",
      facebook: "sfdeg",
    },
  ];
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
        <ul role="list" className="grid gap-12 mt-12 lg:grid-cols-4">
          {team.map((team, index) => (
            <li key={index}>
              <div className="space-y-4">
                <div className="aspect-[3/2] overflow-hidden rounded-3xl">
                  <Image
                    className="object-cover w-full h-full rounded-2xl hover:scale-105 duration-500"
                    src={team.image}
                    alt={team.name}
                    width={800}
                    height={800}
                  />
                </div>
                <div className="inline-flex items-start justify-between w-full">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-black dark:text-white">
                      {team.name}
                    </h3>
                    <p className="text-base text-gray-500 dark:text-neutral-500">{team.post}</p>
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
