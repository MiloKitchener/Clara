import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})

export class SplashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#top').offset().top + $('#top').height();

    // on scroll, 
    $(window).on('scroll',function() {
      // we round here to reduce a little workload
      var stop = Math.round($(window).scrollTop());

      if (stop > mainbottom) {
        $('.nav').addClass('past-main');
      }
      else {
        $('.nav').removeClass('past-main');
      }
    });
  }

}
