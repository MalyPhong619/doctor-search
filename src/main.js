import $ from 'jquery';
import './sass/styles.scss';
import { DoctorCall } from './doctorapi';

$(document).ready(function() {
  $(".form-field").submit(function(event) {
    event.preventDefault();

    const inputName = $("#doctorName").val();
    const inputIllness = $("#illnessName").val();

    const doctorCall = new DoctorCall();
    const promise = doctorCall.searchDoctor(inputName, inputIllness);


    promise.then(function(response){
      const body = JSON.parse(response);
      console.log(body);
      if (body.data.length === 0) {
        $(".showErrors").text("There are no matches that meet the criterea entered.");
        $(".form-field").hide();
        $(".reset").show();
      } else {
      for(let i = 0; i <= body.data.length; i++){
        $(".doctorList").append('<div id="doctor' + i + '"><h3>' +  body.data[i].profile.first_name + ' ' + body.data[i].profile.last_name + '</h3><ul><li> <strong>Phone Number:</strong> ' + body.data[i].practices[0].phones[0].number + '</li><li><strong>Address: </strong>' +  body.data[i].practices[0].visit_address.street + '</li></ul></div>');
        $(".submitbutton").hide();
        $(".newsearch").show();
      }
    }
    },
    function(error) {
      $(".form-field").hide();
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      $(".reset").show();
    });
  });
});
