import FlashSaleSection from "./FlashSaleSection";
import { dataList } from "./data";
function App() {
  return (
    <>
      <FlashSaleSection items={dataList} header="toadys" title="Flash sales" />
      <FlashSaleSection
        items={dataList}
        header="this month"
        title="Best Selling Products"
      />
    </>
  );
}

export default App;
