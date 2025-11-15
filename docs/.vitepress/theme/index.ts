import DefaultTheme from 'vitepress/theme'
import './style.css'
import bambooDesign from '@bamboo-design/components'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(bambooDesign)
    }
}
