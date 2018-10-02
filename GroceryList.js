
$('.add-item').on('click', function(){
  
  let txt = $('.item-input').val();
  $('.item-input').val('');
  let li = $('<li/>').html(txt);
  let deleteButton = $('<button/>').html('Delete Item').addClass('delete-button');
  li.append(deleteButton);
  deleteButton.on('click', function(){
    //$(this).parent().remove();
     // $(this).closest('.sdsdd').remove(); //finding nearest in class
      $(this).closest('li').find('button').remove(); //for traversing up and down tree
  })
  $('.shopping-list').append(li);
  //console.log(txt);
  return false;
});

