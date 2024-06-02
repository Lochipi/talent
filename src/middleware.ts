export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/courses", "/profile", "/admin", "/events", "/news"],
};
