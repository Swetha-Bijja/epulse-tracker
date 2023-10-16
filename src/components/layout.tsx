import EntryContainerBoard from "@/components/entry-container-board";
import Navbar from "@/components/navbar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <EntryContainerBoard />
    </div>
  );
};

export default Layout;
