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
    <div style={styles.container}>
      <p style={styles.header}>Activities</p>
      <div style={styles.activityList}>
        <div style={styles.timeline} />
        {activities.map((activity, index) => (
          <div key={index} style={styles.activityItem}>
            <img src={activity.image} alt="Activity" style={styles.activityIcon} />
            <div>
              <div style={styles.activityTitle}>{activity.title}</div>
              <div style={styles.activityTime}>{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "16px",
    width: "240px",
    height: "306px",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "14px",
    fontWeight: 600,
    // margin: 0,
    // textAlign: "left",
    color: "#333",
  },
  activityList: {
    overflowY: "auto",
    position: "relative",
  },
  timeline: {
    content: "''",
    position: "absolute",
    left: "14px",
    top: "40px",
    width: "1px",
    height: "176px",
    backgroundColor: "#1C1C1C33",
    zIndex: 0,
  },
  activityItem: {
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
  },
  activityIcon: {
    width: "24px",
    height: "24px",
    borderRadius: "8px",
  },
  activityTitle: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    color: "#1C1C1C",
  },
  activityTime: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    color: "#1C1C1C66",
  },
};

export default Activities;
