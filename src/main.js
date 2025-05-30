import './styles.less'
import './left.less'
import './right.less'
import { fetchHitokoto } from './hitokotoLoader'

document.addEventListener('DOMContentLoaded', () => {
    fetchHitokoto()
})
