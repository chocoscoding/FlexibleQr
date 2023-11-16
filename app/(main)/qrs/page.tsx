import getUserQrs from "@/app/actions/getUsersQrs";
import Client from "./Client";

const page = async () => {
  const initialList = await getUserQrs();
  console.log(initialList)
  return <Client {...initialList}/>;
};

export default page;
