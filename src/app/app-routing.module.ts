/**
 * Title: app-routing.module.ts
 * Date: February 24, 2023
 * Author: Jamal Eddine Damir
 * Description: Loan-app routing file
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing modules and components
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Defining application routes
const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "contact",
		component: ContactComponent,
	},
	{
		path: "about",
		component: AboutComponent,
	},
];

// Exporting Router module
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
