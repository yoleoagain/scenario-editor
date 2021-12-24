import { ThemeProvider } from './ui/theme'
import { EditorTemplate } from './ui/templates/Editor'
import { Editor } from './ui/organisms/Editor'

function App() {
  return (
    <ThemeProvider>
      <EditorTemplate 
        asideContent={null}
        mainContent={Editor}
        headerContent={null}
      />
    </ThemeProvider>
  );
}

export default App;
