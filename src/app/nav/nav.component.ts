import { Component } from "@angular/core";

@Component({
    selector: "app-nav",
    template: `<h1 id="nav-wrapper">{{title}}</h1>`,
    styles: ["#nav-wrapper:{background-color:pink;}"]
})

export class NavComponent {
    title = "Name oF nav"
}