document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        console.error('Error querying tabs:', chrome.runtime.lastError.message);
        return;
      }
      if (tabs.length === 0) {
        console.error('No active tab found');
        return;
      }
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle-dark-mode' }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('Error sending message:', chrome.runtime.lastError.message);
        } else {
          console.log('Message sent successfully');
          console.log('Response:', response); // Log the response
        }
      });
    });
  });
  