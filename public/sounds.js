
function playClickSound() {
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}


document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', playClickSound);
    });
    
    
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', playClickSound);
    });
    
    
    document.querySelectorAll('.opt').forEach(option => {
        option.addEventListener('click', playClickSound);
    });
});