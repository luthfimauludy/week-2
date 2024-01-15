import { useCountTimer } from "../../hooks/useCountTimer";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Styling
import classes from "./style.module.scss";

const countDownTimer = 1 * 24 * 60 * 60 * 1000;
const dateNow = new Date().getTime();
const result = dateNow + countDownTimer;

const Home = () => {
  const [days, hours, minutes, seconds] = useCountTimer(result);

  return (
    <>
      <section className={classes["wrapper"]}>
        <h3 className={classes["text-header"]}>WE&lsquo;RE LAUNCHING SOON</h3>
        <div className={classes["container"]}>
          <div className={classes["text-counter"]}>
            <div className={classes["number"]}>{days}</div>
            <p>DAYS</p>
          </div>
          <div className={classes["text-counter"]}>
            <div className={classes["number"]}>{hours}</div>
            <p>HOURS</p>
          </div>
          <div className={classes["text-counter"]}>
            <div className={classes["number"]}>{minutes}</div>
            <p>MINUTES</p>
          </div>
          <div className={classes["text-counter"]}>
            <div className={classes["number"]}>{seconds}</div>
            <p>SECONDS</p>
          </div>
        </div>
      </section>
      <section className={classes["socmed"]}>
        <FontAwesomeIcon size="lg" icon={faSquareFacebook} />
        <FontAwesomeIcon size="lg" icon={faPinterest} />
        <FontAwesomeIcon size="lg" icon={faInstagram} />
      </section>
    </>
  );
};

export default Home;
