if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js');
  });
}

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // Theme
  theme: 'ios',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var $$ = Dom7;

var mainView = app.views.create('.view-main');

// Utilities
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

//Creating the database object
var db = new PouchDB('my_expenses');
var usuario = "";
var cuentas = {};
var presupuesto = {};

//Reading the contents of a Document
db.get('user', function(err, doc) {
   if (err) {
      console.log("Sin usuario");
      //Preparing the document
      doc = {
        _id : 'user',
        data: guid()
        }
      //Inserting Document
      db.put(doc, function(err, response) {
        if (err) {
          return console.log(err);
        } else {
          usuario = doc.data;
          $$('#user').text(usuario);
        }
      });
   } else {
      usuario = doc.data;
      $$('#user').text(usuario);
   }
});

db.get('accounts',function(err, doc) {
  if(err) {
    my_accounts = {
      _id : 'accounts',
      total : 0,
      house : 0,
      school : 0,
      car : 0,
      food : 0,
      clothes : 0,
      party : 0,
      tech : 0,
      gifts : 0,
      doctor : 0,
      other :0
    }
    db.put(my_accounts, function(err, response) {
      if (err) {
        return console.log(err);
      } else {
        cuentas = my_accounts;
        readbudget();
        populateAcc(cuentas);
      }
    });
  } else {
      cuentas = doc;
      readbudget();
      populateAcc(cuentas);
  }
});

$$('.panel-left').on('panel:opened', function () {
  fillbudget();
  console.log('Panel left: opened');
});

function confirmbdgt(cat) {
  app.dialog.confirm($$('#b'+cat).val(), cat, function(){
    $$('#b'+cat).val(1000);
  });
}

function fillbudget() {
  budget = presupuesto;
  $$('#bhouse').val(budget.house);
  $$('#bschool').val(budget.school);
  $$('#bcar').val(budget.car);
  $$('#bfood').val(budget.food);
  $$('#bclothes').val(budget.clothes);
  $$('#bparty').val(budget.party);
  $$('#btech').val(budget.tech);
  $$('#bgifts').val(budget.gifts);
  $$('#bdoctor').val(budget.doctor);
  $$('#bother').val(budget.other);
  console.log("ppt llenado");
}

function readbudget() {
  db.get('budget',function(err, doc) {
    if(err) {
      my_budget = {
        _id : 'budget',
        total : 0,
        house : 0,
        school : 0,
        car : 0,
        food : 0,
        clothes : 0,
        party : 0,
        tech : 0,
        gifts : 0,
        doctor : 0,
        other :0
      }
      db.put(my_budget, function(err, response) {
        if (err) {
          return console.log(err);
        } else {
          presupuesto= my_budget;
        }
      });
    } else {
        presupuesto = doc;
    }
  });
};

function populateAcc(cuentas) {
  $$('#total').text(toEmoticon(cuentas.total));
  app.gauge.get('#house').update({labelText:'$'+cuentas.house.toString()});
  app.gauge.get('#school').update({labelText:'$'+cuentas.school.toString()});
  app.gauge.get('#car').update({labelText:'$'+cuentas.car.toString()});
  app.gauge.get('#food').update({labelText:'$'+cuentas.food.toString()});
  app.gauge.get('#clothes').update({labelText:'$'+cuentas.clothes.toString()});
  app.gauge.get('#party').update({labelText:'$'+cuentas.party.toString()});
  app.gauge.get('#tech').update({labelText:'$'+cuentas.tech.toString()});
  app.gauge.get('#gifts').update({labelText:'$'+cuentas.gifts.toString()});
  app.gauge.get('#doctor').update({labelText:'$'+cuentas.doctor.toString()});
  app.gauge.get('#other').update({labelText:'$'+cuentas.other.toString()});
};

function graba(a){
  if (a=='money') {
  var lana = toEmoticon($$('#lana').val());
  console.log($$('#pop'));
  $$('#total').text(lana);
  }
}

function toEmoticon(a){
  const temp_num = Math.round(a*100);
  const temp_txt = temp_num.toString();
  var emotics = "";
  if (temp_txt.length==1) {emotics = "0️⃣.0️⃣";}
  if (temp_txt.length==2) {emotics = "0️⃣";}

  for (var i = 0; i < temp_txt.length; i++) {
    if ((temp_txt.length - i) == 2) {
      emotics = emotics + ".";
    }
    if ( (temp_txt.length - i - 2)%3 == 0 && (temp_txt.length - i - 2) >0 && i>0) {
      emotics = emotics + ",";
    }

    switch(temp_txt.charAt(i)) {
      case "0":
      emotics = emotics + "0️⃣";
      break;
      case "1":
      emotics = emotics + "1️⃣";
      break;
      case "2":
      emotics = emotics + "2️⃣";
      break;
      case "3":
      emotics = emotics + "3️⃣";
      break;
      case "4":
      emotics = emotics + "4️⃣";
      break;
      case "5":
      emotics = emotics + "5️⃣";
      break;
      case "6":
      emotics = emotics + "6️⃣";
      break;
      case "7":
      emotics = emotics + "7️⃣";
      break;
      case "8":
      emotics = emotics + "8️⃣";
      break;
      case "9":
      emotics = emotics + "9️⃣";
      break;
    }
  }
  emotics = "💲  "+emotics;
  if (temp_num%100 == 0) {emotics = emotics.substring(0,emotics.length-7)}

  //console.log(emotics);
  return emotics;
}

function doSomething(a){
  console.log('Click en ' + a);
       // Create dynamic Popover
  var dynamicPopover = app.popover.create({
    targetEl: '#'+a,
    content: 
    '<div id="pop" class="popover">'+
                '<div class="popover-inner">'+
                      '<div class="list no-hairlines-md">'+
                        '<ul>'+
                          '<li class="item-content item-input">'+
                            '<div class="item-inner">'+
                              '<div class="item-input-wrap">'+
                                '<input id="today" type="date" >'+
                              '</div>'+
                            '</div>'+
                          '</li>'+
                          '<li class="item-content item-input">'+
                            '<div class="item-inner">'+
                              '<div class="item-input-wrap">'+
                                '<input id="lana" type="number" placeholder="💰">'+
                              '</div>'+
                            '</div>'+
                          '</li>'+
                          '<li class="item-content item-input">'+
                            '<div class="item-inner">'+
                              '<div class="item-input-wrap">'+
                                '<input type="text" placeholder="📝">'+
                              '</div>'+
                            '</div>'+
                          '</li>'+
                        '</ul'+
                      '/div'+
                    '/div'+
                    '<div class="block">'+
                        '<p class="row inset">'+
                            '<button class="col button button-big color-gray popover-close" style="margin-left: 5px;" onclick="graba(\''+a+'\')">✅</button>'+
                            '<button class="col button button-big color-gray link popover-close" style="margin-right: 5px;">❌</button>'+
                        '</p>'+
                    '</div>'+
                '</div>'+
              '</div>',
    // Events
    on: {
      open: function (popover) {
        console.log('Popover open');
      },
      opened: function (popover) {
        console.log('Popover opened');
      },
    }
  });
  console.log('Ahora a es: ' + a);
  // Events also can be assigned on instance later
  dynamicPopover.on('close', function (popover) {
    console.log('Popover close');
  });
  dynamicPopover.on('closed', function (popover) {
    console.log('Popover closed');
  });
 
  dynamicPopover.open();
  document.querySelector("#today").valueAsDate = new Date();
}