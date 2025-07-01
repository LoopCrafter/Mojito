import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _SplitText, { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    const title = new SplitText(".title", {
      type: "chars",
    });
    const leftText = new SplitText(".subtitle", {
      type: "lines",
    });
    const tl = gsap.timeline({});
    tl.from(title.chars, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.08,
      mask: "lines",
    });
    tl.from(leftText.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      })
      .to(".left-leaf", { y: -200 }, 0)
      .to(".right-leaf", { y: 200 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">Mojito</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle" aria-label="Sip the Spirit  of Summer">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p
                className="subtitle"
                aria-label="Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses."
              >
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
