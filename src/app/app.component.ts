/**
 * Title: app.component.ts
 * Date: February 24, 2023
 * Author: Jamal Eddine Damir
 * Description: Root component for in-n-out-books
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Import Component object
import { Component } from "@angular/core";

// defining component's metadata
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
// AppComponent class
export class AppComponent {
	title = "loan-app";
}
