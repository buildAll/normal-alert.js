(function($) {
    window.normalAlert = function( options ) {

        var defaults = {
            leftBtnText: '我知道了',
            rightBtnText: '去看看',
            alertImg: './ad.jpg',
            leftBtnClicked: function() {
                $('.bill-normal-alert').hide();
            },
            rightBtnClicked: function() {
                console.log('right btn clicked');
            }
        };

        var settings = $.extend( {}, defaults, options );

        var tpl = '<div class="bill-normal-alert">' +
                      '<div class="mask"></div>' +
                      '<div class="alert-window">' +
                           '<div class="img"></div>' +
                           '<div class="btns">' +
                               '<div class="btn-container">' +
                                   '<button class="ignore">' + settings.leftBtnText + '</button>' +
                               '</div>' +
                               '<div class="btn-container">' +
                                   '<button class="action">' + settings.rightBtnText + '</button>' +
                               '</div>' +
                           '</div>' +
                       '</div>' +
                   '</div>';

        var setStyle = function() {
            var $tpl = $('.bill-normal-alert');
            var $mask = $tpl.find('.mask');
            var $alertWindow = $tpl.find('.alert-window');
            var $img = $alertWindow.find('.img');
            var $btnContainer = $alertWindow.find('.btn-container');
            var $button = $alertWindow.find('button');
            var $ignore = $btnContainer.find('.ignore');
            var $action = $btnContainer.find('.action');


            $mask.css({
                width: '100%',
                height: '100vh',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                display: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
            });

            $alertWindow.css({
                width: '80%',
                height: '53vh',
                position: 'absolute',
                top: '20%',
                left: '10%',
                right: '10%',
                background: '#fff',
                zIndex: '22'
            });


            $img.css({
                width: '100%',
                height: '85%',
                backgroundImage: 'url(' + settings.alertImg + ')',
                backgroundPosition: 'center center',
                backgroundSize: '100% 100%'
            });

            $button.css({
                width: '56%',
                height: '70%',
                lineHeight: '70%',
                boxSizing: 'border-box',
                position: 'absolute',
                top: '15%',
                right: '22%',
                bottom: '15%',
                left: '22%',
                fontSize: '0.8rem',
                borderRadius: '30px',
                backgroundColor: '#fff'
            });

            $ignore.css({
                color: '#5c49a1',
                border: '1px solid #bebebe'
            });

            $action.css({
                backgroundColor: '#5c49a1',
                color: '#fff',
                border: 'none'
            });

            $btnContainer.css({
                display: 'inline-block',
                float: 'left',
                width: '50%',
                height: '7.9vh',
                position: 'relative',
                boxSizing: 'border-box'
            });

            $button.click(function() {
                var $this = $(this);
                var bg = $this.css('background-color');

                $this.css({
                    backgroundColor: '#ccc',
                    outline: 'none'
                });

                setTimeout(function() {
                    $this.css({
                        backgroundColor: bg,
                    });
                }, 50);
            });


            $mask.show();
        }

        var  bindEvent = function() {
            $('.bill-normal-alert .ignore').click(function() {
                settings.leftBtnClicked();
            });

            $('.bill-normal-alert .action').click(function() {
                settings.rightBtnClicked();
            });
        }


        var show = function() {
            var $alert = $('.bill-normal-alert');

            if ($alert.length > 0) {
                $alert.show();
            } else {
                $('body').append(tpl);
                setStyle();
                bindEvent();
            }
        }

        var setBackground = function(imgurl) {
            var $img = $('.bill-normal-alert .img');

            console.log($img);

            if ($img.length > 0 && imgurl) {
                $img.css({
                    'backgroundImage': 'url(' + imgurl + ')'
                });
            }
        }



        return {
            show: show,
            setBackground: setBackground
        }
    };
})($);
