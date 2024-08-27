import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
// import { useCities } from "../contexts/CitiesContext";
// import BackButton from "./BackButton";
import styles from "./City.module.css";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const [searchParams, setSearchParams] = useSearchParams();
  const x = useParams();
  console.log(x);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <>
      position:{lat}&{lng}
      <h1>hii</h1>
    </>
  );
}

export default City;
