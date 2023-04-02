export default function ShopBuddyPage() {
  return (
    <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
      <img
        style={{ display: "block", margin: "auto", marginTop: "50px" }}
        src="https://img.shop.com/Image/resources/images/shop-buddy-hero-new.jpg"
        alt=""
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          backgroundColor: "#0098b8",
        }}
      >
        <h2>Available On Chrome</h2>
        <button style={{ padding: "10px", borderRadius: "30px" }}>
          Download Now
        </button>
      </div>
      <h1>
        <b>SAVING MONEY & EARNING CASHBACK</b> JUST GOT EASIER!
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "20px",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        <div>
          <img
            src="https://img.shop.com/Image/resources/images/shop-buddy-icon-download.svg?id=4798096"
            alt=""
          />
          <p>
            <span style={{ fontSize: "x-large" }}>1</span>
            <span>SAVVY SHOPPERS DOWNLOAD SHOPBUDDY</span>
          </p>
        </div>
        <div>
          <img
            style={{ width: "220px", display: "block", margin: "auto" }}
            src="https://img.shop.com/Image/resources/images/shop-buddy-icon-online.svg?id=4798097"
            alt=""
          />
          <p>
            <span style={{ fontSize: "x-large" }}>2</span>
            <span>SHOP ONLINE AT YOUR FAVORITE MERCHANT'S SITE</span>
          </p>
        </div>
        <div>
          <img
            style={{ width: "220px", display: "block", margin: "auto" }}
            src="https://img.shop.com/Image/resources/images/shop-buddy-icon-cashback-green.svg?id=4938532"
            alt=""
          />
          <p>
            <span style={{ fontSize: "x-large" }}>3</span>
            <span>SAVE MONEY USING COUPONS & EARN CASHBACK!</span>
          </p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2>
          FREQUENTLY ASKED <u>QUESTIONS</u>
        </h2>
        <p>
          *By installing or upgrading ShopBuddy you agree to the ShopBuddy
          license agreement.
        </p>
        <p>
          ShopBuddy works on Edge and Chrome browsers. ShopBuddy is not
          available on mobile or tablet devices (e.g. iPads, iPhones).
        </p>
        <p>
          ** Individual Cashback is rounded off to the nearest value and may
          vary depending on new and/or pending purchases credited to SHOP.COM
          account. See site for details.
        </p>
        <p>
          Note: Offer and Cashback percentages are subject to change without
          notice by our Partner Stores.
        </p>
      </div>
    </div>
  );
}
