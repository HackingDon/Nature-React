import {React,useRef,useEffect} from "react";

const Cardslider = () => {
  const cards = [
    {
      src: "src/components/images/about6.jpg",
      h: "Complete Depackaging and Composting Liquid",
      label: "Information",
    },
    {
      src: "src/components/images/about5.jpg",
      h: "Podcast:Do Animals in the Wild Get Drunk?",
      label: "Green Living",
    },
    {
      src: "src/components/images/about1.jpg",
      h: "The Summer of Resistance is Coming to a City Near You",
      label: "Environment",
    },
    {
      src: "src/components/images/about2.jpg",
      h: "Hug a Tree,They have Less Issues than People",
      label: "Green Living",
    },
    {
      src: "src/components/images/about3.jpg",
      h: "Huge Wildfire:Do You Hear the Trees Falling",
      label: "Information",
    },
    {
      src: "src/components/images/about4.jpg",
      h: "8 Photos Take You Inside the Movement to Save the Amazon",
      label: "Environment",
    },
  ];
  const slideRef = useRef(null);
  const slides = (val) => {
    if (val == "right") {
      slideRef.current.scrollTo({
        left: slideRef.current.offsetWidth,
        behaviour: "smooth",
      });
    } else {
      slideRef.current.scrollTo({
        left: 0,
        behaviour: "smooth",
      });
    }
  };
  useEffect(() => {
    let card = setInterval(() => {
      if (slideRef.current.scrollLeft > 900) {
        slides("left");
      } else {
        slideRef.current.scrollTo({
          left: slideRef.current.scrollLeft + 450,
          behaviour: "smooth",
        });
      }
    }, 5000);
    return () => clearInterval(card);
  }, []);
  return (<div>
     <div className="d-flex slider-about align-items-center justify-content-center flex-column w-100">
          <h1 className="fs-1 color fw-bold">Latest News & Articles:</h1>
          <div ref={slideRef} className="row mt-5 w-70">
            {cards.map((card,index)=>(
              <div className="col-4" key={index}>
              <div className="card">
                <div className="about">
                <img className="card-img-top h-100" title={card.h} src={card.src} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold color">{card.h}</h5>
                  <label className="text-warning fs4 fw-500">{card.label}</label>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolar sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus.
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="d-flex w-100 align-items-center justify-content-center gap-3">
            <button className="btn btn-secondary" onClick={()=>slides("left")}></button>
            <button className="btn btn-secondary" onClick={()=>slides("right")}></button>
          </div>
        </div>
  </div>);
};

export default Cardslider;
