import './App.css';
import React, { useState } from 'react';
import Catcard from './Components/Catcard';
import SubCatCard from './Components/SubCatCard';

export default function Shopping() {
  const [selectedCatId, setSelectedCatId] = useState(null);

  const handleCategoryClick = (id) => { 
    setSelectedCatId((prev) => (prev === id ? null : id));
  };

  const listOfCat = [
    {
      id: 1,
      Cat_name: 'Mouse',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVQBHiAgGynaWusbE29wSEyd3mg95FpaiPH8E08a4o8iewybyQ4BB_yJt4LpTut_d6N0&usqp=CAU',
      sub: [
        { name: 'Pulsar X2 mini', img: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/8809773553117_1024x.jpg?v=1736670379' },
        { name: 'Logitech G-Pro X2', img: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/zcx_800x.jpg?v=1696651638' },
        { name: 'Razer Viper V3 Pro', img: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/cc_800x.jpg?v=1723195718' },
        { name: 'Hitscan Hyperlight', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-oOtWfQtoYRR4tlGknxA_nAj43qEq7ydLw&s' },
        { name: 'Scyrox V8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuRNyBeME1Ne3K9EqcPQi1mlwSdIe-Cd1eA&s' },
      ],
    },
    {
      id: 2,
      Cat_name: 'Keyboard',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwTFOJLV6QZwoS5LF0cPIEHz0FQE9ArRWSA&s',
      sub: [
        { name: 'NuPhy Field75 HE', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpkjbuXJeY53wr35GLoX6bWJr8Vw1LLPJ7A&s' },
        { name: 'Wooting 80HE', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROx_CLQQc0PiKUVG60mXRg1FFNiECpr5tZWA&s' },
        { name: 'MonsGeek FUN60 Ultra', img: 'https://i.rtings.com/assets/products/u2a1KDQe/monsgeek-fun60-ultra/design-medium.jpg?format=auto' },
        { name: 'Aula Win60 he', img: 'https://m.media-amazon.com/images/I/61Rv2gCIOyL._UF894,1000_QL80_.jpg' },
        { name: 'Logitech G715', img: 'https://i.rtings.com/assets/products/dRbc40Fx/logitech-g715/backlight-small.jpg?format=auto' },
      ],
    },
    {
      id: 3,
      Cat_name: 'Monitor',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUv6TTKrYvCF6ND4JdPVyRoNJDLoN1ZGfgpw&s',
      sub: [
        { name: 'ASUS ROG Swift OLED PG27UCDM', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJMiFq-VN2WgqSpVAIBrpdbDf4-0k7YnZKw&s' },
        { name: 'AOC Q27G3XMN', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeMVgPzwYkNx43YDPTkq1kVYZlql392zDFQ&s' },
        { name: 'MSI G274QPF-QD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiQdv1AWWE6vSQCA9noRu0YOE3XcYVdlMIw&s' },
        { name: 'BENQ Zowie XL2566K', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp6LIltagfS9yNCuH-ERVgfgJcVjXghxg-g&s' },
        { name: 'ViewSonic VX2479A-HD-PRO', img: 'https://pcx.com.ph/cdn/shop/files/MN-VIEWSONIC-24-VX2479A-HD-PRO-GAMING-IPS-2.jpg?v=1744011556' },
      ],
    },
    {
      id: 4,
      Cat_name: 'Mousepad',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4NELIUNbXPLbUgWGYQH_APrL4jOS-aK_AA&s',
      sub: [
        { name: 'Artisan Ninja FX Zero', img: 'https://www.hobbydynamics.ph/cdn/shop/files/artisan-fx-zero-mousepad-xl-619191.jpg?v=1732699297' },
        { name: 'Razer Gigantus V2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uZdLH9jAfATt4E60Bov1Wzvv1miJI4Wq4A&s' },
        { name: 'SteelSeries QcK Heavy', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwYgv05AbpnvLmGA3f3WkWWN88CwbeAEr-g&s' },
        { name: 'ZOWIE G-SR-SE', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MH4qfuf_dvkDzpY60nkdfK0OWDcJaxaCYg&s' },
        { name: 'Logitech G640', img: 'https://m.media-amazon.com/images/I/71kUTJdudRL.jpg' },
      ],
    },
    {
      id: 5,
      Cat_name: 'Headset',
      img: 'https://i5.walmartimages.com/asr/925f83fe-e929-438a-b118-5f23a5a90225.8c142351a49f466f29f6871d100871c4.jpeg',
      sub: [
        { name: 'Audeze Maxwell Wireless', img: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_PS_5000x_4c8298d2-6968-4eb5-80c3-b984ccbc4c3f.jpg?v=1725674442' },
        { name: 'Logitech G PRO X 2', img: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/34r243ref_1024x.jpg?v=1690886689' },
        { name: 'SteelSeries Arctis Nova 7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCnD0LSO-PH77rPGoQxoJynXQMXvfco_3eA&s' },
        { name: 'Logitech G435', img: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/0097855168269.jpg?v=1729250946' },
        { name: 'Hyperx Cloud II Pro', img: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/0740617235692_800x.jpg?v=1733139435' },
      ],
    },
  ];

  const selectedCategory = listOfCat.find((cat) => cat.id === selectedCatId);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#02343F",
    minHeight: "100vh",
    padding: "20px",
  };

  const categoryRowStyle = {
    display: "flex",
    gap: "16px",
    marginBottom: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const subCategoryWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  const subCategoryTitleStyle = {
    margin: "8px 0",
    color: "#F5F5DC",
  };

  const subCategoryContainerStyle = {
    maxWidth: "900px",
    margin: "10px auto 0",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#F5F5DC",
    color: "#02343F",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
  };

  return (
    <div style={containerStyle}>

      <div style={categoryRowStyle}>
        {listOfCat.map((item) => (
          <Catcard
            key={item.id}
            data={item}
            onClick={() => handleCategoryClick(item.id)}
            isSelected={selectedCategory && selectedCategory.id === item.id}
          />
        ))}
      </div>

      {selectedCategory && (
        <div style={subCategoryWrapperStyle}>
          <h2 style={subCategoryTitleStyle}>{selectedCategory.Cat_name}</h2>
          <div style={subCategoryContainerStyle}>
            {selectedCategory.sub.map((subcat, idx) => (
              <SubCatCard key={idx} data={subcat} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
 