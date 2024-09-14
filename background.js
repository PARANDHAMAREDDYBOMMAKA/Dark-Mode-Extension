// Example: Save dark mode state to storage
function saveDarkModeState(isDarkMode) {
    chrome.storage.sync.set({ darkMode: isDarkMode }, () => {
      console.log('Dark mode state saved:', isDarkMode);
    });
  }
  
  // Example: Get dark mode state from storage
  function getDarkModeState(callback) {
    chrome.storage.sync.get(['darkMode'], (result) => {
      callback(result.darkMode);
    });
  }
  
  // Example usage
  getDarkModeState((isDarkMode) => {
    console.log('Dark mode state loaded:', isDarkMode);
    // Initialize extension state based on loaded value
  });
  
  // Add event listeners or other logic as needed
  