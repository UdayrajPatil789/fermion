import Card from "@/components/Card";
import Client from "@/components/Client";
import CustomButton from "@/components/CustomButton";
import Service from "@/components/Service";
// import Service from "@/components/service";
import styles from "@/styles/home.module.css";
import Image from "next/image";

export default function Home() {
  const data = [
    {
      id: 1,
      title: "60",
      text: "Our 60 member strong team have expertise in various tools",
    },
    { id: 2, title: "90", text: "Served over 90+ clients successfully" },
    {
      id: 3,
      title: "200",
      text: "200 projects delivered in and outside India in various tech",
    },
  ];
  return (
    <>
      <main className={styles.promotion_banner}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            High end IT solutions from the beginning to the end.
          </h1>
          <h2 className={styles.text}>
            A team of experts with over 20 years of experience who work as an
            extended in-house team to develop impressive digital products.
          </h2>
          <div className={styles.buttonpromotion_banner}>
            <CustomButton title="Get In Touch" />
          </div>
        </div>
        <div className={styles.pattern}>
          {/* <Image  className={styles.patternimg} src="https://fermion.in/images/pattern_02.svg" alt="pattern1" height={200} width={200}/> */}
          <img
            src="https://fermion.in/images/pattern_02.svg"
            className={styles.patternimg1}
          />
        </div>
        <div className={styles.pattern2}>
          {/* <Image  className={styles.patternimg2} src="https://fermion.in/images/pattern_01.svg" alt="pattern1" height={200} width={200}/> */}
          <img
            src="https://fermion.in/images/pattern_01.svg"
            className={styles.patternimg2}
          />
        </div>
      </main>
      <div>
        <Client />
      </div>
      <div className={styles.cardSection}>
        <div className={styles.cardTitle}>Impact we’ve created</div>
        <div className={styles.block}>
          {data.map((ele) => {
            return <Card key={ele.id} title={ele.title} text={ele.text} />;
          })}
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.container}>
          <div className={styles.title}>Services we offer</div>
          <Service/>
        </div>
      </div>
    </>
  );
}
