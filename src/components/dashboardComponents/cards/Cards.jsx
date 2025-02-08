import React from 'react'
import Card from './Card';

const Cards = () => {
  return (
    <div style={{ display: "flex", flexDirection:"row", gap: "28px" }}>
      <div>
        <Card bgcolor="var(--primary-blue)" color="#000000" heading="Customers" number="3,781" percentage={11.01} growth={true} />
        <div style={{ marginBottom: "28px" }} />
        <Card bgcolor="var(--primary-light)" color="var(--black100)" heading="Revenue" number="$695" percentage={15.03} growth={true} />
      </div>
      <div>
        <Card bgcolor="var(--primary-light)" color="var(--black100)" heading="Orders" number="1,219" percentage={0.03} growth={false} />
        <div style={{ marginBottom: "28px" }} />
        <Card bgcolor="var(--primary-purple)" color="#000000" heading="Growth" number="30.1%" percentage={6.08} growth={true} />
      </div>
    </div>
  )
}

export default Cards;