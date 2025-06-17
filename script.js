document.addEventListener('DOMContentLoaded', function() {
  // Initial viewer count
  let viewerCount = 111;
  const viewerCountElement = document.getElementById('viewer-count');
  
  // Update the viewer count display
  function updateViewerCount() {
    viewerCountElement.textContent = viewerCount;
  }
  
  // Generate a random change in viewers (-3 to +5)
  function getRandomViewerChange() {
    // More likely to increase than decrease (weighted random)
    const changeOptions = [-3, -2, -1, 0, 1, 1, 2, 2, 3, 3, 4, 5];
    return changeOptions[Math.floor(Math.random() * changeOptions.length)];
  }
  
  // Update viewers periodically
  function fluctuateViewers() {
    // Change the viewer count
    const change = getRandomViewerChange();
    viewerCount += change;
    
    // Ensure count doesn't go below 111
    if (viewerCount < 111) {
      viewerCount = 111;
    }
    
    // Add a sudden spike occasionally (1 in 10 chance)
    if (Math.random() < 0.1) {
      viewerCount += Math.floor(Math.random() * 10) + 5;
    }
    
    // Update the display
    updateViewerCount();
    
    // Visual feedback for changes
    if (change > 0) {
      viewerCountElement.classList.add('increase');
      setTimeout(() => viewerCountElement.classList.remove('increase'), 500);
    } else if (change < 0) {
      viewerCountElement.classList.add('decrease');
      setTimeout(() => viewerCountElement.classList.remove('decrease'), 500);
    }
    
    // Schedule next update (random interval between 2-5 seconds)
    const nextUpdateTime = 2000 + Math.random() * 3000;
    setTimeout(fluctuateViewers, nextUpdateTime);
  }
  
  // Start the fluctuation
  fluctuateViewers();
  
  // Optional: Make the play button interactive
  const playButton = document.querySelector('.play-button');
  const videoPlaceholder = document.querySelector('.video-placeholder');
  
  playButton.addEventListener('click', function() {
    // This would normally start the video
    // For this demo, we'll just add a "playing" class
    videoPlaceholder.classList.add('playing');
    playButton.style.display = 'none';
    
    // Simulate a spike in viewers when video starts
    viewerCount += Math.floor(Math.random() * 20) + 10;
    updateViewerCount();
  });
});
