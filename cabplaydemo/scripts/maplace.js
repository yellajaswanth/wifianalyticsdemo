var maplace = [];

function showGroup(index) {
    alert('Cddd123');
    if (maplace[index]) {
        console.log('loaded: '+index)
        return;
    }
    
    console.log('loading: '+index)

    $.getJSON('http://maplacejs.com/data/ajax.php', { type: index }, function(data) {
        maplace[index] = new Maplace({
            map_div: '#gmap' + index,
            controls_type: 'list',
            controls_on_map: true,
            locations: data.locations,
            view_all_text: data.title,
            type: data.type,
            force_generate_controls: true
        }).Load();
    });
}

showGroup(1);
