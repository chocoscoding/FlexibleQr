import dynamic from "next/dynamic";
import getUserQrById from "@/app/actions/getOneQrById";
import { notFound } from "next/navigation";
import { QrContextProvider } from "./Provider";
import SectionControl from "./SectionControl";
const MainInfo = dynamic(() => import("./MainInfo"));
const QrStyle = dynamic(() => import("./QrStyle"));
const Settings = dynamic(() => import("./Settings"));

import QrCode from "./QrCode";
import TopNav from "./TopNav";

const page = async ({ params }: { params: { qrid: string } }) => {
  const oneqr = await getUserQrById(params.qrid);

  if (!oneqr) {
    notFound();
  }
  return (
    <QrContextProvider initialValue={oneqr}>
      <main className="w-full min-h-page-height m-auto px-10 lg1:px-7 md1:!px-2">
        {/* top nav */}
        <TopNav />

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
              <QrCode />
            </div>
          </main>
        </section>
      </main>
    </QrContextProvider>
  );
};

export default page;
