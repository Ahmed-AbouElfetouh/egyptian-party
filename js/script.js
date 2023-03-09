let width = $('#the_nav').innerWidth();

$('.open-btn').click(function () {
  if ($('#the_nav').css('left') == '0px') {
    $('#the_nav').animate({ left: `-${width}` });
    $(this).animate({ left: 30 });
    $('#header-content').animate({ left: '50%' });
  } else {
    $('#the_nav').animate({ left: 0 });
    $(this).animate({ left: `${width + 20}` });
    $('#header-content').animate({ left: '60%' });
  }
});

$('#close-btn').click(function () {
  $('#the_nav').animate({ left: `-${width}` });
  $('#header-content').animate({ left: '50%' });
  $('.open-btn').animate({ left: 30 });
});

$('#the_nav ul li a').click(function (e) {
  let the_href = $(e.target).attr('href');
  let section_top = $(the_href).offset().top;
  $('html, body').animate({ scrollTop: section_top }, 500);
});

$('.title').click(function (e) {
  $(e.target).parent().next().slideToggle(500);
});

let countDownDate = new Date('march 31, 2023 23:59:59').getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector('.days').innerHTML =
    days < 10 ? `0${days} Days` : days + ' Days';
  document.querySelector('.hours').innerHTML =
    hours < 10 ? `0${hours} Hours` : hours + ' Hours';
  document.querySelector('.minutes').innerHTML =
    minutes < 10 ? `0${minutes} Minutes` : minutes + ' Minutes';
  document.querySelector('.seconds').innerHTML =
    seconds < 10 ? `0${seconds} Seconds` : seconds + ' Seconds';

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

$('#text_area').on('keyup', function (e) {
  let input_value_length = 100;
  if (e.keyCode == 8) {
    $('#number').text(+$('#number').text() + 1);
    if ($('#number').text() >= input_value_length) {
      $('#number').text('100');
      return;
    }
  } else {
    $('#number').text(+$('#number').text() - 1);
    if ($('#number').text() == '0') {
      $('#number').text('0');
    }
  }
});
