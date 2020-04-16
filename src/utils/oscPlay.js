export const oscPlay = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const compressor = audioContext.createDynamicsCompressor();
    const now = audioContext.currentTime;
    oscillator.type = 'sine';
    oscillator.frequency.value = 261.63;
    compressor.threshold.setValueAtTime(-50, audioContext.currentTime);
    compressor.knee.setValueAtTime(40, audioContext.currentTime);
    compressor.ratio.setValueAtTime(12, audioContext.currentTime);
    compressor.attack.setValueAtTime(0, audioContext.currentTime);
    compressor.release.setValueAtTime(0.25, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, now + 0.2);
    gainNode.gain.value = 0.2;
    oscillator.connect(gainNode)
      .connect(compressor)
      .connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.2);
    setTimeout(() => {
      audioContext.close();
    }, 1000);
  };

  
  export const beep = (vol, freq, duration) =>{
    const audioContext = new AudioContext() 
    const oscillator=audioContext.createOscillator()
    const gainNode=audioContext.createGain()
    oscillator.connect(gainNode)
    oscillator.frequency.value=freq
    oscillator.type="square"
    gainNode.connect(audioContext.destination)
    gainNode.gain.value=vol*0.01
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime+duration*0.001)
}