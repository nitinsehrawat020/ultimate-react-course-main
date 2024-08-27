import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      position:{lat}:{lng}
      <button onClick={() => setSearchParams({ lng: 100, lat: 220 })}>
        {" "}
        change position
      </button>
    </div>
  );
}

export default Map;
