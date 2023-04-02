import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
export default function StorePage() {
  let shoparr = [
    {
      name: "1-800-Battery",
      discount: "Up to 2.00% ",
    },
    {
      name: "1-800-GOT-JUNK?",
      discount: "Up to 2.00% ",
    },
    {
      name: "1-800Lighting",
      discount: "Up to 2.00% ",
    },
    {
      name: "123 Office",
      discount: "Up to 2.00% ",
    },
    {
      name: "123inkjets",
      discount: "Up to 9.00% ",
    },
    {
      name: "143Vinyl",
      discount: "Up to 2.00% ",
    },
    {
      name: "1800Baskets.com",
      discount: "Up to 3.00% ",
    },
    {
      name: "1800Flowers.com",
      discount: "Up to 3.00% ",
    },
    {
      name: "1800PetMeds",
      discount: "Up to 4.00% ",
    },
    {
      name: "1822 Denim",
      discount: "Up to 2.00% ",
    },
    {
      name: "1ink.com",
      discount: "Up to 2.00% ",
    },
    {
      name: "1Thrive",
      discount: "Up to 2.00% ",
    },
    {
      name: "25Home",
      discount: "Up to 2.00% ",
    },
    {
      name: "2xist",
      discount: "Up to 3.00% ",
    },
    {
      name: "2XU",
      discount: "Up to 2.00% ",
    },
    {
      name: "360 Cookware",
      discount: "Up to 2.00% ",
    },
    {
      name: "The 3D Gift",
      discount: "Up to 5.00% ",
    },
    {
      name: "3StepDivorce",
      discount: "Up to 7.00% ",
    },
    {
      name: "3V Gear",
      discount: "Up to 4.00% ",
    },
    {
      name: "4 Wheel Parts",
      discount: "Up to 2.00% ",
    },
    {
      name: "4inkjets",
      discount: "Up to 8.00% ",
    },
    {
      name: "4Seating.com",
      discount: "Up to 4.00% ",
    },
    {
      name: "4Wheel Drive Hardware",
      discount: "Up to 2.00% ",
    },
    {
      name: "5 Little Monkeys",
      discount: "Up to 2.00% ",
    },
    {
      name: "5.11 Tactical",
      discount: "Up to 2.00% ",
    },
    {
      name: "7 For All Mankind",
      discount: "Up to 2.00% ",
    },
    {
      name: ":ratio",
      discount: "Up to 2.00% ",
    },
    {
      name: "A Pea In The Pod",
      discount: "Visit Partner Store",
    },
    {
      name: "A-Sha Foods",
      discount: "Up to 6.00% ",
    },
    { name: "Abebooks", discount: "Up to 2.00% " },
    { name: "Abstract Nation", discount: "Up to 10.00% " },
    { name: "Abt.com", discount: "Up to 2.00% " },
    { name: "AC Lens", discount: "Up to 2.00% " },
    { name: "Academy Sports + Outdoors", discount: "N/A" },
    { name: "Accompany", discount: "Up to 5.00% " },
    { name: "Ace Hardware", discount: "N/A" },
    { name: "Acer Online Store", discount: "Up to 2.00% " },
    { name: "ACME Markets", discount: "N/A" },
    { name: "Acme Tools", discount: "Up to 2.00% " },
    { name: "ACTINPUT", discount: "Up to 2.00% " },
    { name: "ActionHeat", discount: "Up to 5.00% " },
    { name: "Active Threads", discount: "Up to 2.00% " },
    { name: "Ada + East", discount: "Up to 5.00% " },
    { name: "Adam & Eve", discount: "Up to 5.00% " },
    { name: "Adelante Shoe Co.", discount: "Up to 5.00% " },
    { name: "Aden + Anais", discount: "Up to 2.00% " },
    { name: "Adidas", discount: "N/A" },
    { name: "Adidas Cases", discount: "Up to 2.00% " },
    { name: "ADOR", discount: "Up to 4.00% " },
    { name: "Adorama Camera", discount: "Up to 5.00% " },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", padding: "20px" }}>All Stores</h1>
      <div>
        {shoparr.map((shop) => {
          return (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                justifyContent: "space-between",
                gap: "50px",
                padding: "20px",
                borderTop: "1px solid black",
              }}
            >
              <div>
                <h3>{shop.name}</h3>
                <span>
                  <FontAwesomeIcon icon={faFire} style={{ color: "#1f5147" }} />
                  Hot Deals
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span>{shop.discount}</span>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
                  alt=""
                />
                <span>Discount</span>
              </div>
              <div>
                <button
                  style={{
                    padding: "20px",
                    marginLeft: "10%",
                    width: "400px",
                    borderRadius: "30px",
                    border: "1px solid black",
                    backgroundColor: "white",
                    ":hover": { backgroundColor: "black", color: "white" },
                  }}
                >
                  Visit Partner Store
                </button>
                <div style={{ display: "flex" }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      color: "#1f4b51",
                      fontSize: "30px",
                      marginLeft: "70%",
                      padding: "10px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{
                      color: "#1f4b51",
                      fontSize: "30px",

                      padding: "10px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{
                      color: "#1f4b51",
                      fontSize: "30px",

                      padding: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
