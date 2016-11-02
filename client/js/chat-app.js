(function() {
  'use strict';
    window.chat = window.chat || {};

    console.log('wyd');

    var userToken;
    $('.login')
      .on('submit', function submitLogin(event){
        event.preventDefault();
        $.ajax({
            url:'/login',
            method: 'POST',
            data: JSON.stringify({username: $('.username').val() }),
            headers: {
              'Content-Type': 'application/json'
          }
        })
        .done(function handleMessageSuccess(data){
          userToken = data.token;
          console.log('Let\'s Chat!', userToken);
        })
        .fail(function handleMessageFailure(xhr){
          console.log(xhr);
        })
    });

    $('.send-message')
      .on('submit', function sendMessage(event){
        event.preventDefault();
        $.ajax({
            url: '/chat',
            method: 'POST',
            data: JSON.stringify({ message: $('.message').val() }),
            headers: {
              Authorization: userToken,
              'Content-Type': 'application/json'
          }
        })
        .done(function successHandler(data){
          console.log('hey', data);
        })
        .fail(function failHandler(data){
          console.log('try again!');
        })
      });







}());
