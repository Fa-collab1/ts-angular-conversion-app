# About the ConversionApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.
This application was produced as the third coding assignment in the course:  
**VT2024 [DT208G Datateknik GR (B), Programmering i TypeScript (distans)](https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT208G/)**

## Construction and Architecture

This application serves to ease the process of converting units between different measurement systems such as meters to feet or Celsius to Fahrenheit. Below, I detail the construction of the site, the techniques utilized, and the key learnings from my development journey.

## Key Components

- **Angular Components:** The application's structure is defined by several Angular components, including HomeComponent, AboutComponent, ConversionComponent, footerComponent, headerComponent, pictureShowComponent, and SecretAreaComponent. These components are routed using Angular's RouterModule, ensuring seamless navigation and a clear separation of concerns.
- **Routes:** Our routing setup is defined in a specific routes configuration, which not only directs the basic navigation like Home, About, and Conversion pages but also handles redirects and errors, pointing to a SecretAreaComponent for any undefined routes.
- **Data Binding and Forms:** The ConversionComponent is crucial as it handles the real-time conversion logic. Utilizing Angular’s FormsModule, this component allows for two-way data binding of user inputs, enabling instant calculation as data is entered or changed.
- **Styling with SCSS:** Styling across the application is managed using SCSS for modular and scalable CSS management. This includes specific styles for navigation, forms, and the footer, providing a cohesive and responsive design.

## Techniques Employed

Key techniques employed in the development of this app include:

- Component-Based Architecture
- Reactive Forms
- Routing
- Data binding
- SCSS for Design
- [GitHub](https://github.com/Fa-collab1/ts-angular-conversion-app)
- Published on [Netlify](https://main--dynamic-semolina-85b87c.netlify.app/)

## Lessons Learned

This project was not only about implementing functionality but also about my first learning experience with Angular. It was not easy to understand at first, but I think it has gotten a little clearer now.

- Publishing to Heroku, with this I failed utterly, but Netlify "just worked instantly", so I chose to go with Netlify for this project.
- Developing the Conversion App has been a rewarding journey, pushing the boundaries of my skills in front-end development.
- I really do like not having to copy the navigation bar and footer to every single page as we have done before. Changes to it used to be such a hassle.
- It was also really easy to incorporate modules. The modular way of working is really great!
- I'm not quite sure If I have put too much css in the main css file or not though.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
(this I haven't tried)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
(this I haven't tried)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
