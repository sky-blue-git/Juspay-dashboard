import React from "react";
import bugIcon from "../../../assets/IconSet.svg";
import releaseIcon from "../../../assets/IconSet1.svg";
import submitIcon from "../../../assets/IconSet2.svg";
import modifyIcon from "../../../assets/IconSet3.svg";
import deleteIcon from "../../../assets/IconSet4.svg";

const Activities = () => {
  const activities = [
    { title: "You have a bug that needs...", time: "Just now", image: bugIcon },
    { title: "Released a new version", time: "59 minutes ago", image: releaseIcon },
    { title: "Submitted a bug", time: "12 hours ago", image: submitIcon },
    { title: "Modified A data in Page X", time: "Today, 11:59 AM", image: modifyIcon },
    { title: "Deleted a page in Project X", time: "Feb 2, 2023", image: deleteIcon },
  ];

  return (
    <div style={{ width: "240px", marginTop: "28px" }}>
      <p style={{fontSize: '14px', fontWeight: '600', padding: '8px 4px', marginBottom:"8px"}}>Activities</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
        {activities.map((activity, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              padding: "4px",
              gap: "8px",
              width: "100%",
            }}
          >
            <img
              src={activity.image}
              alt="Activity"
            />
            <div>
              <p style={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px'}}>
                {activity.title}
              </p>
              <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '18px', color: 'var(--black40)' }}>
                {activity.time}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  );
};

export default Activities;
