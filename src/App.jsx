import React from 'react';
import Brainrot from './components/Brainrot';
import MusicPicker from './components/MusicPicker';
import ProjectX from './components/ProjectX';
import ScriptGenerator from './components/ScriptGenerator';
import StyleTool from './components/StyleTool';
import VideoBackgroundSelector from './components/VideoBackgroundSelector';
import VoicePicker from './components/VoicePicker';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Hello, π v0.1 is working!</h1>
      <Brainrot />
      <MusicPicker />
      <ProjectX />
      <ScriptGenerator />
      <StyleTool />
      <VideoBackgroundSelector />
      <VoicePicker />
    </div>
  );
}

export default App;