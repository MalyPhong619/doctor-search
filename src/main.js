import $ from 'jquery';
import { DoctorCall } from './doctorapi';

$(document).ready(function() {
  $(".form-field").submit(function(event) {
    event.preventDefault();

    const inputName = $("#doctorName").val();

    const doctorCall = new DoctorCall();
    const promise = doctorCall.searchDoctor(inputName);

    promise.then(function(response){
      const body = JSON.parse(response);
      console.log(body);

      for(let i = 0; i <= body.data.length; i++){
      $(".doctorList").append('<div id="doctor' + i + '"><h3>' +  body.data[i].profile.first_name + ' ' + body.data[i].profile.last_name + '</h3><ul><li> <strong>Phone Number:</strong> ' + body.data[i].practices[0].phones[0].number + '</li><li><strong>Address: </strong>' +  body.data[i].practices[0].visit_address.street + '</li></ul></div>');
      }

    });
  });
});
