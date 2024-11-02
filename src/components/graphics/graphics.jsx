import React from "react";
import styles from "./graphics.module.css";

const graphics = [
  { id: 1, title: "Graphic 1", url: "/Graphics/1.jpg" },
  { id: 2, title: "Graphic 2", url: "/Graphics/2.jpg" },
  { id: 3, title: "Graphic 3", url: "/Graphics/3.jpg" },
  { id: 4, title: "Graphic 4", url: "/Graphics/uniqueorpBlogo.png" },
  { id: 5, title: "Graphic 5", url: "/Graphics/uniqueorpBN.png" },
  { id: 6, title: "Graphic 6", url: "/Graphics/graphics3.png" },
  // Add more graphics as needed
];

const GraphicCard = ({ title, url }) => (
  <div className={styles.card}>
    <img className={styles.image} src={url} alt={title} />
    <div className={styles.title}>{title}</div>
  </div>
);

const GraphicsGrid = () => {
  return (
    <div>
      <h2 className={styles.sectionTitle}>My Graphic Designs</h2>
      <div className={styles.container}>
        {graphics.map((graphic) => (
          <GraphicCard key={graphic.id} title={graphic.title} url={graphic.url} />
        ))}
      </div>
    </div>
  );
};

export default GraphicsGrid;
