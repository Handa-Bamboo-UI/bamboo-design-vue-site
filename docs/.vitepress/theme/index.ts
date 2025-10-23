import DefaultTheme from 'vitepress/theme'
import '../../src/style.css'
import bambooDesign from '@bamboo-design/components'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(bambooDesign)
    }
}
