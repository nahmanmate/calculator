let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;

  // Show the install button if it exists
  const installButton = document.createElement('button');
  installButton.textContent = 'Install Calculator';
  installButton.classList.add('install-button');
  installButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background: #4a90e2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
  `;

  document.body.appendChild(installButton);
  installButton.style.display = 'block';

  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    await deferredPrompt.userChoice;

    // Clear the saved prompt
    deferredPrompt = null;

    // Hide the button
    installButton.style.display = 'none';
  });
});

// When the PWA is installed, hide the install button
window.addEventListener('appinstalled', () => {
  if (deferredPrompt) deferredPrompt = null;
  const installButton = document.querySelector('.install-button');
  if (installButton) installButton.style.display = 'none';
});
