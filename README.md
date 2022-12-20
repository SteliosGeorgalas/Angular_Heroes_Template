# What is the Use of This Repo

This App is a Simple Angular App which uses

1. Angular Components
2. Angular Routing
3. Services
4. Very Basic CSS
5. Communication from parent to child component

## What Does this Application do

This Application has just three pages.

   1. A Heroes List Page which Lists out all the heroes
   2. A Heroes Details Page which will display the Details for the Selected Hero
   3. A dashboard which displays the top heroes


# Prerequites to Run the Application

## Install NodeJS

Refer `https://nodejs.org/en/` to install NodeJS

## Install Angular CLI

Use the following command to install angular CLI

`npm install -g @angular/cli`

Refer https://cli.angular.io/ to know more about angular CLI

## Steps to Run the Application

Clone the repo into local

In Order to Run the Application Type the following command in command prompt

`ng serve`

The Application runs on localhost:4200

## Application Design

The Components Created are

    1. heroes.component : This Component Is to Display the List of Heroes

    2. hero-details.component : This Component Displays the Details for a Single Selected Hero

    3. dashboard.component : This Component Displays the Top Heros as a landing page.

    4. messages.component : This Component Displays a history of users navigation between components.

The Services Created are

    1. hero.service : All the Data used in the application are stored in mock-heroes.ts. Hero service helps in retrieving the data from the specified file replicating a Http Request. In Real Applications , the Service Helps to Get the Data from a Rest API or any other API by making a HTTP Request

    2. messages.service : Message service helps in replicating a Http request from and to a database so as to 'get/post/delete' Messages. In Real Applications, the Service Helps to Get the Data from a Rest API or any other API by making a HTTP Request

Routing Module is used to Route between the 3 pages in the application. The 3 paths used in the routing module are

    1. /dashboard : This url displays the dashboard which is used as a landing page and displays the top 4 heroes

    2. /heroes : This url displays the list of heroes and points to the hero details if one selected
   
    3. /details/id : This url displays the details for the selected hero 
