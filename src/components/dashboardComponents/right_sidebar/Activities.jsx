import React from "react";
import activityIcon from "../../../assets/react.svg";

const Activities = () => {
  const activities = [
    { title: "You have a bug that needs...", time: "Just now" },
    { title: "Released a new version", time: "59 minutes ago" },
    { title: "Submitted a bug", time: "12 hours ago" },
    { title: "Modified A data in Page X", time: "Today, 11:59 AM" },
    { title: "Deleted a page in Project X", time: "Feb 2, 2023" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "16px",
        width: "240px",
        height: "306px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "18px",
          fontWeight: 600,
          margin: 0,
          textAlign: "left",
          color: "#333",
        }}
      >
        Activities
      </h1>
      <div
        style={{
          overflowY: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            content: "''",
            position: "absolute",
            left: "14px",
            top: "40px",
            width: "1px",
            height: "176px",
            backgroundColor: "#1C1C1C33",
            zIndex: 0,
          }}
        />
        {activities.map((activity, index) => (
          <div
            key={index}
            style={{
              width: "232px",
              height: "46px",
              borderRadius: "8px",
              padding: "4px",
              gap: "8px",
              boxSizing: "border-box",
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={activityIcon}
              alt="Activity"
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#1C1C1C",
                }}
              >
                {activity.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  color: "#1C1C1C66",
                }}
              >
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
