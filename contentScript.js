let isDarkMode = false;

function applyDarkMode() {
  const darkModeStyles = `
    html, body {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
    }
    a {
      color: #bb86fc !important;
    }
    /* Add more styles as needed */
  `;
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', 'dark-mode-styles');
  styleElement.innerHTML = darkModeStyles;
  document.head.appendChild(styleElement);
}

function removeDarkMode() {
  const styleElement = document.getElementById('dark-mode-styles');
  if (styleElement) {
    styleElement.remove();
  }
}

function toggleDarkMode() {
  chrome.storage.sync.get(['darkMode'], (result) => {
    let isDarkMode = result.darkMode || false;
    if (isDarkMode) {
      removeDarkMode();
    } else {
      applyDarkMode();
    }
    chrome.storage.sync.set({ darkMode: !isDarkMode });
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggle-dark-mode') {
    console.log('Message received in content script');
    toggleDarkMode();
    sendResponse({ success: true }); // Ensure to send a response
  }
});
