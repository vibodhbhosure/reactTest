import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
function Layout(attributes) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{attributes.children}</main>
    </div>
  );
}
export default Layout;
