SaferpayFields.init({
  apiKey: 'cf3f7c46-5738-48fc-bc41-9c7a5c4ec8d2',
  url: 'https://test.saferpay.com/Fields/249343',
  placeholders: {
    holdername: 'Test User',
    cardnumber: '0000 0000 0000 0000',
    expiration: 'MM/JJJJ',
    cvc: '000'
  },
  style: {
    '.form-control': 'border-left: none; border-top: none; border-right: none; border-radius: unset;'
  },
  cssUrl: '',
  onSuccess: function() {
    var element = document.getElementById('submit');
    element.removeAttribute('disabled');
  },
  onError: function(evt) {
    console.log('Error in init: ' + evt.message);
  }
});

document.getElementById('submit').onclick = function() {
  SaferpayFields.submit({
    onSuccess: function(evt) {
      document.getElementById('token').value = evt.token;
    },
    onError: function(evt) {
      console.log('Error in submit: ' + evt.message);
    }
  });
};