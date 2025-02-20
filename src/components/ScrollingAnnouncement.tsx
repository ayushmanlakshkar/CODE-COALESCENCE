import React from "react";

const announcements = [
  //   "🚀 Hackathon Extended! New Date: February 23",
  //   "🎯 Registration Deadline Extended: February 23",
  //   "📌 Team Size Limit: 2-4 members per team",
  //   "🏆 Exciting Prizes Await! Don't Miss Out!",
  //   "🛠 Hackathon Theme Reveal on February 22!",
  "🔥Exciting Update! The Registration Deadline has been Extended till February 23!",
  "🔥Exciting Update! The Registration Deadline has been Extended till February 23!",
];

function ScrollingAnnouncement() {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary hover:from-primary-light hover:to-secondary-light text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-scroll flex w-max">
        {announcements.concat(announcements).map((announcement, index) => (
          <span key={index} className="mx-6 text-sm font-semibold">
            {announcement}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ScrollingAnnouncement;
