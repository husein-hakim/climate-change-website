.slider {
    // .slider__item
    &__item {
      @include default-transition(all);
      // Loop through .slider__item--(slide-number)
      @for $slide from 1 through 5 {
        // .slider__item--(slide-number)
        &--#{$slide} {
          // Within each .slider__item--(slide-number) loop through #slide-(number)
          @for $i from 1 through 5 {
            @if $i <= $slide - 3 {
              // For the slides 3 or more positions on the right
              // #slide-(number):checked ~ .slider__holder .slider__item--(slide-number)
              #slide-#{$i}:checked ~ .slider__holder & {
                z-index: -1;
                opacity: 0;
                transform: translateX(210px) scale(0.65);
              }
            }
            @if $i == $slide - 2 {
              // For the slide 2 positions on the right
              // #slide-(number):checked ~ .slider__holder .slider__item--(slide-number)
              #slide-#{$i}:checked ~ .slider__holder & {
                z-index: 0;
                transform: translateX(210px) scale(0.65);
              }
            }
            @if $i == $slide - 1 {
              // For the slide 1 positions on the right
              // #slide-(number):checked ~ .slider__holder .slider__item--(slide-number)
              #slide-#{$i}:checked ~ .slider__holder & {
                z-index: 1;
                transform: translateX(100px) scale(0.85);
              }
            }
            @if $i == $slide {
              // For the slide 1 positions under the active one
              // #slide-(number):checked ~ .slider__holder .slider__item--(slide-number)
              #slide-#{$i}:checked ~ .slider__holder & {
                position: relative;
                z-index: 2;
                transform: translate(0) scale(1);
              }
            }
            @if $i == $slide + 1 {
              // For the slide 1 positions on the left
              // #slide-(number):checked ~ .slider__holder .slider__item--(slide-number)
              #slide-#{$i}:checked ~ .slider__holder & {
                z-index: 1;
                transform: translateX(-100px) scale(0.85);
              }
            }
            @if $i == $slide + 2 {
              // For the slide 2 positions on the left
              // #slide-(number):checked ~ .slider__holder .slider__item--(slide-number)
              #slide-#{$i}:checked ~ .slider__holder & {
                z-index: 0;
                transform: translateX(-210px) scale(0.65);
              }
            }
            @if $i >= $slide + 3 {
              // For the slide 3 positions or more on the left
              // #slide-(number):checked ~ .slider__holder .slider__item--(slide-number)
              #slide-#{$i}:checked ~ .slider__holder & {
                z-index: -1;
                opacity: 0;
                transform: translateX(-210px) scale(0.65);
              }
            }
          }
        }
      }
    }
  }

  .bullets {
    // .bullets__item
    &__item {
      @include default-transition();
      // Loops through all the bullet points
      @for $bullet from 1 through 5 {
        // .bullets__item--(bullet-number)
        &--#{$bullet} {
          // #slide-(number):checked ~ .bullets .bullets__item--(bullet-number)
          #slide-#{$bullet}:checked ~ .bullets & {
            background: $white;
          }
        }
      }
    }
  }