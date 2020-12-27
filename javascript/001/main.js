const obj = {
  first_name: 'Tomonobu',
  last_name: 'Nakamura',
  printFullName: function(){
    console.log(this);

    window.setTimeout(function() {
      console.log(this);
    }.bind(this));
  }
}

obj.printFullName();
