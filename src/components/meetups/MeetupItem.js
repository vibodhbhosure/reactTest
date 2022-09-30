import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(attributes) {
  return (
    <li className={classes.item}>
        <Card>
      <div className={classes.image}>
        <img src={attributes.image} alt="" />
      </div>
      <div className={classes.content}>
        <h3>{attributes.title}</h3>
        <address>{attributes.address}</address>
        <p>{attributes.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favourites</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
