window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.gr/network/">Δίκτυα Υπολογιστών</a></li>',
        '<li><a href="https://grcodeclub.gr/network/protocol">Πρωτόκολλα</a></li>',
        '<li><a href="https://grcodeclub.gr/network/more/list/services-port">Υπηρεσίες και Ports</a></li>',
        '<li><a href="https://grcodeclub.gr/network/more/list/application-and-protocols">Εφαρμογή και Πρωτόκολλο</a></li>',
        '<li><a href="https://grcodeclub.gr/network/orologia">Ορολογία</a></li>',
        '<li><a href="https://grcodeclub.gr/network/more">Έγγραφα</a></li>',
        '<li><a href="https://grcodeclub.gr/network/cloud/">Cloud</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
    var $sidebarMenuInner = document.querySelector('.sidebarMenuInner');
    if ($sidebarMenuInner) {
        menuLinks.forEach(function(link) {
            $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
        });
    }
};
