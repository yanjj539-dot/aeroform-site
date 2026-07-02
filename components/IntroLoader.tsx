import { withBasePath } from "@/lib/paths";

export function IntroLoader() {
  return (
    <div className="intro-loader" aria-hidden="true" data-intro-loader>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath("/assets/brand/logo-horizontal-light.svg")}
        alt=""
        width={190}
        height={38}
        data-intro-logo
      />
      <p data-intro-kicker>ENGINEERED FOR MOTION</p>
    </div>
  );
}
