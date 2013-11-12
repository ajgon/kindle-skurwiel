(function() {
    $(function() {
        var TOKENS = {
                'kindle-fire-01': 'https://www.dropbox.com/s/ojffp1nc1m06q4g/cs-kindle-fire-season-01.zip',
                'kindle-fire-02': 'https://www.dropbox.com/s/voi6m6a3t8g2zmb/cs-kindle-fire-season-02.zip',
                'kindle-fire-03': 'https://www.dropbox.com/s/xn5xww28nmv2gd3/cs-kindle-fire-season-03.zip',
                'kindle-fire-04': 'https://www.dropbox.com/s/uryec2hp66i94y2/cs-kindle-fire-season-04.zip',
                'kindle-fire-05': 'https://www.dropbox.com/s/v6db8nqz8c71ums/cs-kindle-fire-season-05.zip',
                'kindle-fire-all': 'https://www.dropbox.com/s/xupm95xp0wxqm48/cs-kindle-fire-season-all.zip',
                'kindle-paperwhite-01': 'https://www.dropbox.com/s/9g1riozascj6nhj/cs-kindle-paperwhite-season-01.zip',
                'kindle-paperwhite-02': 'https://www.dropbox.com/s/way4fs717r9lfbl/cs-kindle-paperwhite-season-02.zip',
                'kindle-paperwhite-03': 'https://www.dropbox.com/s/7ge2d9d5tyoztyt/cs-kindle-paperwhite-season-03.zip',
                'kindle-paperwhite-04': 'https://www.dropbox.com/s/w0611a0054iymrq/cs-kindle-paperwhite-season-04.zip',
                'kindle-paperwhite-05': 'https://www.dropbox.com/s/zxtxqr95d5n56yb/cs-kindle-paperwhite-season-05.zip',
                'kindle-paperwhite-all': 'https://www.dropbox.com/s/4cqo3aiu0put4wo/cs-kindle-paperwhite-season-all.zip',
                'kindle-01': 'https://www.dropbox.com/s/0ou9zs2dymdbayz/cs-kindle-season-01.zip',
                'kindle-02': 'https://www.dropbox.com/s/tko7hg5ebyhainm/cs-kindle-season-02.zip',
                'kindle-03': 'https://www.dropbox.com/s/1275re8rl06iu0s/cs-kindle-season-03.zip',
                'kindle-04': 'https://www.dropbox.com/s/xuqvpn98hpffczs/cs-kindle-season-04.zip',
                'kindle-05': 'https://www.dropbox.com/s/v3np2s85aj8ubeo/cs-kindle-season-05.zip',
                'kindle-all': 'https://www.dropbox.com/s/rk4lys6twvysxk6/cs-kindle-season-all.zip',
            },
            reader = false,
            season = false,
            extension = false,
            $window = $(window),
            $body = $('body'),
            $img = $('#with-logo img'),
            updateDownloadButton = function updateDownloadButton() {
                var $download = $('#download');
                if(reader && season) {
                    $download.removeClass('disabled').attr('data-target', reader + '-' + season);
                } else {
                    $download.addClass('disabled').removeAttr('data-target');
                }
            };
        $('.dropdown-change').on('click', '.dropdown-menu li a', function(e) {
            var $this = $(this);
            e.preventDefault();
            $this.closest('.dropdown-change').find('.value').text($this.text());
            reader = $this.data('reader') ? $this.data('reader') : reader;
            season = $this.data('season') ? $this.data('season') : season;
            updateDownloadButton();
        });
        $('#download').on('click', function(e) {
            var $this = $(this);
            e.preventDefault();
            if (!$this.is('.disabled') && $this.data('target')) {
                window.location.href = TOKENS[$this.data('target')];
            }
        });
        $window.resize(function() {
            $img.height($window.height() - $body.height() + $img.height());
        }).resize();
    });
}.call(this));
