import React, { useEffect, useState } from 'react';
import './App.css';
import ResponsiveTable from './components/ResponsiveTable';
import downloadRecordsFromGoogleSheet from './utils/csvDownloaderAndParser';
import BrandHeader from './components/BrandHeader';
import BasicLoader from './components/BasicLoader';

function App() {
  const [loader, setLoader] = useState<boolean>(true);
  const [products, setProducts] = useState<any[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<any[]>([]);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    (async () => {
      const items = await downloadRecordsFromGoogleSheet();
      setProducts(items);
      setLoader(false);
    })();
  }, []);
  
  const searchProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const { value } = event.target;
    const filteredItems = products.filter((item) => item['EDIBLE NAME'].toLowerCase().includes(value?.toLowerCase()));
    setSearchedProducts(filteredItems);
  }

  const productsList = searchedProducts.length > 0 ? searchedProducts : products;
  
  return (
    <div className="App">
      <BrandHeader />
      {
        loader ? (
          <BasicLoader />
        )
        : (
          <>
            <input
              type="text"
              placeholder='Search for products'
              onChange={searchProducts}
              className="search-input"
            />
            <ResponsiveTable data={productsList} isMobile={isMobile} />
          </>
        )
      }
    </div>
  );
}

export default App;
