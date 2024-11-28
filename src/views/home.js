import {html , render} from '../../node_modules/lit-html/lit-html.js'
import { main } from '../elements/elements.js'

const homeTemplate = () => html `

`

export function homePageView(){
    render(homeTemplate(),main);
}