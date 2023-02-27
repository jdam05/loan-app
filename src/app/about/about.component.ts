/**
 * Title: about.component.ts
 * Date: February 24, 2023
 * Author: Jamal Eddine Damir
 * Description: about component for loan-app
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Import Component object
import { Component } from "@angular/core";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
	title = "About Us:";
}
