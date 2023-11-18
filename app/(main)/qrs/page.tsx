import getUserQrs from "@/app/actions/getUsersQrs";
import Client from "./Client";

const page = async () => {

  const initialList = await getUserQrs();
  return <Client {...initialList}/>;
};

export default page;
