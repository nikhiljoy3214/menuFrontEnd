import React, { useEffect, useState } from 'react';
import { getMenuApi } from '../services/apis';

function Home() {
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(2);

  const getMenu = async () => {
    const result = await getMenuApi();
    setMenu(result.data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://i.postimg.cc/Fz5ryX41/b1.png")`,
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        {menu.categories && menu.categories.map(category => (
          <div
            key={category.id}
            style={{
              backgroundColor: '#0796EF',
              padding: '10px',
              borderRadius: '5px',
              fontFamily: 'Oswald',
              margin: '0 5px',
              transition: 'border-color 0.3s ease',
              border: `2px solid ${selectedCategory === category.id ? 'white' : 'transparent'}`,
              cursor: 'pointer' // Add cursor pointer
            }}
            onClick={() => handleCategoryClick(category.id)} // Click handler
          >
            {category.name}
          </div>
        ))}
      </div>

      {/* Display items of the selected category */}
      {selectedCategory && (
        <div style={{
          backgroundImage: `url(https://i.postimg.cc/FRj5QfMs/b2.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          color: 'white',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {menu.categories &&
              menu.categories.find(category => category.id === selectedCategory)?.subcategories.map(subcategory => (
                <div key={subcategory.name} style={{
                  border: '2px solid white',
                  width: '90%',
                  maxWidth: '1000px',
                  margin: '10px auto',
                  padding: '10px',
                  textAlign: 'left',
                  whiteSpace: 'pre-wrap',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <h4 className='justify-content-center'
                    style={{
                      color: 'white',
                      fontFamily: 'Oswald',
                      fontWeight: 500,
                      fontSize: '60px',
                      lineHeight: '111px',
                      letterSpacing: '3%',
                      textShadow: '4px 3px 0 #800020',

                    }}>{subcategory.name}</h4>
                  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {subcategory.items.map((item, index) => (
                      <div key={item.id} style={{
                        padding: '3px',
                        width: '50%'
                      }}>
                        <div className='fw-bold'>{item.name}..................................${item.price}</div>
                        <div>{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        {/* ORDER ONLINE BUTTON */}
      <div>
        <button className='btn fw-bold' style={{ backgroundColor: "#0796EF", color: "white" }}>ORDER ONLINE</button>
      </div>

      <div style={{
        backgroundColor: "#C5A059", width: '90%',
        maxWidth: '75%',
        margin: '10px auto',
        padding: '10px',
        textAlign: 'center',
        whiteSpace: 'pre-wrap',
        border: '2px solid white', display: 'flex', flexDirection: "row"
      }}>
        <div style={{ flex: 1, paddingRight: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ borderRight: '2px solid white', padding: '5%' }}>Food may not be refunded. If your food was made incorrectly we will remake it for you.</div>
        </div>
        <div style={{ flex: 1, paddingRight: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ borderRight: '2px solid white', padding: '10px' }}>18% service charge will be added to all checks over $100.</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ padding: '10px' }}>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</div>
        </div>
      </div>
        </div>
      )}

      
    </div>
  )
}

export default Home;
