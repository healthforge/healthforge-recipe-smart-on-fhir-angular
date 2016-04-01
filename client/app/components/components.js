import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import D3Test from './d3Test/d3Test';
import FHIRTest from './fhirTest/fhirTest';
import D3StackedBarChart from './d3StackedBarChart/d3StackedBarChart';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  D3Test.name,
  FHIRTest.name,
  D3StackedBarChart.name
]);

export default componentModule;
