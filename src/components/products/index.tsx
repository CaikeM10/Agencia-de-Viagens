import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const caseStudies = [
  {
    id: 1,
    category: "marca",
    title: "Gardner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/travel1.jpg",
  },
  {
    id: 2,
    category: "digital",
    title: "Digital Campaign",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/plane.jpg",
  },
  {
    id: 3,
    category: "novos",
    title: "Novos Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/travel3.jpeg",
  },
  {
    id: 4,
    category: "marca",
    title: "Brand Identity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/car.jpg",
  },
  {
    id: 5,
    category: "marca",
    title: "Gardner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/travel1.jpg",
  },
  {
    id: 6,
    category: "digital",
    title: "Digital Campaign",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/plane.jpg",
  },
  {
    id: 7,
    category: "novos",
    title: "Novos Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/travel3.jpeg",
  },
  {
    id: 8,
    category: "marca",
    title: "Brand Identity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/car.jpg",
  },
];

const categories = ["todos", "digital", "marca", "novos"];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cardRefs.current.forEach((card) => {
        if (card && card.matches(":hover")) {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;

          const deltaX = event.clientX - cardCenterX;
          const deltaY = event.clientY - cardCenterY;

          const rotateX = -(deltaY / 10); // Ajuste da sensibilidade
          const rotateY = deltaX / 10;

          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
          card.style.transition = `transform 0.1s ease-out`;
        }
      });
    };

    const resetRotation = () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
          card.style.transition = `transform 1s ease`;
        }
      });
    };

    cardRefs.current.forEach((card) => {
      if (card) {
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", resetRotation);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", resetRotation);
        }
      });
    };
  }, []);

  const sortedStudies =
    selectedCategory === "todos"
      ? caseStudies
      : [
          ...caseStudies.filter((study) => study.category === selectedCategory),
          ...caseStudies.filter((study) => study.category !== selectedCategory),
        ];

  return (
    <section className={styles.container}>
      <div className={styles.caseStudies}>
        <div className={styles.categories}>
          <div className={styles.title}>
            <h2>Nossos Produtos</h2>
          </div>
          <div className={styles.subcate}>
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? styles.active : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.grid}>
          {sortedStudies.map((study, index) => (
            <div
              key={study.id}
              className={`${styles.item} ${
                study.category !== selectedCategory &&
                selectedCategory !== "todos"
                  ? styles.hidden
                  : ""
              }`}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
            >
              <img src={study.image} alt={study.title} />
              <div className={styles.overlay}>
                <h5>{study.title}</h5>
                <p className={styles.description}>{study.description}</p>
                <img
                  src="/arrowWhite.svg"
                  alt="Arrow"
                  className={styles.arrow}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
