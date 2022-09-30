import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(attributes) {
  return (
    <ul className={classes.list}>
      {attributes.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
