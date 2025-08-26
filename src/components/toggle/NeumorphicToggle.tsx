import React, { useState } from 'react';
import './NeumorphicToggle.css';

export interface NeumorphicToggleProps {
  /** Whether the toggle is on/off */
  isOn?: boolean;
  /** Callback fired when toggle state changes */
  onChange?: (isOn: boolean) => void;
  /** Size of the toggle - number (px), string (CSS), or preset */
  size?: number | string | 'small' | 'medium' | 'large';
  /** Whether the toggle is disabled */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** Label for accessibility */
  'aria-label'?: string;
}

export const NeumorphicToggle: React.FC<NeumorphicToggleProps> = ({
  isOn: controlledIsOn,
  onChange,
  size = 'medium',
  disabled = false,
  className = '',
  'aria-label': ariaLabel = 'Toggle switch',
}) => {
  const [internalIsOn, setInternalIsOn] = useState(false);
  
  // Determine if this is controlled or uncontrolled
  const isControlled = controlledIsOn !== undefined;
  const isOn = isControlled ? controlledIsOn : internalIsOn;

  // Calculate size values
  const getSizeValues = () => {
    let baseHeight: string;
    
    if (typeof size === 'number') {
      baseHeight = `${size}px`;
    } else if (typeof size === 'string' && !['small', 'medium', 'large'].includes(size)) {
      baseHeight = size;
    } else {
      // Preset sizes
      const presets = {
        small: '32px',
        medium: '40px',
        large: '48px'
      };
      baseHeight = presets[size as keyof typeof presets] || presets.medium;
    }
    
    // Calculate dimensions including border padding (scalable)
    const baseHeightValue = parseFloat(baseHeight);
    const unit = baseHeight.replace(baseHeightValue.toString(), '');
    const borderSpacing = baseHeightValue * 0.08 * 2; // 6.25% * 2 for both sides
    const height = `${baseHeightValue + borderSpacing}${unit}`;  // Add border spacing
    const width = `${(baseHeightValue + borderSpacing) * 2.1}${unit}`;  // 3:1 aspect ratio with padding
    
    // Handle circle fills base height with 4px margin on all sides
    const handleSize = `calc(${baseHeight} - 8px)`;
    
    return { height, width, handleSize, baseHeight };
  };

  const { height, width, handleSize, baseHeight } = getSizeValues();

  const handleToggle = () => {
    if (disabled) return;
    
    const newState = !isOn;
    
    if (!isControlled) {
      setInternalIsOn(newState);
    }
    
    onChange?.(newState);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      className={`neumorphic-toggle ${isOn ? 'on' : 'off'} ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        width,
        height,
        '--handle-size': handleSize,
        '--toggle-width': `${parseFloat(baseHeight) * 3}${baseHeight.replace(parseFloat(baseHeight).toString(), '')}`,
        '--toggle-height': baseHeight,
        '--handle-width': `calc(${baseHeight} - 2 * var(--handle-margin))`,
      } as React.CSSProperties}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
    >
      <div className="toggle-track-container">
        <div className="toggle-track">
          <div className="toggle-handle">
            <div className="toggle-icon">
              {isOn ? (
                // Moon icon for dark mode
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41178 10.8627 4.58281 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27812C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6445 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7219 10.8632C21.286 10.804 20.7294 10.9658 20.4253 11.469L21.7092 12.2447Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className="toggle-labels">
            <span className="label-left">DARK MODE</span>
            <span className="label-right">LIGHT MODE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeumorphicToggle;
