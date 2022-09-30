import classes from "./Card.module.css";

function Card(attributes){
    return <div className={classes.card}>
        {attributes.children}
    </div>
}

export default Card;