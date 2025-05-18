// Copy contract address to clipboard
function copyToClipboard() {
    const contractAddress = "Dn1ncDLeagKP6DSQjFMn4Ydkz74KiRL7FvPn6TTzDREV";
    navigator.clipboard.writeText(contractAddress).then(() => {
        // Show tooltip or notification
        alert("Contract address copied to clipboard!");
    });
}

// Simple wallet connection simulation
document.getElementById('connectWallet').addEventListener('click', function() {
    alert("Connecting wallet... (This is a demo)");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});