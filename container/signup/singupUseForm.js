
import React, { useEffect, useState } from 'react';
import client from '../../API/api';

export default () => {


    const register = (data) => {
          client.post('/vendor/register', {

          })
          .then(response => console.log(response))
          .catch(error => console.error(error))
    }

    return {
        register
    }
}