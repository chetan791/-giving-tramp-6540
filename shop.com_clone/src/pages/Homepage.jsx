import Carousel from "../components/card";

export default function Homepage() {
  const makeups = [
    {
      image:
        "https://img.shop.com/Image/240000/243300/243380/products/1965483015.jpg?plain&size=600x600", // add image URL here
      title: "Motives® Lash & Brow Serum",
      price: 40.0,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243380/products/1768096339.jpg?plain&size=600x600", // add image URL here
      title: "Motives® Boss Babe Palette",
      price: 50.25,
      rating: 4.8, // fixed rating of 4.8
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243380/products/1939204281.jpg?plain&size=600x600", // add image URL here
      title: "Motives® Gel-ous Brow Gel",
      price: 23.25,
      rating: 4.5, // fixed rating of 4.5
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243380/products/1942133519.jpg?plain&size=600x600", // add image URL here
      title: "Motives® X Amber Essential Collection",
      price: 80.0,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243380/products/1508706159.jpg?plain&size=600x600", // add image URL here
      title: "Motives® Liquid Pout Plumper",
      price: 23.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243380/products/1502492160.jpg?plain&size=600x600", // add image URL here
      title: "Motives® Essential Complexion 4-Piece Brush Set",
      price: 52.0,
      rating: 3, // fixed rating of 3
    },
  ];

  const deo = [
    {
      image:
        "https://img.shop.com/Image/210000/214200/214202/products/1964430726.jpg?plain&size=600x600", // add image URL here
      title: "Fixx™ Argan Oil Shampoo",
      price: 22.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214200/214202/products/1964430726.jpg?plain&size=600x600", // add image URL here
      title: "Fixx™ Argan Oil Conditioner",
      price: 22.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214200/214202/products/1964430726.jpg?plain&size=600x600", // add image URL here
      title: "Fixx™ Thick Hair Shampoo & Conditioner",
      price: 22.95,
      rating: 4, // fixed rating of 4
    },
    {
      image:
        "https://img.shop.com/Image/210000/214200/214202/products/561800387.jpg?plain&size=600x600", // add image URL here
      title: "Fixx™ Microdermabrasion",
      price: 27.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214200/214202/products/561800379.jpg?plain&size=600x600", // add image URL here
      title: "Fixx™ Argan Oil No Frizz",
      price: 20.5,
      rating: 5, // fixed rating of 5
    },
  ];

  const cleaning = [
    {
      image:
        "https://img.shop.com/Image/240000/243300/243390/products/1954251853.jpg?plain&size=750x750&id=5269161",
      title: "HOUSEHOLD CLEANERS",
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243390/products/1954251883.jpg?plain&size=750x750&id=5269162",
      title: "CLEANING TOOLS",
    },
    {
      image:
        "https://img.shop.com/Image/260000/263100/263143/products/1836611183.png?plain&size=400x400&id=5269163",
      title: "AIR FRESHENERS",
    },
    {
      image:
        "https://img.shop.com/Image/240000/243400/243406/products/1944813894.jpg?plain&size=400x400&id=5269164",
      title: "BINS & BASKETS",
    },
    {
      image:
        "https://img.shop.com/Image/280000/287300/287312/products/1951857838.jpg?plain&size=400x400&id=5269165",
      title: "DRAWER ORGANIZERS",
    },
    {
      image:
        "https://img.shop.com/Image/280000/284400/284458/products/1874058298.jpg?plain&size=400x400&id=5269166",
      title: "CLOSET ORGANIZERS",
    },
  ];

  const health = [
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/1473811391.jpg?plain&size=600x600", // add image URL here
      title: "Isotonix® Multivitamin Fifty Plus",
      price: 49.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/561800359.jpg?plain&size=600x600", // add image URL here
      title: "Isotonix® Multivitamin With Iron",
      price: 29.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243395/products/559078811.jpg?plain&size=600x600", // add image URL here
      title: "TLS® Nutrition Shakes",
      price: 43.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/1604659974.jpg?plain&size=600x600", // add image URL here
      title: "Isotonix® Multivitamin Without Iron",
      price: 29.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/250000/250100/250199/products/1454494144.jpg?plain&size=600x600", // add image URL here
      title: "DNA Miracles® Chewable Multivitamin",
      price: 23.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/250000/250100/250199/products/1065616463.jpg?plain&size=600x600", // add image URL here
      title: "DNA Miracles Isotonix® Multivitamin",
      price: 16.95,
      rating: 5, // fixed rating of 5
    },
  ];
  const skincare = [
    {
      image:
        "https://img.shop.com/Image/240000/248600/248698/products/1958498951.jpg?plain&size=600x600", // add image URL here
      title: "Lumière de Vie® Revive & Reset Facial Mist (Soothing Toner)",
      price: 25.75,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/248600/248698/products/1958498942.jpg?plain&size=600x600", // add image URL here
      title: "Lumière de Vie® P.M. Eye Lift (Eye Serum)",
      price: 39.95,
      rating: 1, // fixed rating of 1
    },
    {
      image:
        "https://img.shop.com/Image/270000/274000/274036/products/1956507645.jpg?plain&size=600x600", // add image URL here
      title: "Lumière de Vie® Hommes Gift Set",
      price: 40.0,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/248600/248698/products/1766653370.jpg?plain&size=600x600",
      title: "Rose Quartz Roller",
      price: 17.5,
      rating: 5,
    },
    {
      image:
        "https://img.shop.com/Image/240000/248600/248698/products/1935915380.jpg?plain&size=600x600",
      title: "Soothe & Renew Hydrogel Masque",
      price: 65.95,
      rating: 5,
    },
    {
      image:
        "https://img.shop.com/Image/270000/274000/274036/products/1827874989.jpg?plain&size=600x600",
      title: "Hommes Skincare Value Kit",
      price: 75.5,
      rating: 4.5,
    },
  ];

  const topProducts = [
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?plain&size=600x600",
      title: "Isotonix OPC-3®",
      price: "$34.95 $74.95",
      cashback: "+ up to $1.50/ 2% Cashback",
      rating: "★★★★★(236)",
      freeShipping: "Free shipping with $125 orders",
    },
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/935461732.jpg?plain&size=600x600",
      title: "Isotonix® Daily Essentials Packets",
      price: "$77.00",
      cashback: "+$1.54 2% Cashback",
      rating: "★★★★(242)",
      freeShipping: "Free shipping with $125 orders",
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?plain&size=600x600",
      title: "Ultimate Aloe™",
      price: "$31.95",
      cashback: "+ $0.64 2% Cashback",
      rating: "★★★★★(151)",
      freeShipping: "Free shipping with $125 orders",
    },
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/561800354.jpg?plain&size=600x600",
      title: "Isotonix® Digestive Enzymes with Probiotics (Packets)",
      price: "$28.95",
      cashback: "+ $0.58 2% Cashback",
      rating: "★★(72)",
      freeShipping: "Free shipping with $125 orders",
    },
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?plain&size=600x600",
      title: "Isotonix® Digestive Enzymes with Probiotics",
      price: "$38.95",
      cashback: "+ $0.78 2% Cashback",
      rating: "★★★★★(79)",
      freeShipping: "Free shipping with $125 orders",
    },
  ];

  const topSellers = [
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?plain&size=600x600", // add image URL here
      title: "Isotonix® Vitamin D with K2",
      price: 36.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/250000/250100/250199/products/1332818472.jpg?plain&size=600x600", // add image URL here
      title: "DNA Miracles Isotonix® Immune",
      price: 23.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214200/214267/products/559010729.jpg?plain&size=600x600", // add image URL here
      title: "ClearShield® Maximum Protection and Hydration",
      price: 14.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/561800360.jpg?plain&size=600x600", // add image URL here
      title: "Isotonix® Vitamin C",
      price: 17.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/912160941.jpg?plain&size=600x600", // add image URL here
      title: "Isotonix® Bromelain Plus",
      price: 63.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243390/products/1954251779.jpg?plain&size=600x600", // add image URL here
      title: "Shopping Annuity Brand SNAP™ Heavy Duty Concentrate",
      price: 11.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243390/products/1954251785.jpg?plain&size=600x600", // add image URL here
      title: "Shopping Annuity Brand SNAP™ Triple Enzyme 3X Laundry Detergent",
      price: 13.95,
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/210000/214100/214196/products/893741343.jpg?plain&size=600x600", // add image URL here
      title: "Isotonix® Immune",
      price: "45.95 - $104.95",
      rating: 5, // fixed rating of 5
    },
    {
      image:
        "https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?plain&size=600x600", // add image URL here
      title: "Ultimate Aloe™",
      price: 31.95,
      rating: 5, // fixed rating of 5
    },
  ];

  const Brands = [
    {
      title: "HEALTH & NUTRITION",
      image:
        "https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg?id=5014114",
    },
    {
      title: "Beauty",
      image:
        "https://img.shop.com/Image/homepage/lipstick1572880828301.jpg?id=5014118",
    },
    {
      title: "Home & Cleaning",
      image:
        "https://img.shop.com/Image/homepage/home_ma1572880950379.jpg?id=5014120",
    },
    {
      title: "Baby & Kids",
      image:
        "https://img.shop.com/Image/homepage/baby-kids1572881179463.jpg?id=5014124",
    },
    {
      title: "Jewelry",
      image:
        "https://img.shop.com/Image/homepage/1840336563__225x225-img__.jpg?id=5015192",
    },
  ];
  return (
    <div className="homepage">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <p>Your Shop Consultant is SHOP Corporate Services</p>
        <p>
          Earn up to 50%{" "}
          <img
            style={{ width: "14px", paddingTop: "5px" }}
            src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
            alt=""
          />
          Cashback on eligible purchases.<u>Learn More</u>
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          marginBottom: "20px",
          //   borderTop: "1px solid black",
          marginTop: "20px",
        }}
      >
        <span style={{ fontSize: "xx-large" }}>$51,438,029</span>
        <span>awarded in </span>
        <img
          style={{ width: "30px" }}
          src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
          alt=""
        />
        <span>Cashback</span>
        <span
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "20px",
            marginLeft: "10px",
          }}
        >
          Learn More
        </span>
      </div>
      <img
        src="https://img.shop.com/Image/homepage/health-SHOP-usa-eng-18755-leadership-special-banner-with-cashback-1600x300-img1679960767055.jpg?id=5271832"
        alt="1"
      />
      <div
        id="cardimage1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          marginBottom: "10px",
        }}
      >
        <div>
          <img
            className="homepageCardImage"
            src={require("../images/homepagecard1.png")}
          />
        </div>
        <div>
          <img
            className="homepageCardImage"
            src={require("../images/homepagecard2.png")}
          />
        </div>
        <div>
          <div>
            <img
              className="homepageCardImage"
              src={require("../images/homepagecard3.png")}
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            className="homepageCardImage"
            src={require("../images/homepagecard4.png")}
            alt=""
          />
        </div>
      </div>
      <h1 style={{ marginLeft: "60%", marginTop: "30px" }}>Popular Brands</h1>
      <div id="HomepageBrands">
        <img
          style={{ width: "500px" }}
          src="https://img.shop.com/Image/homepage/shop-usa-108300-Easter-banner-600x600-img-min1679961158456.jpg?id=5271834"
          alt="2"
        />
        <div style={{ marginLeft: "40px", paddingTop: "40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "60px",
              padding: "20px",
              backgroundColor: "#f5f5f5",
              paddingTop: "20px",
            }}
          >
            <img
              className="homepageBrandsImage"
              src="https://img.shop.com/Image/homepage/nike_140x110-img.gif?id=5178505"
              alt=""
            />
            <img
              className="homepageBrandsImage"
              src="https://img.shop.com/Image/homepage/michaelkors_140x110-img.gif?id=5178506"
              alt=""
            />
            <img
              className="homepageBrandsImage"
              src="https://img.shop.com/Image/homepage/coach_brand7.jpg?id=5178507"
              alt=""
            />
            <img
              className="homepageBrandsImage"
              src="https://img.shop.com/Image/homepage/adidaslogo_140_1100.jpg?id=5178508"
              alt=""
            />
            <img
              src="https://img.shop.com/Image/homepage/cuisinart.gif?id=5246344"
              alt=""
            />
          </div>
          <div
            id="HomepageBrands2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              marginTop: "70px",
            }}
          >
            <img
              src="https://img.shop.com/Image/homepage/hrblcok-15p-hp-feature1677531735916.png?id=5269620"
              alt=""
            />
            <img
              src="https://img.shop.com/Image/homepage/us-eng-macys-vip-march231679606871749.png?id=5271612"
              alt=""
            />
            <img
              src="https://img.shop.com/Image/homepage/us-eg-nike-sale-media-dec221680111240105.jpg?id=5271951"
              alt=""
            />
            <img
              src="https://img.shop.com/Image/homepage/us-eng-jcpenney-hp-dec221680205019977.jpg?id=5272018"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* carousel 1 ------------------------------------ */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#f7f7f7",
          padding: "10px",
        }}
      >
        <img
          style={{ width: "150px", display: "block", margin: "0 auto" }}
          src="https://img.shop.com/Image/resources/homepage/shop-homepage-icon.svg"
          alt=""
        />
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div>
            <img
              src="https://img.shop.com/Image/homepage/motives-usa-can-107525-lash-and-brow-serum-banner-bgsq-min1676991661086.jpg?id=5269139"
              alt=""
            />
          </div>
          <div
            style={{
              width: "58%",
              marginLeft: "30px",
              backgroundColor: "white",
              marginTop: "30px",
            }}
          >
            {<Carousel data={makeups} />}
          </div>
        </div>
      </div>
      {/* carousel2 ------------------------------ */}
      <h1 style={{ marginTop: "30px" }}>Healthy Hair with Fixx</h1>
      <div
        style={{
          backgroundColor: "#f7f7f7",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div>
            <img
              src="https://img.shop.com/Image/homepage/fixx-usa-106743-new-formulas-banner-BGSQ1675886708429.jpg?id=5267807"
              alt=""
            />
          </div>
          <div
            style={{
              width: "58%",
              marginLeft: "30px",
              backgroundColor: "white",
              marginTop: "50px",
            }}
          >
            {<Carousel data={deo} />}
          </div>
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: "center", marginTop: "40px" }}>
          Spring Cleaning
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {cleaning.map((item) => {
            return (
              <div>
                <img
                  style={{
                    width: "170px",
                    borderRadius: "50%",
                    border: "10px solid #f7f7f7",
                    gap: "10px",
                    padding: "10px",
                  }}
                  src={item.image}
                  alt=""
                />
                <h3 style={{ textAlign: "center" }}>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* carousel 3 ------------------------------------ */}
      <h1 style={{ marginTop: "30px" }}>National Nutrition Month</h1>
      <div
        style={{
          backgroundColor: "#f7f7f7",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div>
            <img
              src="https://img.shop.com/Image/homepage/isotonix-usa-108114-multivitamin-banner-lgmedia1678810723670.jpeg?id=5270942"
              alt=""
            />
          </div>
          <div
            style={{
              width: "58%",
              marginLeft: "30px",
              backgroundColor: "white",
              marginTop: "50px",
            }}
          >
            {<Carousel data={health} />}
          </div>
        </div>
      </div>

      {/* carousel 4 ------------------------------------ */}
      <h1 style={{ marginTop: "30px" }}>Skin Care from Lumière de Vie</h1>
      <div
        style={{
          backgroundColor: "#f7f7f7",

          padding: "10px",
        }}
      >
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div>
            <img
              src="https://img.shop.com/Image/homepage/ldv-usa-eng-106125-revive-reset-facial-mist-banners-updated-sq1675889170267.jpg?id=5267813"
              alt=""
            />
          </div>
          <div
            style={{
              width: "58%",
              marginLeft: "30px",
              backgroundColor: "white",
              marginTop: "50px",
            }}
          >
            {<Carousel data={skincare} />}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        {topProducts.map((item) => {
          return (
            <div>
              <img style={{ width: "300px" }} src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>{item.cashback}</p>
              <p style={{ color: "gold" }}>{item.rating}</p>
              <p>{item.freeShipping}</p>
            </div>
          );
        })}
      </div>
      <h1 style={{ marginTop: "30px" }}>
        Cleaning & Health Have Never Been More Important
      </h1>
      <div
        style={{
          backgroundColor: "#f7f7f7",

          padding: "10px",
        }}
      >
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div
            style={{
              width: "95%",
              marginLeft: "30px",
              backgroundColor: "white",
              marginTop: "50px",
            }}
          >
            {<Carousel data={topSellers} />}
          </div>
        </div>
      </div>
      {/* last one --------------------------------------*/}
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Our Brands</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
        }}
      >
        {Brands.map((item) => {
          return (
            <div>
              <h2 style={{ textAlign: "center" }}>{item.title}</h2>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
