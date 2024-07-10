import benzaPrague from "../../assets/images/benzaPrague.jpeg";
const RightSideHero = () => {
  return (
    <div className="w-full h-full sm:w-1/2">
      <img
        className="w-full h-full object-cover object-center rounded-lg"
        src={benzaPrague}
        alt=""
      />
    </div>
  );
};
export default RightSideHero;
