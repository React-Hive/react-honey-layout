import React, { useCallback, useState } from 'react';

import { HoneyBox, HoneyOverlay } from '../../../components';
import { Button } from './components';

export const BasicHoneyOverlayBasixExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <HoneyBox $marginTop={2} $padding={2} $border="1px solid #cccccc" $borderRadius="4px">
      <Button onClick={() => setIsOpen(!isOpen)}>Open Overlay</Button>

      <HoneyOverlay
        isActive={isOpen}
        onClose={handleClose}
        $display={isOpen ? undefined : 'none'} // Toggle visibility with display CSS prop
      >
        <div>This is the overlay content.</div>

        <Button onClick={handleClose} $color="default">
          Close Overlay
        </Button>
      </HoneyOverlay>
    </HoneyBox>
  );
};
