$(document).ready(function(){

    // draggable 
    $( "#draggable" ).draggable();

    // accordian 
    $( "#accord" ).accordion();
    // accord
    $( "#accordion" ).accordion({
        collapsible: true
    });
    // sortable 
    $( "#accordion2" )
      .accordion({
        header: "> div > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
      });
    

});

$(document).ready(function(){

    var availableTags = [
        "html",
        "css",
        "box",
        "border"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });

    //   date picker 
    $( "#datepicker" ).datepicker();

    // diolougue 
    $( "#dialog" ).dialog();

    // animation 
    $( "#dialo" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
   
      $( "#opener" ).on( "click", function() {
        $( "#dialo" ).dialog( "open" );
      });

});
