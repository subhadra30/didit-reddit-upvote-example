import auth from "../app/middleware";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export async function UserInfo() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div>
          {session.user.name}{" "}
          <span className="mr-3 text-xs text-zinc-400">#{session.user.id}</span>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <span className="mr-4">Welcome, Guest!</span>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
