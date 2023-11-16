import getUserQrById from "@/app/actions/getOneQrById";
import { notFound } from "next/navigation";
import Client from "./Client";

const page = async ({ params }: { params: { qrid: string } }) => {
  const oneqr = await getUserQrById(params.qrid);

  if (!oneqr) {
    notFound();
  }
  return <Client {...oneqr} />;
};

export default page;
