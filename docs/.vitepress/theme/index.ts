import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'bamboo-design/es/style.css';
import bambooDesign from 'bamboo-design'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(bambooDesign)
    }
}
