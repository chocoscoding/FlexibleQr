import getUserQrById from "@/app/actions/getOneQrById";
import { notFound,redirect } from "next/navigation";

//TODO: add metadata for name and vary if it affects the speed of redirect or even helps in any way


//redirection page
const page = async ({ params }: { params: { qrid: string } }) => {
  const oneqr = await getUserQrById(params.qrid);

  if (!oneqr || !oneqr.link) {
    notFound();
  }
  redirect(oneqr.link)
};

export default page;