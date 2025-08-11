/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky footer
  const bumpIt = () => {
    document.body.style.marginBottom = `${document.querySelector('.page__footer').offsetHeight}px`;
  };
  let didResize = false;

  bumpIt();

  window.addEventListener('resize', () => {
    didResize = true;
  });

  setInterval(() => {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  $('#main').fitVids();

  // init sticky sidebar
  if (document.querySelector('.sticky')) {
    Stickyfill.add(document.querySelectorAll('.sticky'));
  }


  const stickySideBar = () => {
    const MINIMUM_WIDTH = 1024;

    // Adjust if the follow button is shown based upon screen size
    const width = window.innerWidth;
    let show = document.querySelector('.author__urls-wrapper button') ? width > MINIMUM_WIDTH : !document.querySelector('.author__urls-wrapper button').offsetParent;

    // Don't show the follow button if there is no content for it
    const count = document.querySelectorAll('.author__urls.social-icons li').length - document.querySelectorAll('li[class="author__desktop"]').length;
    if (width <= MINIMUM_WIDTH && count === 0) {
      document.querySelector('.author__urls-wrapper button').style.display = 'none';
      show = false;
    }

    if (show) {
      // fix
      if (document.querySelector('.sticky')) {
        Stickyfill.rebuild();
        Stickyfill.init();
      }
      document.querySelector('.author__urls').style.display = 'block';
    } else {
      // unfix
      if (document.querySelector('.sticky')) {
        Stickyfill.stop();
      }
      document.querySelector('.author__urls').style.display = 'none';
    }
  };

  stickySideBar();

  window.addEventListener('resize', () => {
    stickySideBar();
  });

  // Follow menu drop down
  document.querySelector('.author__urls-wrapper button').addEventListener('click', () => {
    $('.author__urls').fadeToggle('fast', () => {});
    document.querySelector('.author__urls-wrapper button').classList.toggle('open');
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $('a').smoothScroll({ offset: -65 });

  // add lightbox class to all image links
  document.querySelectorAll("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").forEach(item => {
    item.classList.add('image-popup');
  });

  // Magnific-Popup options
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      },
    },
    closeOnContentClick: true,
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
});