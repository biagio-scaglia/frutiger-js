// Self-contained Frutiger Aero Web Audio Synthesizer
// Generates authentic 2000s Ambient Glass chimes and electronic tunes without external assets

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtxClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays an authentic crystalline Frutiger Aero chime chord (Cmaj9 / Emaj9)
 */
export function playAeroChime(gainVal: number = 74) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const volume = Math.max(0.01, Math.min(1, gainVal / 100)) * 0.25;
  const now = ctx.currentTime;
  const frequencies = [523.25, 659.25, 783.99, 987.77, 1046.5]; // C5, E5, G5, B5, C6 (crystal sparkle)

  frequencies.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, now + idx * 0.04);

    gain.gain.setValueAtTime(0, now + idx * 0.04);
    gain.gain.linearRampToValueAtTime(volume / frequencies.length, now + idx * 0.04 + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.04 + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.04);
    osc.stop(now + idx * 0.04 + 1.3);
  });
}

/**
 * Plays a short tactile glass water-droplet click sound
 */
export function playAeroClick(gainVal: number = 74) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const volume = Math.max(0.01, Math.min(1, gainVal / 100)) * 0.2;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, now);
  osc.frequency.exponentialRampToValueAtTime(1600, now + 0.06);

  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.09);
}

/**
 * Ambient Synth Loop for WMP / Music Player
 */
let musicOscillators: OscillatorNode[] = [];
let musicInterval: number | null = null;

export function startAeroMusic(gainVal: number = 74, onTick?: (sec: number) => void) {
  stopAeroMusic();
  const ctx = getAudioContext();
  if (!ctx) return;

  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(
    Math.max(0.01, Math.min(1, gainVal / 100)) * 0.15,
    ctx.currentTime
  );
  masterGain.connect(ctx.destination);

  let step = 0;
  const melody = [
    [440, 554.37, 659.25], // A major
    [493.88, 587.33, 739.99], // B minor
    [329.63, 415.3, 493.88], // E major
    [369.99, 440, 554.37], // F# minor
  ];

  const playChord = () => {
    const chord = melody[step % melody.length];
    step++;
    const now = ctx.currentTime;

    chord.forEach(freq => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 1.9);
      musicOscillators.push(osc);
    });

    onTick?.(step);
  };

  playChord();
  musicInterval = window.setInterval(playChord, 1800);
}

export function stopAeroMusic() {
  if (musicInterval !== null) {
    clearInterval(musicInterval);
    musicInterval = null;
  }
  musicOscillators.forEach(osc => {
    try {
      osc.stop();
      osc.disconnect();
      // eslint-disable-next-line no-empty
    } catch {}
  });
  musicOscillators = [];
}
