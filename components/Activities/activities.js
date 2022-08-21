import Image from "next/image";
import activities from "./Activities.module.scss";
import Link from "next/link";

export default function Activities() {
  return (
    <div className={activities.section}>
      <h2 className={activities.header}>For de aktive</h2>
      <div className={activities.container}>
        <Link
          href={{ pathname: "/destinasjoner", query: { keyword: "Kajakk" } }}
        >
          <div className={activities.imageContainer}>
            <Image
              src={"/img/activities/kano.png"}
              height={100}
              width={100}
              loading={"lazy"}
              alt={"Kajakk"}
            />
            <p className={activities.text}>Kajakk</p>
          </div>
        </Link>
        <Link
          href={{ pathname: "/destinasjoner", query: { keyword: "Surfing" } }}
        >
          <div className={activities.imageContainer}>
            <Image
              className={activities.image}
              src={"/img/activities/surfing.png"}
              height={100}
              width={100}
              loading={"lazy"}
              alt={"Surfing"}
            />
            <p className={activities.text}>Surfing</p>
          </div>
        </Link>
        <Link
          href={{ pathname: "/destinasjoner", query: { keyword: "Sykkel" } }}
        >
          <div className={activities.imageContainer}>
            <Image
              className={activities.image}
              src={"/img/activities/sykkel.png"}
              height={100}
              width={100}
              loading={"lazy"}
              alt={"Sykkel"}
            />
            <p className={activities.text}>Sykkel</p>
          </div>
        </Link>
        <Link
          href={{ pathname: "/destinasjoner", query: { keyword: "Fjelltur" } }}
        >
          <div className={activities.imageContainer}>
            <Image
              className={activities.image}
              src={"/img/activities/tur.png"}
              height={100}
              width={100}
              loading={"lazy"}
              alt={"Fjelltur"}
            />
            <p className={activities.text}>Fjelltur</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
