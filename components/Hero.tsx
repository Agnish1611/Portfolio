import BlockchainAnimation from "./BlockchainAnimation";
import LinesAnimation from "./LinesAnimation";
import SpiralAnimation from "./SpiralAnimation";

const GRID_HEIGHT = "calc((403px - 3px) / 4)";
const TOTAL_HEIGHT = "403px";

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
    className={`bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg ${className} flex items-center justify-center text-xs font-mono text-zinc-400`}
    style={style}
  >
    {children}
  </div>
);

const FlexSpacer = ({ className }: { className: string }) => (
  <div className={`bg-[#f9f9f9] dark:bg-zinc-900 flex-1 ${className}`}></div>
);

export default function Hero() {
  const mobileGridItems = [...Array(4)].map((_, index) => (
    <GridDiv
      key={index}
      className="flex-[1]"
      style={{ height: "100px" }}
    >
      {index === 1 ? (
        <LinesAnimation />
      ) : index === 3 ? (
        <SpiralAnimation />
      ) : (
        <div className="w-1.5 h-1.5 bg-[#E5E7EB] dark:bg-zinc-700"></div>
      )}
    </GridDiv>
  ));

  const desktopHorizontalItems = [...Array(10)].map((_, index) => (
    <GridDiv
      key={index}
      className="hidden lg:flex h-full items-center justify-center col-span-1 w-full"
    >
      {index === 2 ? (
        `[TypeScript]`
      ) : index === 3 ? (
        <BlockchainAnimation />
      ) : index === 9 ? (
        `[Rust]`
      ) : (
        <div className="w-1.5 h-1.5 bg-[#E5E7EB] dark:bg-zinc-700"></div>
      )}
    </GridDiv>
  ));

  const desktopVerticalItemsRight = [...Array(4)].map((_, index) => (
    <GridDiv key={index} style={{ height: GRID_HEIGHT }} className="w-full">
      {index === 2 ? (
        <LinesAnimation />
      ) : index === 3 ? (
        <></>
      ) : (
        <div className="w-1.5 h-1.5 bg-[#E5E7EB] dark:bg-zinc-700"></div>
      )}
    </GridDiv>
  ));

  const desktopVerticalItemsLeft = [...Array(4)].map((_, index) => (
    <GridDiv key={index} style={{ height: GRID_HEIGHT }} className="w-full">
      {index === 1 ? (
        <SpiralAnimation />
      ) : index === 3 ? (
        "[AWS]"
      ) : (
        <div className="w-1.5 h-1.5 bg-[#E5E7EB] dark:bg-zinc-700"></div>
      )}
    </GridDiv>
  ));

  return (
    <>
      {/* Desktop Top Bar */}
      <div className="hidden lg:flex w-screen h-[6rem] gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg h-full" />
        <div className="w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] grid grid-cols-12 gap-[1px] flex-shrink-0 h-full">
          <GridDiv className="hidden lg:block col-span-1 h-full w-full"></GridDiv>
          {desktopHorizontalItems}
          <GridDiv className="hidden lg:block col-span-1 h-full w-full"></GridDiv>
        </div>
        <FlexSpacer className="rounded-l-lg h-full" />
      </div>

      {/* Desktop Main Area */}
      <div className="hidden lg:flex w-screen gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg" />
        <div className="w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] grid grid-cols-12 gap-[1px] flex-shrink-0">
          
          <div className="flex flex-col gap-[1px] col-span-1 w-full">
             <GridDiv className="h-[100px]"></GridDiv>
             <GridDiv className="h-[100px]">[Prisma]</GridDiv>
             <GridDiv className="h-[201px]"></GridDiv>
          </div>

          <div className="flex flex-col gap-[1px] col-span-1 w-full">
             {desktopVerticalItemsLeft}
          </div>

          <div
            className="bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg col-span-8 w-full p-8 flex justify-center items-center"
            style={{ height: TOTAL_HEIGHT }}
          >
            <div className="flex flex-col gap-6">
              <h1 className="font-pangaia-bold text-3xl text-black dark:text-white text-center">
                I&apos;m a Software Engineer from India
              </h1>
              <p className="font-mono text-sm text-zinc-500 leading-relaxed text-center">
                I&apos;m a <span className="text-red-500">developer</span> who loves
                building projects around blockchain and full-stack applications.
                I enjoy experimenting with new technologies, winning hackathons,
                and creating Web3 solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[1px] col-span-1 w-full">
             {desktopVerticalItemsRight}
          </div>

          <div className="flex flex-col gap-[1px] col-span-1 w-full">
             <GridDiv className="h-[200px] font-mono">[Solana]</GridDiv>
             <GridDiv className="h-[100px]"></GridDiv>
             <GridDiv className="h-[101px]">[Next Js]</GridDiv>
          </div>

        </div>
        <FlexSpacer className="rounded-l-lg" />
      </div>

      {/* Mobile Main Area */}
      <div className="lg:hidden w-screen flex gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg" />
        <div className="w-[90vw] md:w-[600px] flex flex-col gap-[1px] flex-shrink-0">
          <div className="flex gap-[1px]">{mobileGridItems}</div>
          <div className="h-fit bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg p-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-pangaia-bold text-2xl text-black dark:text-white">
                I&apos;m a Software Engineer from India
              </h2>
              <p className="font-mono text-sm text-zinc-600 leading-relaxed">
                I&apos;m a{" "}
                <span className="text-red-500 font-semibold">developer</span>{" "}
                who loves building projects around blockchain and full-stack
                applications. I enjoy experimenting with new technologies,
                winning hackathons, and creating Web3 solutions.
              </p>
            </div>
          </div>
        </div>
        <FlexSpacer className="rounded-l-lg" />
      </div>
    </>
  );
}
