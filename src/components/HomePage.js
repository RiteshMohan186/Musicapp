
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DropdownMenu from './Dropdown';
const Homepage = () => {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
  
    const options1 = [
      { label: 'Option 1A', value: 'option1A' },
      { label: 'Option 1B', value: 'option1B' },
      // Add more options as needed
    ];
  
    const options2 = [
      { label: 'Option 2A', value: 'option2A' },
      { label: 'Option 2B', value: 'option2B' },
      // Add more options as needed
    ];
  
    const handleDropdownChange1 = (event) => {
      setSelectedOption1(event.target.value);
    };
  
    const handleDropdownChange2 = (event) => {
      setSelectedOption2(event.target.value);
    };
  
    return (
      <div className="App">
        <Navbar />
        <div className="main-content">
          <DropdownMenu
            // label="Dropdown Menu 1"
            options={options1}
            selectedValue={selectedOption1}
            handleChange={handleDropdownChange1}
          />
          <DropdownMenu
            // label="Dropdown Menu 2"
            options={options2}
            selectedValue={selectedOption2}
            handleChange={handleDropdownChange2}
          />
        </div>
        <Footer />
      </div>
    );
};

export default Homepage;