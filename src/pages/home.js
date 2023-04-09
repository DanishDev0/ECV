import { useRouter } from "next/router";
import Navbar from "@/MyComponent/Navbar";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

import Link from "next/link";
import MySlider from "@/MyComponent/Slider";
function home() {
  const items = [
    {
      id: 1,
      title: "51 Eden valley Riesling 1918",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        description2:"Which laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image: "/wine/wine-bottle-1.png",
      price:'$22.99',
      url:'',
    },
    {
      id: 2,
      title: "Fablours Wine Provide",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      description2:"They laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image: "/wine/wine-bottle-2.png",
      price:'$19.99',
      url:'',
    },
    {
      title: "This Eden valley Riesling 1918",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      description2:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image: "/wine/wine-bottle-3.png",
      price:'$34.99',
      url:'',
    },
  ];
  return (
    <>
      <Navbar />

      {/* ======== Section Header ========== */}
      <div className="Sec_header">
        <div className="header_content">
          <h2>Eart Vine</h2>
          <h2>& Cask</h2>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
          </p>
          <Image
            src="/west-logo.png"
            width={250}
            height={200}
            style={{ marginLeft: "-67px" }}
            alt="logo"
          />

          <button className="home_btn">Shop Now</button>
        </div>
      </div>

      {/* =========== Section Slider ======== */}
      {/* <Slider/> */}
      <MySlider items={items} />
      {/* <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider> */}

      {/* ============ Offer section ========== */}
      <div className="sec_offers">
        <div className="sec_offer_head">
          <h2 style={{ color: "#8D8F00" }}>Shop by Categories</h2>
          <h2>Offers</h2>

          <div className="sec_offers_grid grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="grid_wrap">
              <Image src={"/pics/wine-2.jpg"} width={"250"} height={"100"} alt="wine-2" />
              <div className="grid_head">WINES</div>
            </div>
            <div className="grid_wrap">
              <Image src={"/pics/wine-5.jpg"} width={"250"} height={"100"} alt="wine" />
              <div className="grid_head">CHAMPAGNE & SPARKLING</div>
            </div>
            <div className="grid_wrap">
              <Image src={"/pics/wine-acce.jpg"} width={"250"} height={"100"} alt="wine" />
              <div className="grid_head">ACCESSORIES</div>
            </div>
            <div className="grid_wrap">
              <Image src={"/wine-4.jpg"} width={"250"} height={"100"} alt="wine" />
              <div className="grid_head">SPIRIT,CIDERS & BEERS</div>
            </div>
            <div className="grid_wrap">
              <Image src={"/pics/wine-gift.jpg"} width={"250"} height={"100"} alt="wine-gif-2"/>
              <div className="grid_head">WINE GIFT & ACCESSORIES</div>
            </div>
            <div className="grid_wrap">
              <Image src={"/pics/wine-1.jpg"} width={"250"} height={"100"} alt="wine-1
              " />
              <div className="grid_head">NON-ALCOHOLICS</div>
            </div>
          </div>
        </div>
      </div>

      {/* ======== section Plan ======== */}
      <div className="sec_plan">
        <div className="sec_plan_content">
          <h2 className="sec_paln-head">Wines? No Wahala by Xis</h2>
          <h2>Wine Club</h2>
          <p>
            let us take you on a journey come with us on an epic journey,beacuse
            body no br firewo0d
          </p>

          <button className="plan_btn">CHOOSE A PLAN</button>
        </div>
      </div>

      {/* =========== social Medai =========== */}
      <div className="sec_social">
        <div className="sec_social_head">
          <Image src="/instagram.png" width={60} height={60} alt="instagram"/>
          <h2>
            Follow us on <span style={{ color: "#8d8f00" }}>Instagram</span>
          </h2>
        </div>
        <div className="sec_social_gallery">
          <div className="gallery_wrap">
            <Image src="/pics/wine-4.jpg" width={100} height={100} alt="wines"/>
            <Image src="/pics/wine-gift-2.jpg" width={100} height={100} alt="wines"/>
            <Image src="/pics/wine-3.jpg" width={100} height={100} alt="wines"/>
            <Image src="/wine-6.jpg" width={100} height={100} alt="wines"/>
          </div>

          <button className="social_btn">Visit Now</button>
        </div>
      </div>

      {/* =========== Blog ========== */}
      <div className="sec_blog">
        <div className="sec_blog_head">
          <h3>EV&C</h3>
          <h2>Blog</h2>
        </div>
        <div className="sec_blog_content">
          <div className="blog_rtl">
            <div className="rtl">
              <div className="rtl_wrap">
                <div className="rtl_date">
                  AUG <span className="rtl_date_overlay">08</span>
                </div>
                <p> i `ll Drink to That: Bruce Nevers of Neyers Vineyards</p>
                <button>
                  CONTINUE <BsArrowRight />
                </button>
              </div>
              <Image src="/pics/wine-1.jpg" width={100} height={100} alt="wine"/>
            </div>
            <div className="rtl">
              <div className="rtl_wrap">
                <div className="rtl_date">
                  OCT <span className="rtl_date_overlay">24</span>
                </div>
                <p> i `ll Drink to That: Bruce Nevers of Neyers Vineyards</p>
                <button>
                  CONTINUE <BsArrowRight />
                </button>
              </div>
              <Image src="/pics/wine-2.jpg" width={100} height={100} alt='wine' />
            </div>
          </div>
          <div className="blog_lft">
            <div className="lft">
              <div className="lft_wrap">
                <div className="lft_date">
                  OCT <span className="lft_date_overlay">03</span>
                </div>{" "}
                <p> i `ll Drink to That: Bruce Nevers of Neyers Vineyards</p>
                <button>
                  CONTINUE <BsArrowRight />
                </button>
              </div>
              <Image src="/wine-4.jpg" width={100} height={100} alt='wine'/>
            </div>
            <div className="lft">
              <div className="lft_wrap">
                <div className="lft_date">
                  DEC <span className="lft_date_overlay">28</span>
                </div>
                <p> i `ll Drink to That: Bruce Nevers of Neyers Vineyards</p>
                <button>
                  CONTINUE <BsArrowRight />
                </button>
              </div>
              <Image src="/wine-3.jpg" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>

      {/* ============= Footer ============= */}
      <div className="sec_footer">
        <div className="footer_logo">
          <Image src="/wine-logo3.png" width={250} height={200} alt="logo" />
          <div className="footer_head">
            <h2>Stay in touch</h2>
            <p> I would like to hear about news & offers</p>
            <div className="footer_email">
              <input type="text" placeholder="Enter your email..." />
              <button>SIGN UP</button>
            </div>
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_link_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className=" p-2 flex flex-col	">
              <span> 736 NW.Street Morrisville,NYC</span>
              <span>theloke@gmail.com</span>
              <span>(+1) 000 123 456</span>
            </div>
            <div className=" p-2 flex flex-col">
              {" "}
              <Link href="/home">Home</Link>
              <Link href="/home">Service</Link>
              <Link href="/home">FAQ`S</Link>
              <Link href="/home">Drink Responseibility</Link>
            </div>
            <div className=" p-2 flex flex-col">
              <span> Terms Of Use</span>
              <span>Privacy & Poilcy</span>
              <span>Carrer</span>
            </div>
            <div className=" p-2 flex flex-col">
              <span>Earth Vine & Cask</span>
              <span>Ev&c Corporate</span>
              <span>Ev&c commerical</span>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="footer_bottom">
        {/* <hr></hr> */}
        <h2> &copy; 2023 COPYRIGHTS</h2>
        <div className="footer_pay">
          {/* <Image src="/pay/visa.png" width={100} height={100}/> */}
          <div className="pay_service_logo">
            <Image src="/pay/MasterCard.png" width={100} height={100} alt="pay"/>
          </div>
          <div className="pay_service_logo">
            <Image src="/pay/visa.png" width={100} height={100} alt="pay"/>
          </div>
          <div className="pay_service_logo">
            <Image src="/pay/amex.png" width={100} height={100} alt="pay"/>
          </div>
          <div className="pay_service_logo">
            <Image src="/pay/discover.png" width={100} height={100} alt="pay"/>
          </div>
          <div className="pay_service_logo">
            <Image src="/pay/paypal.png" width={100} height={100} alt="pay"/>
          </div>
          <div className="pay_service_logo">
            <Image src="/pay/amazone.png" width={100} height={100} alt="pay"/>
          </div>
        </div>
        <div className="footer_social">
          <FiFacebook />
          <CiTwitter />
          <AiOutlineYoutube />
        </div>
      </div>
    </>
  );
}

export default home;
