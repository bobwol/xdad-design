epub.def(function() {
  epub["import"]('epub.modules.bootstrap@1.0')
  epub["import"]('epub.modules.tmpl@1.0')

  var SimpleSlide = function(element, options) {
    var self = this;
    this.$element = $(element)
    this.options = options
    this.options.id = this.options.id||this.$element.attr('id')||"myCarousel";
    // this.$element.addClass("carousel")
    this.$element.addClass("slide")
    this.$element.attr("id",this.options.id);
    this.$indicators = this.$element.find('.slideshow-indicators');
    

    $('<style>'+"#"+self.options.id+" "+this.options.slideStyle.join("#"+self.options.id +" ")+'</style>').appendTo( $('head'));
    
    this.$indicators.find('li').each(function(i,that){
      $(that).attr("data-target-"+self.options.id,"#"+self.options.id)
      $(that).attr("data-slide-to-"+self.options.id,(i))
    })


    var template = [
        '<a class="left slideshow-control" href="#'+this.options.id+'" data-slide-'+self.options.id+'="prev">&lsaquo;</a>',
        '<a class="right slideshow-control" href="#'+this.options.id+'" data-slide-'+self.options.id+'="next">&rsaquo;</a>'
    ].join("");
    $.tmpl(template,{}).appendTo(this.$element);
    
    this.options.pause == 'hover' && this.$element.on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))

       /* CAROUSEL DATA-API
   * ================= */

    $(document).on('click.simpleSlide.data-api', '[data-slide-'+self.options.id+'], [data-slide-to-'+self.options.id+']', function(e) {

      var $this = $(this),
        href, $target = $($this.attr('data-target-'+self.options.id) || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        ,
        options = $.extend({}, $target.data(), $this.data()),
        slideIndex

       
        $target.simpleSlide(options)

        if (slideIndex = $this.attr('data-slide-to-'+self.options.id)) {
          $target.data('simpleSlide').pause().to(slideIndex).cycle()
        }

      e.preventDefault()
    })
  }

  SimpleSlide.prototype = {

    cycle: function(e) {

      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

    ,
    getActiveIndex: function() {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

    ,
    to: function(pos) {
      var activeIndex = this.getActiveIndex(),
        that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function() {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

    ,
    pause: function(e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

    ,
    next: function() {
      if (this.sliding) return
      return this.slide('next')
    }

    ,
    prev: function() {
      if (this.sliding) return
      return this.slide('prev')
    }

    ,
    slide: function(type, next) {
      var $active = this.$element.find('.item.active'),
        $next = next || $active[type](),
        isCycling = this.interval,
        direction = type == 'next' ? 'left' : 'right',
        fallback = type == 'next' ? 'first' : 'last',
        that = this,
        e

        this.sliding = true

        isCycling && this.pause()

        $next = $next.length ? $next : this.$element.find('.item')[fallback]()

        e = $.Event('slide', {
          relatedTarget: $next[0],
          direction: direction
        })

        if ($next.hasClass('active')) return

        if (this.$indicators.length) {
          this.$indicators.find('.active').removeClass('active')
          this.$element.one('slid', function() {
            var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
            $nextIndicator && $nextIndicator.addClass('active')
          })
        }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function() {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function() {
            that.$element.trigger('slid')
          }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


  /* CAROUSEL PLUGIN DEFINITION
   * ========================== */
  function replaceReg(str){
    var reg = /\b(\w)|\s(\w)/g; 
    var str = str.toLowerCase();
    return str.replace(reg,function(m){return m.toUpperCase()})
  }
  var old = $.fn.simpleSlide

  $.fn.simpleSlide = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data('simpleSlide'),
        options = $.extend({}, $.fn.simpleSlide.defaults, typeof option == 'object' && option),
       
        action = typeof option == 'string' ? option : ( options.id = options.id||$this.attr('id')||"myCarousel")&&options["slide"+replaceReg(options.id)]
      if (!data) $this.data('simpleSlide', (data = new SimpleSlide(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.simpleSlide.defaults = {
    interval: 5000
    ,pause: 'hover'
    ,slideStyle:
        [
          '{ overflow: hidden;  width: 100%; position: relative;}',
          '.item { display: none;  position: relative;  -webkit-transition: 0.6s ease-in-out left; -moz-transition: 0.6s ease-in-out left; -ms-transition: 0.6s ease-in-out left; -o-transition: 0.6s ease-in-out left; transition: 0.6s ease-in-out left;}',
          '.active,',
          '.next,',
          '.prev { display: block; }',
          '.active { left: 0; }',
          '.next,',
          '.prev {  position: absolute; top: 0;  width: 100%; }',
          '.next { left: 100%; }',
          '.prev {  left: -100%;  }',
          '.next.left,',
          '.prev.right { left: 0; }',
          '.active.left { left: -100%; }',
          '.active.right { left: 100%; }'
        ]
    
  }

  $.fn.simpleSlide.Constructor = SimpleSlide


  /* CAROUSEL NO CONFLICT
   * ==================== */

  $.fn.simpleSlide.noConflict = function() {
    $.fn.simpleSlide = old
    return this
  }

 

})