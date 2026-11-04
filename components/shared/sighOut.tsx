import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

const SignOut = () => {
  const router = useRouter();
  return (
    <span
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
              router.refresh();
            },
          },
        });
      }}
      className="flex flex-row gap-2 cursor-pointer items-center"
    >
      Logout <MdLogout className="inline" size={18} />
    </span>
  );
};

export default SignOut;
