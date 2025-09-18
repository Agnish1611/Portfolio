const MOBILE_WIDTH = "calc((350px - 3px) / 4)";
const DESKTOP_WIDTH = "calc((1000px - 9px) / 10)";
const GRID_HEIGHT = "calc((403px - 3px) / 4)";
const TOTAL_HEIGHT = "403px";

import BlockchainAnimation from "./BlockchainAnimation";
import LinesAnimation from "./LinesAnimation";
import SpiralAnimation from "./SpiralAnimation";

const GridDiv = ({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) => (
  <div
    className={`bg-[#f9f9f9] rounded-lg ${className} flex items-center justify-center text-xs font-mono text-zinc-400`}
    style={style}
  >
    {children}
  </div>
);

const FlexSpacer = ({ className }: { className: string }) => (
  <div className={`bg-[#f9f9f9] flex-1 ${className}`}></div>
);

export default function Hero() {
  const mobileGridItems = [...Array(4)].map((_, index) => (
    <GridDiv
      key={index}
      className="lg:hidden"
      style={{ width: MOBILE_WIDTH, height: "100px" }}
    >
      {index === 1 ? <LinesAnimation /> : index === 3 ? <SpiralAnimation /> : <div className="w-1.5 h-1.5 bg-[#E5E7EB]"></div>}
    </GridDiv>
  ));

  const desktopHorizontalItems = [...Array(10)].map((_, index) => (
    <GridDiv
      key={index}
      className="hidden lg:flex h-full items-center justify-center"
      style={{ width: DESKTOP_WIDTH }}
    >
      {index === 2 ? `[TypeScript]` : index === 3 ? (
        <BlockchainAnimation />
      ) : index === 9 ? (
        `[Rust]`
      ) : (
        <div className="w-1.5 h-1.5 bg-[#E5E7EB]"></div>
      )}
    </GridDiv>
  ));

  const desktopVerticalItemsRight = [...Array(4)].map((_, index) => (
    <GridDiv key={index} style={{ width: DESKTOP_WIDTH, height: GRID_HEIGHT }}>
      {index === 2 ? (
        <LinesAnimation />
      ) : index === 3 ? (
        <></>
      ) : (
        <div className="w-1.5 h-1.5 bg-[#E5E7EB]"></div>
      )}
    </GridDiv>
  ));

  const desktopVerticalItemsLeft = [...Array(4)].map((_, index) => (
    <GridDiv key={index} style={{ width: DESKTOP_WIDTH, height: GRID_HEIGHT }}>
      {index === 1 ? <SpiralAnimation /> : index === 3 ? '[AWS]' : <div className='w-1.5 h-1.5 bg-[#E5E7EB]'></div>}
    </GridDiv>
  ));

  return (
    <>
      <div className="hidden lg:flex w-screen h-[6rem] gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg h-full" />
        <GridDiv className="hidden lg:block w-[100px] h-full"></GridDiv>
        {desktopHorizontalItems}
        <GridDiv className="hidden lg:block w-[100px] h-full"></GridDiv>
        <FlexSpacer className="rounded-l-lg h-full" />
      </div>

      <div className="w-screen flex gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg" />

        <div className="hidden lg:flex flex-col gap-[1px]">
          <GridDiv className="w-[100px] h-[100px]"></GridDiv>
          <GridDiv className="w-[100px] h-[100px]">[Prisma]</GridDiv>
          <GridDiv className="w-[100px] h-[201px]"></GridDiv>
        </div>

        <div className="lg:hidden w-[350px] flex flex-col gap-[1px]">
          <div className="flex gap-[1px]">{mobileGridItems}</div>
          <div className="h-[403px] bg-[#f9f9f9] rounded-lg p-8">
            <div className="flex flex-col gap-6">
              <h1 className="font-pangaia-bold text-2xl text-black">
                I'm a Software Engineer from India
              </h1>
              <p className="font-mono text-sm text-zinc-600 leading-relaxed">
                I'm a{" "}
                <span className="text-red-500 font-semibold">developer</span>{" "}
                who loves building projects around blockchain and full-stack
                applications. I enjoy experimenting with new technologies,
                winning hackathons, and creating Web3 solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex gap-[1px]">
          <div className="flex flex-col gap-[1px]">
            {desktopVerticalItemsLeft}
          </div>

          <div
            className="bg-[#f9f9f9] rounded-lg flex-shrink-0 p-8 flex justify-center items-center"
            style={{
              width: "calc(8 * (1000px - 9px) / 10 + 7px)",
              height: TOTAL_HEIGHT,
            }}
          >
            <div className="flex flex-col gap-6">
              <h1 className="font-pangaia-bold text-3xl text-black text-center">
                I'm a Software Engineer from India
              </h1>
              <p className="font-mono text-sm text-zinc-500 leading-relaxed text-center">
                I'm a{" "}
                <span className="text-red-500">developer</span>{" "}
                who loves building projects around blockchain and full-stack
                applications. I enjoy experimenting with new technologies,
                winning hackathons, and creating Web3 solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[1px]">
            {desktopVerticalItemsRight}
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-[1px]">
          <GridDiv className="w-[100px] h-[200px] font-mono">
            [Solana]
          </GridDiv>
          <GridDiv className="w-[100px] h-[100px]"></GridDiv>
          <GridDiv className="w-[100px] h-[101px]">[Next Js]</GridDiv>
        </div>

        <FlexSpacer className="rounded-l-lg" />
      </div>
    </>
  );
}
