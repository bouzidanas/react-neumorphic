import { useState } from 'react';
import { NeumorphicToggle } from './components/toggle';
import './App.css';

function App() {
  const [toggleStates, setToggleStates] = useState({
    uncontrolled: false,
    controlled: true,
    small: false,
    medium: false,
    large: false,
    custom35: false,
    custom3rem: false,
  });

  const handleToggleChange = (key: keyof typeof toggleStates, isOn: boolean) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: isOn,
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Neumorphic Design</h1>
        <p>Neumorphic UI Components for React</p>
      </header>

      <main className="app-main">
        <section className="demo-section">
          <h2>Neumorphic Toggle</h2>
          <p>A beautiful toggle switch with neumorphic design</p>

          <div className="demo-grid">
            <div
              className="demo-item"
              style={{ backgroundColor: toggleStates.uncontrolled ? '#2c2f40' : '#f8f9fa' }}
            >
              <h3
                style={{color: toggleStates.uncontrolled ? '#ffffffd6' : '#000'}}
              >
                Uncontrolled Toggle
              </h3>
              <NeumorphicToggle
                onChange={(isOn) => handleToggleChange('uncontrolled', isOn)}
                aria-label="Uncontrolled toggle example"
              />
            </div>

            <div
              className="demo-item"
              style={{ backgroundColor: toggleStates.controlled ? '#2c2f40' : '#f8f9fa' }}
            >
              <h3
                style={{color: toggleStates.controlled ? '#ffffffd6' : '#000'}}
              >
                Controlled Toggle
              </h3>
              <NeumorphicToggle
                isOn={toggleStates.controlled}
                onChange={(isOn) => handleToggleChange('controlled', isOn)}
                aria-label="Controlled toggle example"
              />
              <p
                style={{color: toggleStates.controlled ? '#ffffffb9' : '#000'}}
              >State: {toggleStates.controlled ? 'ON' : 'OFF'}</p>
            </div>

            <div
              className="demo-item"
              style={{ backgroundColor: toggleStates.small ? '#2c2f40' : '#f8f9fa' }}
            >
              <h3
                style={{color: toggleStates.small ? '#ffffffd6' : '#000'}}
              >
                Small Size (Preset)
              </h3>
              <NeumorphicToggle
                size="small"
                onChange={(isOn) => handleToggleChange('small', isOn)}
                aria-label="Small toggle example"
              />
            </div>

            <div
              className="demo-item"
              style={{ backgroundColor: toggleStates.medium ? '#2c2f40' : '#f8f9fa' }}
            >
              <h3
                style={{color: toggleStates.medium ? '#ffffffd6' : '#000'}}
              >
                Medium Size (Default)
              </h3>
              <NeumorphicToggle
                size="medium"
                onChange={(isOn) => handleToggleChange('medium', isOn)}
                aria-label="Medium toggle example"
              />
            </div>

            <div
              className="demo-item"
              style={{ backgroundColor: toggleStates.large ? '#2c2f40' : '#f8f9fa' }}
            >
              <h3
                style={{color: toggleStates.large ? '#ffffffd6' : '#000'}}
              >
                Large Size (Preset)</h3>
              <NeumorphicToggle
                size="large"
                onChange={(isOn) => handleToggleChange('large', isOn)}
                aria-label="Large toggle example"
              />
            </div>

            <div
              className="demo-item"
              style={{ backgroundColor: toggleStates.custom35 ? '#2c2f40' : '#f8f9fa' }}
            >
              <h3
                style={{color: toggleStates.custom35 ? '#ffffffd6' : '#000'}}
              >
                Custom Size (35px)
              </h3>
              <NeumorphicToggle
                size={35}
                onChange={(isOn) => handleToggleChange('custom35', isOn)}
                aria-label="35px toggle example"
              />
            </div>

            <div
              className="demo-item"
              style={{ backgroundColor: toggleStates.custom3rem ? '#2c2f40' : '#f8f9fa' }}
            >
              <h3
                style={{color: toggleStates.custom3rem ? '#ffffffd6' : '#000'}}
              >
                Custom Size (5rem)
              </h3>
              <NeumorphicToggle
                size="5rem"
                onChange={(isOn) => handleToggleChange('custom3rem', isOn)}
                aria-label="3rem toggle example"
              />
            </div>

            <div 
              className="demo-item"
              style={{backgroundColor: '#f8f9fa'}}  
            >
              <h3>Disabled Toggle</h3>
              <NeumorphicToggle disabled aria-label="Disabled toggle example" />
            </div>
          </div>
        </section>

        {/* <section className="usage-section">
          <h2>Usage</h2>
          <pre>
            <code>
              {`import { NeumorphicToggle } from 'react-neumorphic';

// Preset sizes
<NeumorphicToggle size="small" />   // 32px height, 96px width
<NeumorphicToggle size="medium" />  // 48px height, 144px width
<NeumorphicToggle size="large" />   // 64px height, 192px width

// Custom pixel size
<NeumorphicToggle size={40} />      // 40px height, 120px width

// CSS unit size
<NeumorphicToggle size="3rem" />    // 3rem height, 9rem width

// Controlled usage
<NeumorphicToggle 
  isOn={isOn}
  onChange={setIsOn}
  size={50}
/>`}
            </code>
          </pre>
        </section> */}
      </main>
    </div>
  );
}

export default App;
