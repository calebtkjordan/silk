import { SiteHeader } from "@/components/site-header";
import { BottomNav } from "@/components/bottom-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="pb-16">{children}</main>
      <BottomNav />
    </>
  );
}
