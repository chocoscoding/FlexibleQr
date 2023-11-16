import SectionControl from "./SectionControl";
import MainInfo from "./MainInfo";
import QrStyle from "./QrStyle";
import Settings from "./Settings";
import QrCode from "./QrCode";
import TopNav from "./TopNav";
const Page = async ({ params }: { params: { qrid: string } }) => {
  function waitForTenSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("10 seconds have passed.");
        resolve("Done"); // You can resolve with any value you want
      }, 10000); // 10000 milliseconds = 10 seconds
    });
  }

  // await waitForTenSeconds();
  return (
    <main className="w-full min-h-page-height m-auto px-10 lg1:px-7 md1:!px-2">
      {/* top nav */}
      <TopNav name={`012345678901234567890123456789012345678901234567890123456789`} />
      <section className="ml-16 lg3:ml-0">
        <SectionControl />

        <main className="flex flex-wrap justify-between mt-8">
          {/* main */}
          <div className="w-8/12 md1:w-full">
            <MainInfo />
            <QrStyle />
            <Settings />
          </div>
          {/* qr code */}
          <div className="w-[30%] md1:w-full">
            <QrCode id={(params?.qrid as string) || " "} />
          </div>
        </main>
      </section>
    </main>
  );
};

export default Page;
