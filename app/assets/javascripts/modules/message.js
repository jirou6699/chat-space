$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
      <div class="MessageInfo">
      <div class="MessageInfo--name">
      ${message.user_name}
      </div>
      <div class="MessageInfo--date">
      ${message.created_at}
      </div>
      </div>
      <div class="MessageText">
      <p class="MessageText__content">
      ${message.text}
      </p>
      <img class="MessageText__image" src="${message.image}">
      </div>
      </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
      <div class="MessageInfo">
      <div class="MessageInfo--name">
      ${message.user_name}
      </div>
      <div class="MessageInfo--date">
      ${message.created_at}
      </div>
      </div>
      <div class="MessageText">
      <p class="MessageText__content">
      ${message.text}
      </p>
      </div>
      </div>`
      return html;
    };
  }
  
  $(".Form").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $(".Chat-main__message-list").append(html);
      $('form')[0].reset();
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('.SendButton').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.SendButton').prop("disabled", false);
    });
  });
});