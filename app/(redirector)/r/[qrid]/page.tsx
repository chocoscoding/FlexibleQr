 import getQrByIdForLink from "@/app/actions/getQrByIdForLink";
import { notFound, permanentRedirect } from "next/navigation";

//TODO: add metadata for name and vary if it affects the speed of redirect or even helps in any way

//redirection page
const page = async ({ params }: { params: { qrid: string } }) => {
  const oneqr = await getQrByIdForLink(params.qrid);

  if (!oneqr || !oneqr.link) {
    notFound();
  }
  permanentRedirect(oneqr.link);
};

export default page;
