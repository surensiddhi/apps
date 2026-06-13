// Function to launch app within an iframe to mask the long URL
function openApp(url, name) {
    if(url === '' || url.startsWith('YOUR_GOOGLE')) {
        alert('Demo endpoint setup is currently in progress.');
        return;
    }
    
    //document.getElementById('modalTitle').textContent = name + " - Sandbox Session";
    document.getElementById('modalTitle').textContent = name + " - Live Application Demo";
    document.getElementById('appFrame').src = url;
    
    // Unhide the fullscreen view layer
    const modal = document.getElementById('appModal');
    modal.classList.remove('hidden');
    // Prevent main body page background scroll
    document.body.style.overflow = 'hidden';
}

function closeApp() {
    const modal = document.getElementById('appModal');
    modal.classList.add('hidden');
    // Tear down iframe frame data to secure state
    document.getElementById('appFrame').src = "";
    // Restore normal window control scrolling
    document.body.style.overflow = 'auto';
}

// to completely bypass Google's sandbox 
//restrictions while keeping a clean interface, 
//update your script.js to open the apps in a clean, dedicated browser tab instead of an iframe:

//function openApp(url, name) {
//    if(url === '' || url.startsWith('YOUR_GOOGLE')) {
//        alert('Demo endpoint setup is currently in progress.');
//        return;
//    }
//    
//    // This bypasses the iframe entirely, giving your app 100% full features without any sandbox restrictions
//    window.open(url, '_blank', 'noopener,noreferrer');
//}
