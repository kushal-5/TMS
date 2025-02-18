import SearchBar from "./SearchBar.jsx";

const MainContent = () => {
  return (
    <div className="lg:ml-[88px] 2xl:ml-0 overflow-hidden">
      <SearchBar />
      <div className="bg-black rounded-lg p-4 h-[calc(100vh-180px)]">
        {/* <LiveChart /> */}
      </div>
    </div>
  );
};

export default MainContent;
