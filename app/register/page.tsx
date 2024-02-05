import { authOptions } from "@/auth";
import PricingCards from "@/components/PricingCards";
import { getServerSession } from "next-auth";

async function Register() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="w-full h-16 flex items-center justify-center text-3xl font-bold py-16">Lets handle your membership, {session?.user?.name}</h1>
      <PricingCards redirect={false} />
    </div>
  );
}

export default Register;
