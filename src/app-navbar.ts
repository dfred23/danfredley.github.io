import {LitElement, html} from "lit";

class AppNavbar extends LitElement {
    render() {
        console.log("I am automatically called when the component is used in the HTML");
        return html`<h1>My navbar</h1>`;
    }
}

window.customElements.define("app-navbar", AppNavbar);