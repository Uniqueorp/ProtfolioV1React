import React from "react";
import styles from "./VideoGrid.module.css"; 

const images = [
  { id: 1, url: "/Videos/reel1.png", link: "https://drive.google.com/file/d/1szzOLsuGdpvdN7vOcntlNkneA8-6GcRn/view?usp=sharing" },
  { id: 2, url: "/Videos/reel2.png",  link: "https://drive.google.com/file/d/1Dl8T5_Cw4tyImnMMi8IdNgkJUGNjjPiH/view?usp=sharing" },
  { id: 3, url: "/Videos/reel3.png",  link: "https://drive.google.com/file/d/1i_4WZUA1gQjgwTucxEHi22gQ2lamCbRH/view?usp=sharing" },
  { id: 4, url: "Videos/reel4.png",  link: "https://drive.google.com/file/d/1ZM4r4b2AD0OSRXU5Wcmiv1S6vrxOhm5s/view?usp=sharing" },
];

const ImageCard = ({ url, link }) => (
  <div className={styles.imageCard}>
    <img className={styles.image} src={url} />
    <div className={styles.content}>
      <div className={styles.header}>
        <a href={link} className={styles.button} target="_blank" rel="noopener noreferrer">Check Out</a>
      </div>
    
    </div>
  </div>
);

const ImageGrid = () => {
  return (
    <div>
      <h2 className={styles.sectionTitle}>Video Editings</h2>
      <div className={styles.container}>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            title={image.title}
            url={image.url}
            description={image.description}
            link={image.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
