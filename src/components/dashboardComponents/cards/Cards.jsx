import React from 'react'
import Card from './Card';

const Cards = () => {
  return (
    <div style={{ display: "flex", flexDirection:"row", gap: "28px" }}>
      <div>
        <Card color="#E3F5FF" heading="Customers" number="3,781" percentage={11.01} growth={true} />
        <div style={{ marginBottom: "28px" }} />
        <Card color="#F7F9FB" heading="Revenue" number="$695" percentage={15.03} growth={true} />
      </div>
      <div>
        <Card color="#F7F9FB" heading="Orders" number="1,219" percentage={0.03} growth={false} />
        <div style={{ marginBottom: "28px" }} />
        <Card color="#E5ECF6" heading="Growth" number="30.1%" percentage={6.08} growth={true} />
      </div>
    </div>
  )
}

export default Cards;