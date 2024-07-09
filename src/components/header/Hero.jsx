import benzaPrague from "../../assets/images/benzaPrague.jpeg";
export const Hero = () => {
  return (
    <header>
      <div>
        <div>
          <small>Accouting experts</small>
          <h1>
            Smart solutions. <br /> Bookkipping <br />
            services
          </h1>
          <p>
            Unlock financial success with our trusted expertise and personalized
            services
          </p>
          <button>
            <a href="#">Get a free quote</a>
          </button>
        </div>
        <div>
          <img src={benzaPrague} alt="" />
        </div>
      </div>
    </header>
  );
};
