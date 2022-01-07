import { ThemeProvider } from './ui/theme'
import { EditorTemplate } from './ui/templates/EditorTemplate'
import { Editor } from './ui/organisms/Editor'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <EditorTemplate
        AsideContent={null}
        MainContent={Editor}
        HeaderContent={null}
      />
    </ThemeProvider>
  );
}

export default App;
