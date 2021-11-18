const util = require('./util');
const axios = require('axios');

module.exports = {

    createAnAppointment(handler_input) {
        let data = {};
        data.cat_id = '6';
        data.resourceId = '2';
        data.pc_pid = handler_input.patient_id;
        data.fac_id = '1';
        data.fac_billing = '1'; 
        data.pa_status = '-';
        data.pc_startTime = handler_input.date + ' 10:20:30';
        data.pc_eventDate = handler_input.date;
        data.pc_endTime = handler_input.date + ' 10:30:40';

        const config = {
          method: 'post',
          url: 'https://healthhack.bluehealthplatform.com/public/calendar-api?facility=healthhack',
          headers: { 
            'Authorization': 'Bearer 62063299831a357e20ebbdcbd56b0ea5d86a60c1', 
          },
          data : data
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
};