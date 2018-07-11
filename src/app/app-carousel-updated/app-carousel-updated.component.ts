import { Component, OnInit } from '@angular/core';
import $ from '../../../node_modules/jquery';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

@Component({
  selector: 'app-carousel-updated',
  templateUrl: './app-carousel-updated.component.html',
  styleUrls: ['./app-carousel-updated.component.css']
})
export class AppCarouselUpdatedComponent implements OnInit {

  constructor() {
    let $num = $('.my-card').length;
    let $even = $num / 2;
    let $odd = ($num + 1) / 2;

    if ($num % 2 == 0) {
      $('.my-card:nth-child(' + $even + ')').addClass('active');
      $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
      $('.my-card:nth-child(' + $even + ')').next().addClass('next');
    } else {
      $('.my-card:nth-child(' + $odd + ')').addClass('active');
      $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
      $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
    }

    $('.my-card').click(function () {
      let $slide = $('.active').width();
      console.log($('.active').position().left);

      if ($(this).hasClass('next')) {
        $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
      } else if ($(this).hasClass('prev')) {
        $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
      }

      $(this).removeClass('prev next');
      $(this).siblings().removeClass('prev active next');

      $(this).addClass('active');
      $(this).prev().addClass('prev');
      $(this).next().addClass('next');
    });


    // Keyboard nav
    $('html body').keydown(function (e) {
      if (e.keyCode == 37) { // left
        $('.active').prev().trigger('click');
      }
      else if (e.keyCode == 39) { // right
        $('.active').next().trigger('click');
      }
    });
  }


  ngOnInit() {
  }

}
