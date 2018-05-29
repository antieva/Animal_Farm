import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { animal } from './animalfarm.js';

$(document).ready(function() {
  $('#starter-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = animal;
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
